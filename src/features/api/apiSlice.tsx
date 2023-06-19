import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const productsAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: `https://fakestoreapi.com` }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        getFeaturedProducts: builder.query({
            query: () => "/products?limit=4",
            providesTags: ["products"],
        }),
    }),
});
export default productsAPI;
export const { useGetFeaturedProductsQuery } = productsAPI;
