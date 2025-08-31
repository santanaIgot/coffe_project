import { CurrencyDollar, MapPin } from "phosphor-react";
import {
  CartAdress,
  Container,
  ContainerCart,
  FormCart,
  Head,
  HeadlineCart,
  HeadlinePayment,
  PaymentCart,
  PaymentOptions,
} from "./styles";
import { Form } from "../../components/Form";
import { RadioOptions } from "../../components/Radio";

export function Cart() {
  return (
    <Container>
      <ContainerCart>
        <h1>complete seu pedido</h1>
        <form action="">
          <CartAdress>
            <HeadlineCart>
              <div>
                <MapPin size={22} />
                <Head>
                  <p>Endereço de entrega</p>
                  <span>informe o endereço onde deseja receber seu pedido</span>
                </Head>
              </div>
            </HeadlineCart>
            <FormCart>
              <Form
                placeholder="CEP"
                containerProps={{ style: { gridArea: "cep" } }}
              />
              <Form placeholder="Rua" />
              <Form placeholder="Número" />
              <Form placeholder="Complemento" />
              <Form placeholder="Bairro" />
              <Form placeholder="Cidade" />
              <Form placeholder="UF" />
            </FormCart>
          </CartAdress>
        </form>

        <PaymentCart>
          <CartAdress>
            <HeadlinePayment>
              <div>
                <CurrencyDollar size={22} />
                <Head>
                  <p>Pagamento</p>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </Head>
              </div>
            </HeadlinePayment>
          </CartAdress>

          <PaymentOptions>
            <div>
                <RadioOptions isSelected>
                    <span>Cartão de crédito</span>
                </RadioOptions>
                 <RadioOptions isSelected>
                    <span>Cartão de débito</span>
                </RadioOptions>
                 <RadioOptions isSelected>
                    <span>Dinheiro</span>
                </RadioOptions>
                 <RadioOptions isSelected>
                    <span>Pix</span>
                </RadioOptions>
            </div>

          </PaymentOptions>
        </PaymentCart>
      </ContainerCart>
    </Container>
  );
}
