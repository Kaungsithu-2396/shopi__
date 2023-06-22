import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "../features/cartItems/cartSlice";
import featureProducts from "../features/Products/loadProductSlice";

export const store = configureStore({
    reducer: {
        addToCart: addToCartReducer,
        loadProducts: featureProducts,
        
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
