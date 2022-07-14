import { Medals, State } from "./interfaces";

export const findCountryInArray = (appState: State, countryCode: string) => {
  return appState.countries.findIndex((el, index) => {
    return el.countryCode === countryCode;
  });
};

export const countTotalMedals = (medals: Medals) => {
  return Number(medals.bronze) + Number(medals.silver) + Number(medals.gold);
};
