/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, type ReactNode } from "react";
import { cartReducer, type Item, type Order } from "../reducers/reducer"
import { useNavigate } from "react-router-dom";
import { addItemAction, checkOutCartAction, decrementItemQuantityAction, incrementItemQuantityAcition, removeItemAction } from "../reducers/actions";
import type { OrderInfo } from "../Pages/Cart";

interface CartContextType {
    cart: Item[];
    orders: Order[];
    addItem:(item: Item) => void;
    removeItem:(itemId: Item['id']) => void;
    decrementItemQuantity:(itemId: Item['id']) => void;
    incrementItemQuantity:(itemId: Item['id']) => void;
    checkout: (order: OrderInfo) => void
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

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function checkout(order: OrderInfo){
    dispatch(checkOutCartAction(order, navigate))
  }

  function incrementItemQuantity(itemId: Item['id']){
    dispatch(incrementItemQuantityAcition(itemId))
  }

  function decrementItemQuantity(itemId: Item['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  return(
    <CartContext.Provider value={{
      addItem, 
      cart, 
      orders, 
      removeItem, 
      checkout, 
      incrementItemQuantity, 
      decrementItemQuantity  
    }}>
    {children}
    </CartContext.Provider>
  )
}