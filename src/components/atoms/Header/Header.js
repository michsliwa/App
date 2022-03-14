import React from "react";
import { StyledHeader} from "./Header.styles";

const Header = ({title}) => {
  return (
    <StyledHeader>{title}</StyledHeader>
  )
}

export default Header;
