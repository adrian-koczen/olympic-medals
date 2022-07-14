import { createContext, useContext, useEffect, useState } from "react";
import { IContext, State, Props, Country, Medals } from "./interfaces";
// Functions
import { findCountryInArray, countTotalMedals } from "./functions";

const initialAppStateValue = { countries: [] };

const initialContextValue = {
  addCountry: () => {},
  appState: initialAppStateValue,
  saveState: () => {},
  clearState: () => {},
};

const Context = createContext<IContext>(initialContextValue);

const AppState = ({ children }: Props) => {
  const [appState, setAppState] = useState<State>(initialAppStateValue);

  const loadFromLocalStorage = () => {
    const data = localStorage.getItem("appState");
    if (data !== null) {
      setAppState(JSON.parse(data));
    }
  };

  const saveState = () => {
    localStorage.setItem("appState", JSON.stringify(appState));
  };

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  const addCountry = ({
    countryName,
    countryCode,
    imageSrc,
    medals,
  }: Omit<Country, "id">) => {
    // Check if country is already in list
    const isCountryInArrayIndex = findCountryInArray(appState, countryCode);

    // Generate total number of medals
    const totalMedals = countTotalMedals(medals);

    // Generate new element
    const id =
      isCountryInArrayIndex !== -1
        ? isCountryInArrayIndex
        : appState.countries.length;
    const newElement = {
      id: id,
      countryCode: countryCode,
      countryName: countryName,
      imageSrc: imageSrc,
      medals: { ...medals, total: totalMedals },
    };
    let newState = { ...appState };

    // Replace old element or add new to list
    if (isCountryInArrayIndex !== -1) {
      newState.countries[isCountryInArrayIndex] = newElement;
      setAppState(newState);
    } else {
      newState.countries.push(newElement);
      setAppState(newState);
    }
  };

  const clearState = () => {
    const newState = { ...initialAppStateValue };
    setAppState(newState);
  };

  return (
    <Context.Provider value={{ addCountry, appState, saveState, clearState }}>
      {children}
    </Context.Provider>
  );
};

export default AppState;

export const useAppState = () => useContext(Context);
