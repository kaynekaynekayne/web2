import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    body{
        font-family: 'Nunito', sans-serif;
        background-color: #f1f1f1;
        /* background-color: #1b1b1c; */
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