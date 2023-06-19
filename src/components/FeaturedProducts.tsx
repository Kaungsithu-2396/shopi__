import { productCard } from "../app/types";
import { useGetFeaturedProductsQuery } from "../features/api/apiSlice";
import ProductCard from "./ProductCard";
function FeaturedProducts() {
    const { data } = useGetFeaturedProductsQuery("");

    return (
        <>
            <h1 className="text-center text-3xl font-bold">Feature Products</h1>
            <section className="m-5 grid grid-cols-4">
                {/* <div className=" border ">
                    <div>
                        <img
                            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                            alt=""
                            className="w-[28%] m-auto"
                        />
                    </div>
                    <div className="text-center flex flex-col gap-3 justify-center  my-3 items-center">
                        <h1 className="text-center text-xl">Bags</h1>
                        <h1 className="w-[70%]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci, repellat.
                        </h1>
                        <h1 className="text-3xl font-bold">110$</h1>
                        <button className=" font-bold border px-3 py-2  rounded-full bg-orange-400 text-dark">
                            Add to Cart
                        </button>
                    </div>
                </div> */}
                {data &&
                    data?.map((el: productCard) => {
                        return <ProductCard key={el.id} {...el} />;
                    })}
            </section>
        </>
    );
}

export default FeaturedProducts;
