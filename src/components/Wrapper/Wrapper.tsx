import React from "react";
// Styled components
import styled from "styled-components";

interface Props {
  children: React.ReactElement[] | React.ReactElement;
}

const Wrapper = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding: 0px 25px;
  max-width: 800px;
  margin: 0 auto;
`;

export default Wrapper;
