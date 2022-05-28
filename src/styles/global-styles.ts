import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #f67a6d;
        --white: #ffffff;
        --light-red: #ffe5e4;

        font-size: 80%;
    }

    * {
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, Helvetica, sans-serif;
    }

    button { 
        cursor: pointer;
    }

    #root, html, body {
        display: flex;
        place-content: center;
        place-items: center;

        width: 100vw;
        height: 100vh;
        background: var(--red);
    }
`;
