type Medals = {
  total: number;
  bronze: number;
  silver: number;
  gold: number;
};

type Country = {
  id: number;
  countryCode: string;
  countryName: string;
  medals: Medals;
};

export interface State {
  countries: Country[];
}

export interface IContext {
  addCountry: ({ countryName, medals }: NewCountry) => void;
}

export interface Props {
  children: React.ReactElement[];
}

export interface NewCountry {
  countryName: string;
  countryCode: string;
  medals: Medals;
}
