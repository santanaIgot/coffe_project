import styled from "styled-components";


export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`


export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  transition: all 0.2s;
background-color: ${({theme}) => theme.colors["base-input"]};

  input{
    width: 100%;
    height: 24px;
    border: none;
    padding: 12px;
    outline: none;
    background-color: transparent;
    border-radius: 3px;
    border: 1px solid ${({theme}) => theme.colors["base-button"]}
  }
  

`

