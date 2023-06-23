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
        countItemInc(state, action) {
            const addItem = state.items.find((el) => el.id == action.payload);
            if (addItem) {
                addItem.count += 1;
            }
        },
        countItemDec(state, action) {
            const reduceItem = state.items.find(
                (el) => el.id == action.payload
            );
            if (reduceItem) {
                reduceItem.count -= 1;
            }
        },
    },
});

export const { addToCart, countItemInc, countItemDec } = cartSlice.actions;
export const getAllCartItems = (state: RootState) => state.addToCart.items;
export default cartSlice.reducer;
