import react from "react";
import styled, { createGlobalStyle } from "styled-components";

//components
import {NavBar} from "./components/NavBar/NavBar";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}
    body{
        font-family: 'Open Sans', sans-serif;
    }

    h1, h2, h3{
        font-family: 'Righteous', cursive;
    }
`;

const App = () => {
    return (
        <>
        <GlobalStyle/>
        <NavBar/>
        </>
    )
}


export default App;