import { forwardRef, type InputHTMLAttributes, type LegacyRef } from "react"
import { Container } from "./styles"

type Props = InputHTMLAttributes<HTMLInputElement> & {
    isSelected: boolean
}

export const RadioOptions = forwardRef(function RadioOptions({children,...rest}: Props , ref: LegacyRef<HTMLInputElement>){
    return(
        <>
            <Container>
                <input type="radio" ref={ref} {...rest}/>
                {children}
            </Container>
        </>
    )
})