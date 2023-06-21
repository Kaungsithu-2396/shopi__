import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productCard } from "../../app/types";
import { productCollection } from "../../app/types";

const initialState: productCollection = {
    items: [],
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<productCard>) {
            state.items.push(action.payload);
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
