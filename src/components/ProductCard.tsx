import { productCard } from "../app/types";
function ProductCard({ image, title, price, category }: productCard) {
    return (
        <>
            <div className=" border py-2 relative ">
                <div className="w-full h-[60%] flex justify-center items-center m-auto">
                    <img src={image} alt="" className="w-[40%] m-auto" />
                </div>

                <div className="text-center  h-[30%] relative  p-2 ">
                    <h1 className="text-3xl font-bold">{price}$</h1>
                    <h1 className="text-center text-xl">{title}</h1>
                    <h1 className="w-[70%] m-auto">{category}</h1>
                </div>
                <div className="flex justify-center my-3">
                    <button className=" font-bold border px-3 py-2  w-40 m-auto inline-block text-center rounded-full bg-orange-400 text-dark">
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
