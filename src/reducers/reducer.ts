

export interface Item {
    id: string;
    quantity: number;
}

export interface Order{
    id: number;
    items: Item[]
}

export interface CarteState{
    cart: Item[];
    orders: Order[]
}


export function cartReducer(state: CarteState, action: Actions) {
    
}