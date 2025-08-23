import {createGlobalStyle} from "styled-components"
import { defaultTheme } from "./themes/default"
import { mixins } from "./mixins"


export const GlobalStyle = createGlobalStyle` 
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body{
        background-color: ${defaultTheme.colors.background};
        color: ${defaultTheme.colors["base-text"]};
        -webkit-font-smoothing: antialiased;
    }


    body, input, textArea{
        ${mixins.fonts.textM};
    }

     button {
        border: none;
        cursor: pointer;
    }
`