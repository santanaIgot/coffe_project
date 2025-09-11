/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, type ReactNode } from "react";
import { cartReducer, type Item, type Order } from "../reducers/reducer"
import { useNavigate } from "react-router-dom";
import { addItemAction } from "../reducers/actions";

interface CartContextType {
    cart: Item[];
    order: Order[];
    addItem:(item: Item) => void;
    removeItem:(itemId: Item['id']) => void;
    decrementItemQuantity:(itemId: Item['id']) => void;
    incrementItemQuantity:(itemId: Item['id']) => void;
}


export const CartContext = createContext({} as CartContextType) 


interface CartContextProviderProps{
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps){
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJson = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0'
      )

          if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }

      return cartState
    },
  )

  const navigate = useNavigate()

  const {cart, orders} = cartState

  function addItem(item: Item) {
      dispatch(addItemAction(item))
  }

  return(
    <CartContext.Provider value={{addItem}}>
    </CartContext.Provider>
  )
}