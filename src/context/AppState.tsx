import { createContext, useContext, useState } from "react";
import { IContext, State, Props, NewCountry } from "./interfaces";

const initialValue = {
  addCountry: ({ countryName, countryCode, medals }: NewCountry) => {},
};

const Context = createContext<IContext>(initialValue);

const AppState = ({ children }: Props) => {
  const [appState, setAppState] = useState<State>({ countries: [] });

  const addCountry = ({ countryName, countryCode, medals }: NewCountry) => {
    const id = appState.countries.length > 0 ? appState.countries.length : 0;
    const newElement = {
      id: id,
      countryCode: countryCode,
      countryName: countryName,
      medals: medals,
    };
    let newState = { ...appState };
    newState.countries.push(newElement);
    setAppState(newState);
  };

  return <Context.Provider value={{ addCountry }}>{children}</Context.Provider>;
};

export default AppState;

export const useAppState = () => useContext(Context);
