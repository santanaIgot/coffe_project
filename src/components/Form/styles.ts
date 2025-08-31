import styled from "styled-components";


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
 

    &::placeholder{
      color: ${({theme})=> theme.colors["base-label"]};
    }
  }
  

`

