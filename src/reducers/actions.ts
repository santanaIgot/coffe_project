import type { Item } from "./reducer";

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
        itemId : Item[ 'id']
    }
}
|{
    type:ActionsTypes.CHECKOUT_CART
}


