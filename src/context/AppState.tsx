import { createContext, useContext, useEffect, useState } from "react";
import { IContext, State, Props, NewCountry } from "./interfaces";

const initialValue = {
  addCountry: () => {},
  getCountriesList: () => [],
  saveState: () => {},
};

const Context = createContext<IContext>(initialValue);

const AppState = ({ children }: Props) => {
  const [appState, setAppState] = useState<State>({ countries: [] });

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

  const findCountryInArray = (countryCode: string) => {
    return appState.countries.findIndex((el, index) => {
      return el.countryCode === countryCode;
    });
  };

  const addCountry = ({ countryName, countryCode, medals }: NewCountry) => {
    // Check if country is already in list
    const isCountryInArrayIndex = findCountryInArray(countryCode);

    // Generate new element
    const id =
      isCountryInArrayIndex !== -1
        ? isCountryInArrayIndex
        : appState.countries.length;
    const newElement = {
      id: id,
      countryCode: countryCode,
      countryName: countryName,
      medals: medals,
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

  const getCountriesList = () => {
    return appState.countries;
  };

  return (
    <Context.Provider value={{ addCountry, getCountriesList, saveState }}>
      {children}
    </Context.Provider>
  );
};

export default AppState;

export const useAppState = () => useContext(Context);
