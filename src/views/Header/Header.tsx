import React from "react";
// Styled components
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Name>Olympic Medals App</Name>
    </Container>
  );
};

const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.gray};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
  font-weight: 500;
`;

export default Header;
