import { getAllCartItems } from "../../features/cartItems/cartSlice";
import { useAppSelector } from "../../app/hooks";
import CartItemCard from "../CartItemCard";
import { productCard } from "../../app/types";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks";

import { useEffect } from "react";

function CartItems() {
    const navigate = useNavigate();
    const cartItems = useAppSelector(getAllCartItems);
    const cartItemsPriceCollection = cartItems.map((el) => el.price * el.count);
    const totalAmount = cartItemsPriceCollection.reduce((acc, value) => {
        return acc + value;
    }, 0);
    const showToast = () => {
        alert("Checkout Success");
        navigate("/products");
    };
    useEffect(() => {
        if (cartItems.length == 0) {
            navigate("/");
        }
    }, [cartItems]);
    return (
        <>
            <div className="flex  justify-center flex-col items-center  bg-[#f6f6f6] ">
                {cartItems?.map((el: productCard) => {
                    return <CartItemCard {...el} key={el.id} />;
                })}
            </div>
            <hr />
            <div className=" p-7 flex flex-col gap-5 justify-start items-center">
                <h1 className="text-2xl">
                    Total :{" "}
                    <span className="mx-8 text-bold text-2xl md:text-4xl">
                        {totalAmount.toFixed(2)} $
                    </span>{" "}
                </h1>
                <div className="w-full">
                    <button
                        className=" bg-orange-500 px-7 w-full py-4 text-boldx rounded-md text-white"
                        onClick={showToast}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
}

export default CartItems;
