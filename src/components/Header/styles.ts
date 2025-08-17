import styled from "styled-components"
import { defaultTheme } from "../../styles/themes/default"

export const HeaderContainer = styled.header`
    max-width: 1160px;
    padding: 32px 20px;
    margin: 0 auto ;


    display: flex;
    align-items: center;
    gap: 12px;
`


export const Aside = styled.aside`
   margin-left: auto;     
   display: flex;
   gap: 12px;

   div{
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${defaultTheme.colors["purple-light"]};


    svg{
        color: ${defaultTheme.colors.purple}
    }

     span {
      color: ${defaultTheme.colors["purple-dark"]};
    }

    padding: 10px 8px;
    border-radius: 6px;
   }

   a{
    display: flex;
    padding: 10px 8px;
    background-color: ${({theme}) => theme.colors["yellow-light"]};
    border-radius: 6px;
    color: ${({theme}) => theme.colors["yellow-dark"]};
   }
`