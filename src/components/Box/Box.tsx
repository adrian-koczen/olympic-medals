import React from "react";
// Styled componnets
import styled from "styled-components";

interface Props {
  title: string;
  children: React.ReactElement | React.ReactElement[];
}

const Box = ({ title, children }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 16px 0;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  box-shadow: -1px 0px 15px -4px rgba(66, 68, 90, 1);
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.typography.normal};
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.grayDark};
`;

export default Box;
