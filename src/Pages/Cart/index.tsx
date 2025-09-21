/* eslint-disable @typescript-eslint/no-unused-vars */
import { CurrencyDollar, MapPin, Trash } from "phosphor-react";
import { useForm, type SubmitHandler } from "react-hook-form";
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
import z from "zod";
import { useCart } from "../../hooks/useCart";
import coffes from "../../../data.json";
import { Fragment } from "react/jsx-runtime";
import { ButtonIncrementDecrement } from "../../components/ButtonIncrementDecrement";
import { zodResolver } from '@hookform/resolvers/zod'

type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAdress: string;
  neighboorhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash" | "pix";
};

const newOrder = z.object({
  cep: z.number({ error: "Informe o cep" }),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAdress: z.string(),
  neighboorhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().min(1, "Informe UF"),
  paymentMethod: z.enum(["credit", "debit", "pix", "cash"], {
    error: "Informe o método de pagamento",
  }),
});

export type OrderInfo = z.infer<typeof newOrder>;

export function Cart() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({resolver: zodResolver(newOrder)});

  const { cart,  checkout } = useCart();

  const coffesInCart = cart.map((item) => {
    const coffeInfo = coffes.coffees.find((coffe) => coffe.id === item.id);

    if (!coffeInfo) throw new Error("Invalid coffe");

    return {
      ...coffeInfo,
      quantity: item.quantity,
    };
  });

  function handleItemIncrement(itemId: string) {
    handleItemIncrement(itemId);
  }

  function handleItemDecrement(itemId: string) {
    handleItemDecrement(itemId);
  }

  function handleItemRemove(itemId: string) {
    handleItemRemove(itemId);
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkout(data)
  }

  const totalItemsPrice = coffesInCart.reduce((previousValue, currentItem)=>{
    return (previousValue += currentItem.price * currentItem.quantity)
  },0 )

  const shippingPrice = 3.5

  const selectedPaymentMethod = watch('paymentMethod')

  return (
    <Container>
      <ContainerCart>
        <h1>complete seu pedido</h1>
        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
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
                type="number"
                containerProps={{ style: { gridArea: "cep" } }}
                error={errors.cep}
                {...register('cep', {valueAsNumber: true})}
              />
              <Form 
                placeholder="Rua" 
                error = {errors.street}
                containerProps={{ style: { gridArea: 'street' } }}
                {...register('street')}
              />
              <Form 
                placeholder="Número" 
                error={errors.number}
                {...register('number')}
                />
              <Form 
                placeholder="Complemento" 
                error={errors.fullAdress}
        
                {...register('fullAdress')}
              />
              <Form 
                placeholder="Bairro" 
                error={errors.neighboorhood}
               
                {...register('neighboorhood')}
              />
              <Form 
                placeholder="Cidade" 
                error={errors.city}
                {...register('city')}
              />
              <Form 
                placeholder="UF" 
                error={errors.state}
                maxLength={2}
                {...register('state')}
              />
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
              <RadioOptions isSelected = {selectedPaymentMethod === 'credit'} 
              {...register('paymentMethod')}
              value="credit"
              >
                <span>Cartão de crédito</span>
              </RadioOptions>
              <RadioOptions isSelected = {selectedPaymentMethod === 'debit'}
              {...register('paymentMethod')}
              value="debit"
              >
                <span>Cartão de débito</span>
              </RadioOptions>
              <RadioOptions isSelected = {selectedPaymentMethod === 'cash'}
              {...register('paymentMethod')}
              value="cash"
              >
                <span>Dinheiro</span>
              </RadioOptions>
              <RadioOptions isSelected = {selectedPaymentMethod === 'pix'}>
                <span>Pix</span>
              </RadioOptions>
            </div>
          </PaymentOptions>
        </PaymentCart>
      </ContainerCart>

      <ContainerCart>
        <h2>Cafés selecionados</h2>
        <CartTotal>
          {coffesInCart.map((coffe) => (
            <Fragment key={coffe.id}>
              <Coffee>
                <div>
                  <img src={coffe.image} alt="" />

                  <div>
                    <span>{coffe.title}</span>

                    <CoffeInfo>
                      <ButtonIncrementDecrement
                        quantity={coffe.quantity}
                        handleDecrementQuantity={() =>
                          handleItemDecrement(coffe.id)
                        }
                        handleIncrementQuantity={() =>
                          handleItemIncrement(coffe.id)
                        }
                      />

                      <button onClick={() => handleItemRemove(coffe.id)}>
                        <Trash />
                        <span>remover</span>
                      </button>
                    </CoffeInfo>
                  </div>
                </div>
                <aside>R${coffe.price?.toFixed(2)}</aside>
              </Coffee>
              <span/>
            </Fragment>
          ))}

          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
                <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice)}
              </span>
            </div>
            <div>
              <span>Entrega</span>
                 <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>
            <div>
              <span>Total</span>
                   {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice + shippingPrice)}
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
