import { CheckSquareOffset, Minus, Plus, ShoppingCart } from "phosphor-react";
import { BoxOrder, CoffeContainer, CoffeImage, Control, Description, Price, Tags, Title } from "./styles";
import { useState } from "react";
import { useTheme } from "styled-components";
import { ButtonIncrementDecrement } from "../ButtonIncrementDecrement";


type Props = {
    coffee : {
        id: string
        title:string
        description:string
        tags: string[]
        price: number
        image: string
    }
}


export function Card({ coffee }: Props) {
    const [] = useState([])
    const theme = useTheme()
    return(
        <CoffeContainer>
            
            <CoffeImage src={coffee.image} alt=""/>

            <Tags>
                {coffee.tags.map((tag)=> (
                    <span key={tag}>{tag}</span>
                ))}
            </Tags>
            
            <Title>{coffee.title}</Title>
            <Description>{coffee.description}</Description>

            <Control>
                <Price>
                    <span>R$</span>
                    <span>{coffee.price}</span>
                </Price>

                <BoxOrder>
                    <ButtonIncrementDecrement/>

                    <button>
                      <ShoppingCart
                        size={22}
                        weight="fill"
                        color={theme.colors["base-card"]}
                        />
                    </button>
                </BoxOrder>
            </Control>
        </CoffeContainer>
    )
}