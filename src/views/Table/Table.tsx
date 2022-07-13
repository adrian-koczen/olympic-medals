import React, { useEffect, useState } from "react";
// Styled Components
import styled from "styled-components";
// Components
import Box from "src/components/Box/Box";
// Context
import { useAppState } from "src/context/AppState";
import { Country } from "src/context/interfaces";

const Table = () => {
  const AppState = useAppState();
  const [countries, setCountries] = useState<Country[] | []>([]);

  const updateCountries = () => {
    setCountries(AppState.getCountriesList());
  };

  useEffect(() => {
    updateCountries();
  }, []);

  return (
    <Box title="Table">
      <TableHeader>
        <TableRow>
          <CountryNameCell>Country name</CountryNameCell>
          <TableCell>Bronze</TableCell>
          <TableCell>Silver</TableCell>
          <TableCell>Gold</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {countries &&
          countries.map((country: Country) => {
            return (
              <TableRow key={country.id}>
                <CountryNameCell>{country.countryName}</CountryNameCell>
                <TableCell>{country.medals.bronze}</TableCell>
                <TableCell>{country.medals.silver}</TableCell>
                <TableCell>{country.medals.gold}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Box>
  );
};

const CountryNameCell = styled.span`
  min-width: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
`;

const TableBody = styled.div`
  width: 100%;
  box-shadow: -1px 1px 10px 1px rgba(170, 167, 167, 0.75);
`;

const TableRow = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
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
  &:nth-child(2) {
    font-weight: 600;
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
