import { productCard } from "../app/types";
import { useGetFeaturedProductsQuery } from "../features/api/apiSlice";
import ProductCard from "./ProductCard";
function FeaturedProducts() {
    const { data, isLoading, isSuccess } = useGetFeaturedProductsQuery("");

    return (
        <>
            <h1 className="text-center text-3xl font-bold mt-10   ">
                <span className="text-orange-500 tracking-widest">Feature</span>{" "}
                Products
            </h1>
            <section className=" grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 w-11/12 m-auto xl:py-5">
                {isLoading && <h1>loading...</h1>}
                {isSuccess &&
                    data?.map((el: productCard) => {
                        return <ProductCard key={el.id} {...el} />;
                    })}
            </section>
        </>
    );
}

export default FeaturedProducts;
