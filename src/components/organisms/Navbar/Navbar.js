import React from "react";
import logo from "../../../assets/images/logo.png";
import {
  Wrapper,
  Logo,
  List,
  Li,
  Menu,
} from "./Navbar.styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
        <Logo>
            <Link to="/">
                <img src={logo} alt="Rick and Morty Logo" />
            </Link>
        </Logo>
        <Menu>
            <List>
                <Li to="/">Home</Li>
                <Li to="/characters">Characters</Li>
                <Li to="/episodes">Episodes</Li>
            </List>
        </Menu>
    </Wrapper>
  );
};

export default Navbar;