import { CoffeContainer } from "./styles";


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
            
                <img src={coffee.image} alt=""/>
            

        </CoffeContainer>
    )
}