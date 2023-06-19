import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const productsAPI = createApi({
    reducerPath: "loadAllProducts",
    baseQuery: fetchBaseQuery({ baseUrl: `https://fakestoreapi.com/` }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),
        getAllCategories: builder.query({
            query: () => "products/categories",
        }),
    }),
});
export const { useGetAllProductsQuery, useGetAllCategoriesQuery } =
    productsAPI;
export default productsAPI;
