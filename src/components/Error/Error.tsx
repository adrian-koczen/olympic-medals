import React from "react";
// Styled components
import styled from "styled-components";
// Icons
import { ReactComponent as Exclamation } from "src/icons/exclamation.svg";

interface Props {
  children: string;
}

const Error = ({ children }: Props) => {
  return (
    <Container>
      <WarningIcon />
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.error};
  margin-top: 8px;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const WarningIcon = styled(Exclamation)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export default Error;
