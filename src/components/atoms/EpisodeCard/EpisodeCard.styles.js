import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";

export const Card = styled(Link)`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  cursor: pointer;
  color: ${theme.color.white};
  img{
    width: 300px;
    height:400px;
    margin-bottom: 2rem;
    border-radius:1rem;
    transition: transform 0.3s ease;
  }
  &:hover{
    transform: scale(105%);
  }
`;



export const CardImage = styled.div`
`;

export const Season = styled.p`
  font-size: 1.6rem;
  margin:1rem 0;
`;

export const Episodes = styled.p`
  font-size: 1rem;
  color: ${theme.color.grey};
`;