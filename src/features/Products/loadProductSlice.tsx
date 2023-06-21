import { createSlice } from "@reduxjs/toolkit";
import { showAPIStage } from "../../app/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
const initialState: showAPIStage = {
    items: [],
    isLoading: false,
    error: null,
};
export const loadFeatureProducts = createAsyncThunk(
    "cart/loadAllProducts",
    async () => {
        const response = await fetch(
            "https://fakestoreapi.com/products?limit=4"
        );
        const data = await response.json();
        return data;
    }
);
export const featureProducts = createSlice({
    name: "featureProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadFeatureProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loadFeatureProducts.fulfilled, (state, action) => {
            (state.isLoading = false), (state.items = action.payload);
            return state;
        });
        builder.addCase(loadFeatureProducts.rejected, (state) => {
            state.error = true;
            state.isLoading = false;
        });
    },
});
export const selectStatus = (state: RootState) => state.loadProducts.isLoading;
export const selectError = (state: RootState) => state.loadProducts.error;
export const selectFeaturedProducts = (state: RootState) =>
    state.loadProducts.items;
export default featureProducts.reducer;
