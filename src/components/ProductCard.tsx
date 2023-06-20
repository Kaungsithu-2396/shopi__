import { productCard } from "../app/types";
function ProductCard({ image, title, price, id }: productCard) {
    return (
        <>
            <div className=" border py-2 relative ">
                <div className=" lg:h-[40%]  xl:h-[50%] flex justify-center items-center m-auto">
                    <img
                        src={image}
                        alt=""
                        className="xl:w-[30%] w-[30%] md:w-[30%] lg:w-[20%] m-auto p-5 lg:p-4 "
                    />
                </div>
                <hr />
                <div className="text-center  h-[30%] relative  p-2 xl:mt-0 lg:mt-3  ">
                    <h1 className="xl:text-3xl text-2xl font-bold">
                        {price} $
                    </h1>
                    <h1 className="text-center text-xl text-black/50">
                        {title.slice(0, 20)}
                    </h1>
                    <a href={`detail/${id}`} className="">
                        <h1 className="w-[70%] m-auto hover:underline transistion-all duration-300">
                            View More
                        </h1>
                    </a>
                </div>
                <div className="flex justify-center my-2 xl:my-4">
                    <button className=" font-bold border text-xs md:text-sm  p-3 lg:px-3 lg:py-2   w-40 m-auto inline-block text-center rounded-full bg-orange-400 text-dark mb-5 hover:scale-105 hover:transistion-all duration-300 ">
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
