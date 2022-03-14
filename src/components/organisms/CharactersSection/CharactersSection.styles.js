import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto 4rem auto;
  display:flex;
  justify-content:space-around;
  flex-direction:column;
`;

export const Header = styled.p`
  font-size:2.5rem;
  font-weight:bold;
  color:${theme.color.green};
  text-align:center;
  margin-top:2rem;
  margin-bottom:2rem;
`;
