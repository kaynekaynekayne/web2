import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    body{
        font-family: 'Nunito', sans-serif;
        background-color: rgb(237, 237, 237);
        color:black;
    }
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        color:inherit;
    }
`;