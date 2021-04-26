import React from "react";
import styled from "styled-components";

import { pizzaRed } from "../../styles/colors";
import { Title } from "../../styles/title";

const NavBarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 99;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 2.5px 2.5px 5px rgba(0,0,0, 0.5);
`;

export const NavBar = () => {
  return (
    <NavBarStyled>
      <Logo>Awesome Pizza 🍕</Logo>
    </NavBarStyled>
  );
};
