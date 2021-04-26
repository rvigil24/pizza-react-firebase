import react from "react";
import styled, { createGlobalStyle } from "styled-components";

//pages
import { Home } from "./pages/Home";

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
        <Home/>
        </>
    )
}


export default App;