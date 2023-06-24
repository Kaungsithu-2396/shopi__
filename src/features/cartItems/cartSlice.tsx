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
            if (!(verifyDuplicatedItem >= 0)) {
                const newProductToAdd = { ...action.payload, count: 1 };
                state.items.push(newProductToAdd);
            } else {
                state.items[verifyDuplicatedItem].count += 1;
            }
        },
        delCartItem: (state, action) => {
            const delItem = state.items.filter(
                (el) => el.id !== action.payload.id
            );
            state.items = delItem;
        },
        countItemInc(state, action) {
            const addItem = state.items.find((el) => el.id == action.payload);
            if (addItem && addItem?.count < addItem?.rating?.count) {
                addItem.count += 1;
            } else {
                alert("out of stock");
            }
        },
        countItemDec(state, action) {
            const reduceItem = state.items.find(
                (el) => el.id == action.payload
            );
            if (reduceItem) {
                reduceItem.count -= 1;
            }
        }
      
    },
});

export const { addToCart, countItemInc, countItemDec, delCartItem} =
    cartSlice.actions;
export const getAllCartItems = (state: RootState) => state.addToCart.items;
export default cartSlice.reducer;
