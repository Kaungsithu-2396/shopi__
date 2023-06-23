import { getAllCartItems } from "../../features/cartItems/cartSlice";
import { useAppSelector } from "../../app/hooks";
import CartItemCard from "../CartItemCard";
import { productCard } from "../../app/types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CartItems() {
    const navigate = useNavigate();
    const cartItems = useAppSelector(getAllCartItems);
    const cartItemsPriceCollection = cartItems.map((el) => el.price * el.count);
    const totalAmount = cartItemsPriceCollection.reduce((acc, value) => {
        return acc + value;
    }, 0);

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
            <div className=" p-7 flex justify-center items-center">
                <h1 className="text-2xl">
                    Checkout :{" "}
                    <span className="mx-8 text-bold text-2xl md:text-4xl">
                        {totalAmount.toFixed(2)} $
                    </span>{" "}
                </h1>
            </div>
        </>
    );
}

export default CartItems;
