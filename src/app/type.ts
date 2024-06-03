export interface CartItem {
    id: number;
    title: string;
    price: number;
    img: string;
    amount: number;
}

export interface CartState {
    cartItems: CartItem[];
    amount: number;
    total: number;
}