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


`


export const CartTotalInfo = styled.div`

`


export const CheckoutButton = styled.button`


`