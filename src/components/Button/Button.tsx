import React from "react";
// Styled components
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement | string;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <Container onClick={props.onClick} type={props.type}>
      {children}
    </Container>
  );
};

const Container = styled.button`
  margin: 4px 0px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  padding: 4px 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
`;

export default Button;
