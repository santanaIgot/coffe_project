import type { OrderInfo } from "../Pages/Cart";
import  { ActionsTypes, type Actions } from "./actions";
import {produce} from "immer" 

export interface Item {
    id: string;
    quantity: number;
}

export interface Order extends OrderInfo{
    id: number
    items: Item[]
}

export interface CartState{
    cart: Item[]
    orders: Order[]
}


export function cartReducer(state: CartState, action: Actions) {
    switch (action.type) {
        case ActionsTypes.ADD_ITEM:
            return produce(state, (draft) => {
                const itemAlreadyAdded = draft.cart.find((item) => item.id === action.payload.item.id)
                if(itemAlreadyAdded){
                    itemAlreadyAdded.quantity += action.payload.item.quantity
                }else{
                    draft.cart.push(action.payload.item)
                }
            })

            
            break;
    
        default:
            break;
    }
}