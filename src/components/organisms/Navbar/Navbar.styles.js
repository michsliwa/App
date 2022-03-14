import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  width: 90vw;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 214px;
  margin-left: 1rem;
  img {
    width: 100%;
  }
`;
export const Menu = styled.div`
    display: flex;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 5rem;
`;

export const Li = styled(Link)`
  font-size: 1.25rem;
  color: ${theme.color.white};
  transition: color 0.2s ease;
  &:hover {
    color: ${theme.color.green};
  }
`;