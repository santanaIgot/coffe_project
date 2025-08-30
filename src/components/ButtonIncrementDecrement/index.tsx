import { Minus, Plus } from "phosphor-react";
import { Container } from "./style";

export function ButtonIncrementDecrement() {
  
  return (
    <>
      <Container>
        <button>
          <Plus />
        </button>
        <span>1</span>
        <button>
          <Minus />
        </button>
      </Container>
    </>
  );
}
