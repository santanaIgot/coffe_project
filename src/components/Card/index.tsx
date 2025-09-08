/* eslint-disable @typescript-eslint/no-unused-vars */
import { Check, ShoppingCart } from "phosphor-react";
import { BoxOrder, CoffeContainer, CoffeImage, Control, Description, Price, Tags, Title } from "./styles";
import { useTheme } from "styled-components";
import { ButtonIncrementDecrement } from "../ButtonIncrementDecrement";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";



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
    const theme = useTheme()
    const [isItemAdded , setIsItemAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const {addItem} = useCart()

      function handleIncrementQuantity() {
        setQuantity((state) => state + 1)
      }

      function handleDecrementQuantity() {
        if(quantity > 1){
          setQuantity((state) => state - 1)
        }
      }

      function handleAddItem() {
        addItem({id: coffee.id, quantity})
        setIsItemAdded(true)
        setQuantity(1)
      }

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
                    <ButtonIncrementDecrement
                    handleDecrementQuantity={handleDecrementQuantity}
                    handleIncrementQuantity={handleIncrementQuantity}
                    quantity={quantity}
                    />
                    <button disabled={isItemAdded} onClick={handleAddItem}> 
                        {isItemAdded ? (
                            <Check/>
                        ):(
                            <ShoppingCart size={22} weight="fill" color={theme.colors["base-card"]}/>
                        )}
                    </button>
                </BoxOrder>
            </Control>
        </CoffeContainer>
    )
}