import styled from "styled-components";
import { mixins } from "../../styles/mixins";


export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap:8px;
`


export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.colors["base-input"]};

  input{
    width: 100%;
    color: ${({theme}) => theme.colors["base-text"]};
    border: none;
    padding: 12px;
    outline: none;
    background-color: transparent;


    &[data-state='focused'] {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    &[data-state='blurred'] {
      border-color: ${({ theme }) => theme.colors['base-button']};
    }

 

    &::placeholder{
      color: ${({theme})=> theme.colors["base-label"]};
    }
  }
  

`

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS}
  font-weight: 400;
  color: red;
`
