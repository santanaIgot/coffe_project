import styled from "styled-components";
import { mixins } from "../../styles/mixins";


export const CoffeContainer = styled.div`
    background-color: ${({theme}) => theme.colors["base-card"]};
    width: 256px;
    height: 310px;
    border-radius: 10px;
    padding:0 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`


export const CoffeImage = styled.img`
    max-width: 120px;
    max-height: 120px;
    margin-top: -40px;
    align-self: center;
`


export const Tags = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
   
    gap: 4px;

    span{
        padding: 4px 8px;
        border-radius: 100px;
        background-color: ${({ theme }) => theme.colors['yellow-light']};
        color: ${({ theme }) => theme.colors['yellow-dark']};
        text-transform: uppercase;
        ${mixins.fonts.tag}
    }
`

export const Title = styled.h3`
      margin-top: 16px;

      color: ${({ theme }) => theme.colors['base-subtitle']};
      ${mixins.fonts.titleS}
`

export const Description = styled.span`
     margin-top: 8px;
     width: 100%;

     color: ${({ theme }) => theme.colors['base-label']};
     ${mixins.fonts.textS} 
`   


export const Price = styled.div`
    display: flex;
    align-items: baseline;
    gap: 2px;

    span:first-child {
        ${mixins.fonts.textS};
        color: ${({ theme }) => theme.colors['base-text']};
    }

    span:last-child {
        ${mixins.fonts.titleM};
        color: ${({ theme }) => theme.colors['base-text']};
    }

`

export const Control = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 35px;
  align-items: center;
`


export const BoxOrder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    > button{
        background-color: ${({theme})=> theme.colors["purple-dark"]};
        padding: 8px;
        display: flex;
        transition: background-color 0.2s;
        border-radius: 6px;
        padding: 8px;
        display: flex;
    }


`