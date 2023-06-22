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
    "cart/loadFeatureProducts",
    async () => {
        const response = await fetch(
            "https://fakestoreapi.com/products?limit=4"
        );
        const data = await response.json();
        return data;
    }
);
export const loadAllProducts = createAsyncThunk(
    "cart/loadAllProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    }
);
export const loadCategorizedProducts = createAsyncThunk(
    "cart/loadCategorizedProducts",
    async (category: string | undefined) => {
        const response = await fetch(
            `https://fakestoreapi.com/products/category/${category}`
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
        builder.addCase(loadAllProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loadAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
        });
        builder.addCase(loadCategorizedProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loadCategorizedProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
        });
        builder.addCase(loadCategorizedProducts.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        });
    },
});
export const selectStatus = (state: RootState) => state.loadProducts.isLoading;
export const selectError = (state: RootState) => state.loadProducts.error;
export const selectRelatedProducts = (state: RootState) =>
    state.loadProducts.items;
export default featureProducts.reducer;
