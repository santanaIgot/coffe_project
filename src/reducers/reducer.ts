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
            
        case ActionsTypes.REMOVE_ITEM:
            return produce(state, (draft)=>{
                const itemToRemovedId = draft.cart.findIndex(
                    (item) => item.id === action.payload.itemId,
                )
                draft.cart.splice(itemToRemovedId, 1)
            }) 
        
        
        case ActionsTypes.INCREMENT_ITEM_QUANTITY:
            return produce(state, (draft)=>{
                const itemToIncrement = draft.cart.find(
                    (item) => item.id === action.payload.itemId
                )
                if(itemToIncrement?.id){
                    itemToIncrement.quantity += 1
                }
            })

        case ActionsTypes.DECREMENT_ITEM_QUANTITY:
            return produce(state, (draft)=>{
                const itemToDecrement = draft.cart.find(
                    (item) => item.id === action.payload.itemId
                )

                if(itemToDecrement?.id && itemToDecrement.quantity > 1){
                    itemToDecrement.quantity -= 1
                }
            })

        
        case ActionsTypes.CHECKOUT_CART:
            return produce(state, (draft) => {
                const newOrder = {
                    id: new Date().getTime(),
                    items: state.cart,
                    ...action.payload.order,
                }

                draft.orders.push(newOrder)
                draft.cart = []

                action.payload.callback(`/order/${newOrder.id}/success`)
            })
        default:
            return state
    }
}