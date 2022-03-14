import React from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainTemplate from "../components/templates/MainTemplate";
import Home from "./Home";
import Characters from "./Characters";
import Episodes from './Episodes';


const Root = () => {

  return  (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/episodes" element={<Episodes/>}/>
        </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
