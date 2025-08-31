import { forwardRef, type HTMLAttributes, type InputHTMLAttributes, type LegacyRef } from "react";
import { Box, Container } from "./styles";


type Props = InputHTMLAttributes<HTMLInputElement> & {
    containerProps?: HTMLAttributes<HTMLDivElement> 
}

export const Form = forwardRef(function Form({containerProps, ...rest}:Props, ref: LegacyRef<HTMLInputElement>){
    return(

        <Box {...containerProps}>
            <Container>
                <input 
                type="text" 
                ref={ref}
                {...rest}
                />
            </Container>
        </Box>
    )
}) 

