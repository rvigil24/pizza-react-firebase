import react from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
        <div>app</div>
        </>
    )
}

export default App;