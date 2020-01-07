import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: #343c58;
  height: 56px;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  font-family: "Avenir";
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  margin-left: 26px;
`;

export const LinkPage = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
