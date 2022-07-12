import React from "react";
import styled from "styled-components";
// Interfaces
import { Tabs } from "./interfaces";

interface Props {
  name: Tabs;
  children: Tabs;
  isActive: boolean;
  turnTab: (tab: Tabs) => void;
}

const Button = ({ children, isActive, name, turnTab }: Props) => {
  return (
    <Container onClick={() => turnTab(name)}>
      <Text>{children}</Text>
      <DotIcon active={isActive} />
    </Container>
  );
};

const DotIcon = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 8px;
  background-color: ${(props) =>
    props.active
      ? ({ theme }) => theme.colors.pink
      : ({ theme }) => theme.colors.gray};
`;

const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 15px;
  padding: 10px 20px;
  width: 45%;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const Text = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
`;

export default Button;
