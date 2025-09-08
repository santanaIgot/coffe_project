/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode } from "react";
import type { Item, Order } from "../reducers/reducer"

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

  return(
    <CartContext.Provider 
    value={{
        addItem, 
        cart, 
        decrementItemQuantity, 
        incrementItemQuantity
        }}>
        {children}
    </CartContext.Provider>
  )
}