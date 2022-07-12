import React from "react";
// Styled components
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";
import GlobalCSS from "src/styles/global";
// Components
import Wrapper from "./components/Wrapper/Wrapper";
// Views
import Header from "src/views/Header/Header";
import Content from "./views/Content/Content";
// Context
import AppState from "./context/AppState";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <AppState>
        <Header />
        <Wrapper>
          <Content />
        </Wrapper>
      </AppState>
    </ThemeProvider>
  );
}

export default App;
