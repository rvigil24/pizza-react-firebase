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
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.5);
`;

const UserStatus = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;

export const NavBar = ({ login, loggedIn, isLoading, logout }) => {
  return (
    <NavBarStyled>
      <Logo>Awesome Pizza 🍕</Logo>
      <UserStatus>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            {loggedIn ? (
              <>
                Hello, {loggedIn.displayName} | 
                <LoginButton onClick={logout}>Log Out</LoginButton>
              </>
            ) : (
              <LoginButton onClick={login}>Log In / Sign Up</LoginButton>
            )}
          </>
        )}
      </UserStatus>
    </NavBarStyled>
  );
};
