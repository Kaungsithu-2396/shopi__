import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";
import { productCard } from "../app/types";
import { countItemDec, countItemInc } from "../features/cartItems/cartSlice";
import { useAppDispatch } from "../app/hooks";

function CartItemCard({ image, count, price, id }: productCard) {
    const dispatch = useAppDispatch();
    const addItemCountHandler = (id: number) => {
        dispatch(countItemInc(id));
    };
    const decCountHandler = (id: number) => {
        count - 1 > 0 && dispatch(countItemDec(id));
    };
    return (
        <>
            <div className="grid grid-cols-4 md:gap-8 gap-5   justify-center items-center bg-white p-5 ">
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
                        onClick={() => addItemCountHandler(id)}
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
                    <h1 className="text-sm md:text-base">
                        {(price * count).toFixed(2)} $
                    </h1>
                </div>
                <div className="text-xl">
                    <button className=" text-lg md:text-base">Delete</button>
                </div>
            </div>
            <hr />
        </>
    );
}

export default CartItemCard;
