import { createContext, useContext, useEffect, useState } from "react";
import { IContext, State, Props, NewCountry } from "./interfaces";

const initialValue = {
  addCountry: ({ countryName, countryCode, medals }: NewCountry) => {},
  getCountriesList: () => {},
};

const Context = createContext<IContext>(initialValue);

const AppState = ({ children }: Props) => {
  const [appState, setAppState] = useState<State>({ countries: [] });

  useEffect(() => {
    console.log(appState);
  }, [appState]);

  const findCountryInArray = (countryCode: string) => {
    return appState.countries.findIndex((el, index) => {
      return el.countryCode === countryCode;
    });
  };

  const addCountry = ({ countryName, countryCode, medals }: NewCountry) => {
    // Check if country is already in list
    const isCountryInArray = findCountryInArray(countryCode);

    // Generate new element
    const id =
      isCountryInArray !== -1 ? isCountryInArray : appState.countries.length;
    const newElement = {
      id: id,
      countryCode: countryCode,
      countryName: countryName,
      medals: medals,
    };
    let newState = { ...appState };

    if (isCountryInArray !== -1) {
      newState.countries[isCountryInArray] = newElement;
      setAppState(newState);
    } else {
      newState.countries.push(newElement);
      setAppState(newState);
    }
  };

  const getCountriesList = () => {
    return appState;
  };

  return (
    <Context.Provider value={{ addCountry, getCountriesList }}>
      {children}
    </Context.Provider>
  );
};

export default AppState;

export const useAppState = () => useContext(Context);
