import { productCard } from "../app/types";
import { addToCart } from "../features/cartItems/cartSlice";
import { useAppDispatch } from "../app/hooks";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function ProductCard(el: productCard) {
    const dispatch = useAppDispatch();

    const handler = () => {
        const addCartItem = {
            ...el,
            // total: el.price,
        };
        toast.success("🛒 Add to cart Success!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        dispatch(addToCart(addCartItem));
    };
    return (
        <>
            <div className=" border py-2 relative mt-3 ">
                <div className=" md:h-[40%]  xl:h-[50%] flex justify-center items-center m-auto">
                    <img
                        src={el.image}
                        alt=""
                        className="xl:w-[40%] w-[30%] md:w-[30%] lg:w-[20%] m-auto p-5 lg:p-4 "
                    />
                </div>
                <hr />
                <div className="text-center  h-[30%] relative  p-2 xl:mt-0 lg:mt-3  ">
                    <h1 className="xl:text-3xl text-2xl font-bold">
                        {el.price} $
                    </h1>
                    <h1 className="text-center text-xl  text-black/50">
                        {el.title.slice(0, 20)}
                    </h1>
                    <Link to={`/detail/${el.id}`}>
                        <h1 className="w-[70%]  m-auto hover:underline transistion-all duration-300">
                            View More
                        </h1>
                    </Link>
                </div>
                <div className="flex justify-center mt-4  md:my-4 lg:my-2 xl:my-4">
                    <button
                        className=" font-bold border text-xs md:text-sm  p-3 lg:px-3 lg:py-2   w-40 m-auto inline-block text-center rounded-full bg-orange-400 text-dark mb-5 hover:scale-105 hover:transistion-all duration-300 "
                        onClick={handler}
                    >
                        Add to Cart
                    </button>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}

export default ProductCard;
