import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartItems } from "../../cartItems";

interface CartItem {
    id: string;
    name: string;
    price: number;
    amount: number;
}

interface CartState {
    cartItems: CartItem[];
    amount: number;
    total: number;
}

const initialState: CartState = {
    cartItems: cartItems,
    amount: 0,
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
            state.total = 0;
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, action: PayloadAction<string>) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            if (cartItem) {
                cartItem.amount += 1;
            }
        },
        decrease: (state, action: PayloadAction<string>) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            if (cartItem && cartItem.amount > 1) {
                cartItem.amount -= 1;
            }
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    }
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
