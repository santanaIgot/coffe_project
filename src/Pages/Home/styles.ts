import {styled} from  "styled-components"
import { mixins } from "../../styles/mixins"



export const HeroSection = styled.section`
    position: relative;

    img#hero-bg{
        position: absolute;
        top: 100px;
        left: 0;
        max-height:350px;
        width: 135vw;
        object-fit: contain;
    }
`

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    > h1{
        ${mixins.fonts.titleXL}
        color: ${({theme}) => theme.colors["base-title"] };
    }

    > span{
        ${mixins.fonts.titleL}
        color: ${({theme}) => theme.colors["base-subtitle"]};
    }

`

export const HeroContent = styled.div`
    max-width: 1160px;
    padding: 92px 20px;
    margin: 0 auto;
    display: flex;
    gap: 56px;

    > div{
        display: flex;
        flex-direction: column;
        gap: 66px;
    }
    
`


export const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 12px;

    > div{
        display:flex;
        align-items: center;
        gap: 12px;
    }

    svg{
        padding: 1px;
        border-radius: 999px;
    }
`


export const CoffeList = styled.div`
  display: flex;
  
`

