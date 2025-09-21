import styled from "styled-components";
import { mixins } from "../../styles/mixins";


export const Container = styled.div`
    display: flex;
    max-width: 1160px;
    padding: 40px 20px;
    margin: 0 auto;
    gap: 32px;
    h1{
        ${mixins.fonts.titleS}
    }

`

export const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
   
    p{
        ${mixins.fonts.textL}
    }

    span{
        ${mixins.fonts.textS}
    }

    
`
    

export const HeadlineCart = styled.div`

    > div{
        display: flex;
        gap: 5px;
    }

    svg{
        color: ${({theme})=> theme.colors.yellow};
    }
`


export const Head = styled.div`
    

`


export const FormCart = styled.div`
    display: grid;
    grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
    grid-template-columns:200px 1fr 60px;
    grid-gap: 16px 12px;
`

export const FormsContainer = styled.div`
    padding: 40px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.colors["base-card"]};
    width: 100%;
    min-width: 640px;
    display: flex;
    flex-direction: column;
    gap: 32px;

`

export const CartAdress = styled(FormsContainer)``

export const PaymentCart = styled(FormsContainer)``

export const HeadlinePayment = styled(HeadlineCart)`
    svg{
        color: ${({theme}) => theme.colors.purple};
    }
`


export const PaymentOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    div{
        display: flex;
        justify-content: space-between;
        gap: 12px;
    }
`


export const CartTotal = styled.div`
    background-color: ${({theme}) => theme.colors["base-card"]};
    padding: 40px;
    border-radius: 6px 36px;
    width: 100%;
    min-width: 448px;


  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    margin: 24px 0;
  }
`


export const CartTotalInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

         span:first-child {
          ${mixins.fonts.textS};
         }

        span:last-child {
          ${mixins.fonts.textM};
        }
    }
    
    div:last-child {
        span {
            ${mixins.fonts.textL};
            font-weight: bold;
        }
    }
    
`


export const CheckoutButton = styled.button`
    margin-top: 24px;
    width: 100%;
    padding: 12px;
    text-transform: uppercase;

    ${mixins.fonts.buttonG};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.yellow};

    transition: all 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    border-radius: 6px;

`


export const Coffee = styled.div`
    display: flex;
    justify-content: space-between;

    > div{
        > img{
            width: 64px;
            height: 64px;
        }

        display: flex;
        align-items: stretch;
        gap: 20px;


        > div{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        aside{
            font-weight: bold;
        }
    }
`


export const CoffeInfo = styled.div`
    display: flex;
    gap: 8px;

    > button{
        padding: 6px 8px;
        background-color: ${({theme})=> theme.colors["base-button"]};
        border-radius: 6px;
        display: flex;
        align-items: center;
        gap: 8px;

        transition: all 0.2s;

        &:hover{
            background-color: ${({ theme }) => theme.colors['base-hover']};;
        }

        > svg {
            color: ${({ theme }) => theme.colors.purple};
        }

        > span{
            ${mixins.fonts.buttonM}
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors["base-text"]};
        }
    }
`