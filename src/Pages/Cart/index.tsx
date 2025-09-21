/* eslint-disable @typescript-eslint/no-unused-vars */
import { CurrencyDollar, MapPin } from "phosphor-react";
import { useForm } from 'react-hook-form'
import {
  CartAdress,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  CoffeInfo,
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
import  z from "zod";
import { useCart } from "../../hooks/useCart";
import coffes from "../../../data.json"
import { Fragment } from "react/jsx-runtime";
import { ButtonIncrementDecrement } from "../../components/ButtonIncrementDecrement";

type FormInputs = {
   cep: number;
   street: string;
   number: string;
   fullAdress:string;
   neighboorhood: string;
   city: string;
   state: string;
   paymentMethod: 'credit' | 'debit' | 'cash'
}


const newOrder = z.object({
  cep : z.number({error:'Informe o cep'}),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAdress: z.string(),
  neighborhood:z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1,'Informe a cidade'),
  state: z.string().min(1,'Informe UF'),
  paymentMethod: z.enum(['credit', 'debit', 'pix', 'cash'], {
    error: 'Informe o método de pagamento'
  })
})

export type OrderInfo = z.infer<typeof newOrder>

export function Cart() {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<FormInputs>({});

  const {cart} = useCart()

  const coffesInCart = cart.map((item)=>{
    const coffeInfo = coffes.coffees.find((coffe) => coffe.id === item.id)

    if(!coffeInfo) throw new Error("Invalid coffe")

    return {
      ...coffeInfo,
      quantity: item.quantity
    }
  })

    function handleItemIncrement(itemId: string) {
    handleItemIncrement(itemId)
  }

  function handleItemDecrement(itemId: string) {
    handleItemDecrement(itemId)
  }

  function handleItemRemove(itemId: string) {
    handleItemRemove(itemId)
  }

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

      <ContainerCart>
        <h2>Cafés selecionados</h2>
        <CartTotal>
        {coffesInCart.map((coffe)=> (
          <Fragment key={coffe.id}>
            <Coffee>
              <div>
                <img src={coffe.image} alt="" />
                <div>
                  <span>{coffe.title}</span>
                </div>


              <CoffeInfo>
                  <ButtonIncrementDecrement
                  quantity={coffe.quantity}
                    handleDecrementQuantity={()=> handleItemDecrement(coffe.id)}
                    handleIncrementQuantity={() => handleItemIncrement(coffe.id)}
                  />
              </CoffeInfo>
              </div>

            </Coffee>
          </Fragment>
        ))}

          <CartTotalInfo>
            <div>
              <span>Entrega</span>

            </div>
            <div>
              <span>Total</span>
            </div>
          </CartTotalInfo>

          <CheckoutButton type="submit" form="order">
              Confirmar pedido 
          </CheckoutButton>
        </CartTotal>
      </ContainerCart>
    </Container>
  );
}
