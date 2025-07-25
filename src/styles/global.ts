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
`