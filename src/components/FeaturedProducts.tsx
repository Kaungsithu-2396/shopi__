import { useEffect } from "react";
import { productCard } from "../app/types";
import {
    loadFeatureProducts,
    selectError,
    selectStatus,
    selectRelatedProducts,
} from "../features/Products/loadProductSlice";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "../app/hooks";

function FeaturedProducts() {
    const dispatch = useAppDispatch();
    const featuredProducts = useAppSelector(selectRelatedProducts);
    const getError = useAppSelector(selectError);
    const getStatus = useAppSelector(selectStatus);
    useEffect(() => {
        dispatch(loadFeatureProducts());
    }, []);

    return (
        <>
            <h1 className="text-center text-3xl font-bold mt-10 mb-5   ">
                <span className="text-orange-500 tracking-widest">Feature</span>{" "}
                Products
            </h1>
            <section className=" grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 w-11/12 m-auto xl:py-5">
                {getStatus && <h1>loading...</h1>}
                {getError && <h1>Error...</h1>}
                {featuredProducts &&
                    featuredProducts?.map((el: productCard) => {
                        return <ProductCard key={el.id} {...el} id={el.id} />;
                    })}
            </section>
        </>
    );
}

export default FeaturedProducts;
