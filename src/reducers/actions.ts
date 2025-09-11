import type { OrderInfo } from "../Pages/Cart";
import type { Item } from "./reducer";
import type { NavigateFunction } from "react-router-dom";

export enum ActionsTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY",
  DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
  CHECKOUT_CART = "CHECKOUT_CART",
}

export type Actions = 
|{
  type: ActionsTypes.ADD_ITEM;
  payload: {
    item: Item;
  };
}
|{
    type: 
    | ActionsTypes.DECREMENT_ITEM_QUANTITY 
    | ActionsTypes.INCREMENT_ITEM_QUANTITY 
    | ActionsTypes.REMOVE_ITEM;
    payload: {
        itemId : Item['id']
    }
}
|{
    type:ActionsTypes.CHECKOUT_CART,
    payload: {
    order: OrderInfo
    callback: NavigateFunction
  }
}


export function addItemAction(item: Item){
  return{
    type: ActionsTypes.ADD_ITEM,
    payload:{
      item,
    },
  } satisfies Actions
}

export function removeItemAction(itemId: Item['id']){
  return{
    type: ActionsTypes.REMOVE_ITEM,
    payload:{
      itemId,
    },
  } satisfies Actions
}


export function incrementItemQuantityAcition(itemId: Item['id']){
  return{
    type: ActionsTypes.INCREMENT_ITEM_QUANTITY,
    payload:{
      itemId,
    },
  } satisfies Actions
}

export function decrementItemQuantityAction(itemId: Item['id']) {
  return{
    type: ActionsTypes.DECREMENT_ITEM_QUANTITY,
    payload:{
      itemId,
    },
  }satisfies Actions
}


export function checkOutCartAction(order: OrderInfo, callback: NavigateFunction) {
    return{
      type: ActionsTypes.CHECKOUT_CART,
      payload:{
        order,
        callback,
      },
    }satisfies Actions
}