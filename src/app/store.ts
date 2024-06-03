import { configureStore,  } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import modalReducer from "./features/modal/ModalSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
})

// store変数の型を取得する
export type AppStore = typeof store
// store自身から `RootState` 型と `AppDispatch` 型を推測する
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']