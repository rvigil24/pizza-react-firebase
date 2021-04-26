import React from "react";
import styled from "styled-components";

import { pizzaRed } from "../../styles/colors";

const NavBarStyled = styled.div`
  background-color: ${pizzaRed};
`;

export const NavBar = () => {
  return <NavBarStyled>navbar</NavBarStyled>;
};
