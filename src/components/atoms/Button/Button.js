import React from "react";
import rightArrow from "../../../assets/images/btn.svg";
import { StyledButton } from "./Button.styles";

const Button = ({ title, link }) => {
    return (
      <StyledButton to={link}>
        <div>{title}</div>
        <img src={rightArrow} alt="rightArrow"/>
      </StyledButton>
    );
  };

  export default Button;
