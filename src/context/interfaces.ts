export type Medals = {
  total: number;
  bronze: number;
  silver: number;
  gold: number;
};

export type Country = {
  id: number;
  countryCode: string;
  countryName: string;
  imageSrc: string;
  medals: Medals;
};

export interface State {
  countries: Country[];
}

export interface IContext {
  addCountry: ({
    countryName,
    countryCode,
    imageSrc,
    medals,
  }: Omit<Country, "id">) => void;
  getCountriesList: () => Country[] | [];
  saveState: () => void;
}

export interface Props {
  children: React.ReactElement[];
}
