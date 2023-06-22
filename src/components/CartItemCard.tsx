import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";
import { cartPriceType, productCard } from "../app/types";
import { countItemDec, countItemInc } from "../features/cartItems/cartSlice";
import { useAppDispatch } from "../app/hooks";
import { useState } from "react";
function CartItemCard({ image, count, price, id }: productCard) {
    const dispatch = useAppDispatch();
    const [itemPrice] = useState(price);
    const addItemCountHandler = ({ id, price }: cartPriceType) => {
        dispatch(countItemInc({ id, price }));
    };
    const decCountHandler = (id: number) => {
        count - 1 > 0 && dispatch(countItemDec(id));
    };
    return (
        <>
            <div className="grid grid-cols-4 md:gap-8   justify-center items-center bg-white p-5 ">
                <div className="xl:w-[40%]  m-auto">
                    <img
                        src={image}
                        alt=""
                        className="xl:w-[50%] w-[60%] md:w-[40%] m-auto"
                    />
                </div>
                <div className="flex flex-col md:flex-row  items-center justify-center gap-2 md:gap-5">
                    <button
                        className="  md:text-4xl text-3xl "
                        onClick={() => addItemCountHandler({ id, price })}
                    >
                        <BsArrowUpSquareFill />
                    </button>
                    <h1>{count}</h1>
                    <button
                        className="  md:text-4xl text-3xl text-red-500  "
                        onClick={() => decCountHandler(id)}
                    >
                        <BsArrowDownSquareFill />
                    </button>
                </div>
                <div className="text-center">
                    <h1>{Number(itemPrice) * count} $</h1>
                </div>
                <div className="">
                    <button>Delete</button>
                </div>
            </div>
            <hr />
        </>
    );
}

export default CartItemCard;
