import { forwardRef, type InputHTMLAttributes, type LegacyRef } from "react"
import { Container } from "./styles"

type Props = InputHTMLAttributes<HTMLInputElement> & {
    isSelected: boolean
}

export const RadioOptions = forwardRef(function RadioOptions({children, isSelected,...rest}: Props , ref: LegacyRef<HTMLInputElement>){
    return(
        <>
            <Container data-state={isSelected} >
                <input type="radio" ref={ref} {...rest}/>
                {children}
            </Container>
        </>
    )
})