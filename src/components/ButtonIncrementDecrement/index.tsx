import { Minus, Plus } from "phosphor-react";
import { Container } from "./style";

type PropsButton = {
  quantity : number ;
  handleIncrementQuantity(): void;
  handleDecrementQuantity(): void
}

export function ButtonIncrementDecrement({handleDecrementQuantity, handleIncrementQuantity, quantity}: PropsButton) {
     
  return (
    <>
      <Container>
        <button onClick={handleIncrementQuantity}>
          <Plus />
        </button>
        <span>{quantity}</span>
        <button onClick={handleDecrementQuantity}>
          <Minus />
        </button>
      </Container>
    </>
  );
}
