import { getAllCartItems } from "../../features/cartItems/cartSlice";
import { useAppSelector } from "../../app/hooks";
import CartItemCard from "../CartItemCard";
import { productCard } from "../../app/types";

function CartItems() {
    const cartItems = useAppSelector(getAllCartItems);
    const total = cartItems.reduce((acc, value) => acc + value.price, 0);

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
                    <span className="mx-8 text-bold text-4xl">{total.toFixed(3)} $</span>{" "}
                </h1>
            </div>
        </>
    );
}

export default CartItems;
