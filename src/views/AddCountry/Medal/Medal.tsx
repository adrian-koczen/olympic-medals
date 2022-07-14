import React from "react";
// Styled components
import styled from "styled-components";
/// Components
import Error from "src/components/Error/Error";
// Interfaces types
import { Medals } from "../interfaces";

interface Props {
  name: Medals;
  value: number;
  errors: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: (name: Medals, value: string) => void;
}

const Medal = ({ name, value, errors, onChange, setValue }: Props) => {
  const addition = () => {
    const newValue = (Number(value) + 1).toString();
    setValue(name, newValue);
  };

  const subtraction = () => {
    const newValue = (Number(value) - 1).toString();
    setValue(name, newValue);
  };

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    onChange(e);
  };

  return (
    <React.Fragment>
      <Container>
        <HandleCount type="button" onClick={() => addition()}>
          +
        </HandleCount>
        <Input
          name={name}
          value={value}
          type="number"
          onChange={(e) => handle(e)}
        ></Input>
        <HandleCount type="button" onClick={() => subtraction()}>
          -
        </HandleCount>
      </Container>
      {errors && <Error>{errors}</Error>}
    </React.Fragment>
  );
};

const HandleCount = styled.button`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  width: 37px;
  height: 27px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  padding: 4px;
  margin: 0 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export default Medal;
