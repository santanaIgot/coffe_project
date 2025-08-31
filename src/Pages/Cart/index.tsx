import { MapPin } from "phosphor-react";
import {
  BoxCart,
  CartAdress,
  Container,
  ContainerCart,
  FormCart,
  Head,
  HeadlineCart,
} from "./styles";
import { Form } from "../../components/Form";

export function Cart() {
  return (
    <Container>
      <ContainerCart>
        <h1>complete seu pedido</h1>
        <form action="">
          <CartAdress>
            <BoxCart>
              <HeadlineCart>
                <div>
                  <MapPin size={22} />
                  <Head>
                    <p>Endereço de entrega</p>
                    <span>
                      informe o endereço onde deseja receber seu pedido
                    </span>
                  </Head>
                </div>
              </HeadlineCart>
            </BoxCart>

            <FormCart>
              <Form />
              <Form />
              <Form />
              <Form />
              <Form />
              <Form />
              <Form />
              <Form />
            </FormCart>
          </CartAdress>
        </form>
      </ContainerCart>
    </Container>
  );
}
