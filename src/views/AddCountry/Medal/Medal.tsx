import React, { useRef, useState } from "react";
// Styled components
import styled from "styled-components";
// Interfaces types
import { Medals } from "../interfaces";

interface Props {
  name: Medals;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: (name: Medals, value: string) => void;
}

const Medal = ({ name, value, onChange, setValue }: Props) => {
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
    <Container>
      <div onClick={() => addition()}>addition</div>
      <Input
        name={name}
        value={value}
        type="number"
        onChange={(e) => handle(e)}
      ></Input>
      <div onClick={() => subtraction()}>subtraction</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input``;

export default Medal;
