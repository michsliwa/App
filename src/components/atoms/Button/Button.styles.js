import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";
import { Link } from "react-router-dom";


export const StyledButton = styled(Link)`
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top:2rem;
  color: ${theme.color.green};
  div {
    font-size: 1.25rem;
    margin-right: 4px;
  }
  img{
    background-color:${theme.color.green};
  }
`;