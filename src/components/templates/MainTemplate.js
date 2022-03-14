import React from "react";
import Navbar from "../organisms/Navbar/Navbar";
import Footer from "../organisms/Footer/Footer";
import { Wrapper } from "./MainTemplate.styles";

const MainTemplate = ({children}) => {
  return (
    <Wrapper>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </Wrapper>
  );
};

export default MainTemplate;