import { forwardRef, useState, type FocusEvent, type HTMLAttributes, type InputHTMLAttributes, type LegacyRef } from "react";
import { Box, Container, ErrorMessage } from "./styles";
import type { FieldError } from "react-hook-form";


type Props = InputHTMLAttributes<HTMLInputElement> & {
    optional?:boolean
    containerProps?: HTMLAttributes<HTMLDivElement> 
    error?: FieldError
}

export const Form = forwardRef(function Form({ optional, containerProps ,error ,onFocus ,onBlur , ...rest }:Props, ref: LegacyRef<HTMLInputElement>){

   const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }
    return(

        <Box {...containerProps}>
            <Container data-sate={isFocused ? 'focused' : 'blurred'}>
                <input 
                type="text" 
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={ref}
                {...rest}
                />
                {optional ? <span>Opcional</span> : null}
            </Container>

            {error?.message ? (
                <ErrorMessage role="alert">
                    {error.message}
                </ErrorMessage>
            ): null}
        </Box>
    )
}) 

