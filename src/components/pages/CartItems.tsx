import { getAllCartItems } from "../../features/cartItems/cartSlice";
import { useAppSelector } from "../../app/hooks";
import CartItemCard from "../CartItemCard";
import { productCard } from "../../app/types";

function CartItems() {
    const cartItems = useAppSelector(getAllCartItems);

    return (
        <>
            <div className="flex  justify-center flex-col items-center  bg-[#f6f6f6] ">
                {cartItems?.map((el:productCard) => {
                    return <CartItemCard {...el} />;
                })}
            </div>
            <hr />
            <div className=" p-7">
                <h1>Checkout</h1>
            </div>
        </>
    );
}

export default CartItems;
