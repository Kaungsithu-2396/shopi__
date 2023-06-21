import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productCard } from "../../app/types";
import { productCollection } from "../../app/types";
import { RootState } from "../../app/store";

const initialState: productCollection = {
    items: [],
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<productCard>) {
            const verifyDuplicatedItem = state.items.findIndex(
                (el) => el.id === action.payload.id
            );
            if (verifyDuplicatedItem >= 0) {
                state.items[verifyDuplicatedItem].count += 1;
            } else {
                const newProductToAdd = { ...action.payload, count: 1 };
                state.items.push(newProductToAdd);
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export const getAllCartItems = (state: RootState) => state.addToCart.items;
export default cartSlice.reducer;
