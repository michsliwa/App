import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";

export const Card = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  padding:1.5rem;
  background-color: ${theme.color.darkgrey};
  border-radius:20px;
  transition: transform 0.5s ease;
  cursor: pointer;
  &:hover{
    opacity:0.8;
    transform:scale(105%);
  }
`;

export const CardImage = styled.div`

  img{
    width: 200px;
    height:200px;
    margin-bottom: 2rem;
    border-radius:1rem;
  }
`;
export const CardInfo = styled.div`
  display: flex;
  margin-bottom:0.8rem;
`;

export const CardInfoSpan = styled.span`
  color: ${theme.color.grey};
`;
