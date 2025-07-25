import {createGlobalStyle} from "styled-components"
import { defaultTheme } from "./themes/default"


export const GlobalStyle = createGlobalStyle` 
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body{
        background-color: ${defaultTheme.colors.background};
        color: ${defaultTheme.colors["base-title"]};
    }


    body, input, textArea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;

    }
`