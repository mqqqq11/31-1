import { configureStore } from "@reduxjs/toolkit";

import productsReducer from './slice/ProductsSlice'

export const store = configureStore({
    reducer: {
        productsReducer
    }
})