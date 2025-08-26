import { CoffeContainer, CoffeImage, Control, Description, Price, Tags, Title } from "./styles";


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
                    <span>{coffee.price}</span>
                </Price>
            </Control>
          
            

        </CoffeContainer>
    )
}