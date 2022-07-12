import React, { useRef } from "react";
// Styled components
import styled from "styled-components";

const Medal = ({ name, value, onChange }: any) => {
  const InputRef = useRef<HTMLInputElement>(null);

  const addition = () => {
    if (InputRef.current !== null) {
      InputRef.current.value = (Number(InputRef.current?.value) + 1).toString();
    }
  };

  const subtraction = () => {
    if (InputRef.current !== null) {
      InputRef.current.value = (Number(InputRef.current?.value) - 1).toString();
    }
  };

  return (
    <Container>
      <div onClick={() => addition()}>Plus</div>
      <Input
        ref={InputRef}
        name={name}
        value={value}
        type="number"
        onChange={onChange}
      ></Input>
      <div onClick={() => subtraction()}>Minus</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input``;

export default Medal;
