import styled from "styled-components";



export const Container = styled.div`
    background-color: ${({theme})=> theme.colors["base-button"]};
    padding: 8px;
    display: flex;
    gap: 10px;
    border-radius: 5px;

    button{
        border: none;
        background-color: transparent;
    }

   button svg{
         color:  ${({theme})=> theme.colors["purple"]};
         transition: all 0.2s;
         
         &:hover{
            color:  ${({theme})=> theme.colors["purple-dark"]};
         }
    }
        span {
            padding-top: 2px;
            color: ${({ theme }) => theme.colors['base-title']};
        }
    
`