import React, { useEffect, useState } from "react";
// Styled Components
import styled from "styled-components";
// Components
import Box from "src/components/Box/Box";
import Button from "src/components/Button/Button";
// Context
import { useAppState } from "src/context/AppState";
import { Country } from "src/context/interfaces";
// Icons
import { ReactComponent as DownArrow } from "src/icons/downArrow.svg";
import { ReactComponent as UpArrow } from "src/icons/upArrow.svg";
import LoadingSinner from "src/data/loading-spinner.gif";

enum SortBy {
  bronze = "bronze",
  silver = "silver",
  gold = "gold",
  total = "total",
}

interface SortState {
  total: boolean;
}

const SortStateInitialVales = {
  total: true,
};

const Table = () => {
  const { appState, clearState, saveState } = useAppState();
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [countries, setCountries] = useState<Country[] | []>([]);
  const [sortState, setSortState] = useState<SortState>(SortStateInitialVales);

  const updateCountries = () => {
    setCountries(appState.countries);
  };

  const sortList = (sortBy: SortBy) => {
    function compareByTotal(a: Country, b: Country) {
      if (a.medals.total > b.medals.total) return sortState.total ? -1 : 1;
      if (a.medals.total < b.medals.total) return sortState.total ? 1 : -1;
      return 0;
    }

    switch (sortBy) {
      case SortBy.total:
        setSortState({ ...sortState, total: !sortState.total });
        const sorted = countries.sort(compareByTotal);
        setCountries(sorted);
    }
  };

  useEffect(() => {
    updateCountries();
  }, [appState]);

  useEffect(() => {
    if (countries.length > 0) {
      sortList(SortBy.total);
    }
  }, [countries]);

  return (
    <Box title="Table">
      <TableHeader>
        <TableRow>
          <CountryNameCell>Country name</CountryNameCell>
          <TableCell>Gold</TableCell>
          <TableCell>Silver</TableCell>
          <TableCell>Bronze</TableCell>
          <TableCell onClick={() => sortList(SortBy.total)}>
            Medals
            {sortState.total ? <UpArrowIcon /> : <DownArrowIcon />}
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {countries &&
          countries.map((country: Country) => {
            return (
              <TableRow key={country.countryCode}>
                <CountryNameWrapper>
                  {!imageLoaded && <LoadingImage src={LoadingSinner} alt="" />}
                  <CountryFlag
                    src={`flags/${country.imageSrc}.svg`}
                    alt={country.countryName}
                    onLoad={() => setImageLoaded(true)}
                  />
                  <CountryNameCell>{country.countryName}</CountryNameCell>
                </CountryNameWrapper>
                <TableCell>{country.medals.gold}</TableCell>
                <TableCell>{country.medals.silver}</TableCell>
                <TableCell>{country.medals.bronze}</TableCell>
                <TableCell>{country.medals.total}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
      <Setings>
        <Button onClick={() => clearState()}>Clear table</Button>
        <Button onClick={() => saveState()}>Save</Button>
      </Setings>
    </Box>
  );
};

const Setings = styled.div`
  width: 100%;
  margin-top: 8px;
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
`;

const DownArrowIcon = styled(DownArrow)`
  color: ${({ theme }) => theme.colors.darkGray};
  width: 12px;
  height: 12px;
  @media (min-width: 450px) {
    width: 16px;
    height: 16px;
  }
`;

const UpArrowIcon = styled(UpArrow)`
  color: ${({ theme }) => theme.colors.darkGray};
  width: 12px;
  height: 12px;
  @media (min-width: 450px) {
    width: 16px;
    height: 16px;
  }
`;

const LoadingImage = styled.img`
  width: 25px;
  height: 20px;
`;

const CountryFlag = styled.img`
  width: 25px;
  height: 20px;
`;

const CountryNameCell = styled.span`
  width: 150px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.typography.semiSmall};
  position: relative;
  top: 1px;
`;

const CountryNameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  padding-left: 10px;
`;

const TableBody = styled.div`
  width: 100%;
  box-shadow: -1px 1px 10px 1px rgba(170, 167, 167, 0.75);
  overflow-y: scroll;
  max-height: 50vh;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGray};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.darkGray};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`;

const TableRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.lightGray};
  &:nth-child(even) {
    background-color: ${({ theme }) => "#ffffff"};
  }
`;

const TableHeader = styled(TableRow)`
  z-index: 100;
  width: 100%;
  box-shadow: -1px 1px 10px 1px rgba(170, 167, 167, 0.75);
  -webkit-tap-highlight-color: transparent;
  &:nth-child(2) {
    font-weight: 600;
    cursor: pointer;
    font-size: 9px;

    @media (min-width: 450px) {
      font-size: ${({ theme }) => theme.typography.semiSmall};
    }
  }
`;

const TableCell = styled.div`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.gray};
  flex-basis: 0;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Table;
