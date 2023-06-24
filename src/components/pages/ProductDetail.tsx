import { useParams } from "react-router-dom";
import {
    loadAllProducts,
    selectRelatedProducts,
} from "../../features/Products/loadProductSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useEffect } from "react";
import { addToCart } from "../../features/cartItems/cartSlice";
import { productCard } from "../../app/types";
function ProductDetail() {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const getAllProducts = useAppSelector(
        (state) => state.loadProducts.originalItems
    );
    console.log(getAllProducts);
    useEffect(() => {
        dispatch(loadAllProducts());
    }, []);
    const detailProduct = getAllProducts.find((el) => el.id === Number(id));
    const addtoCartHandler = () => {
        dispatch(addToCart(detailProduct as productCard));
    };
    return (
        <>
            <div className="flex lg:flex-row flex-col justify-between items-center h-[70vh] my-8   ">
                <div className=" w-[40%] lg:w-[30%] m-auto">
                    <img src={detailProduct?.image} alt="" className="" />
                </div>
                <div className="md:w-[50%] w-[80%] tracking-wider m-auto">
                    <h1 className="my-5 text-3xl md:text-left w-full md:w-[80%] text-center ">
                        {detailProduct?.title.slice(0, 50)}
                    </h1>
                    <h1 className="text-xl my-6 text-slate-500 text-justify  ">
                        {detailProduct?.description}
                    </h1>
                    <h1 className="text-3xl my-2 text-orange-500">
                        {detailProduct?.price} $
                    </h1>
                    <button
                        className=" bg-orange-500 px-5 text-white py-3 rounded-md my-5 font-bold lg:w-auto w-full hover:scale-110 hover:transistion-all duration-150 "
                        onClick={addtoCartHandler}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
