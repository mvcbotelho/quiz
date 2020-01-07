import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1052px;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Navigation = styled(NavLink)`
  text-decoration: none;
  color: #1e2124;
`;
