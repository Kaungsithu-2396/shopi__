import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";
import { productCard } from "../app/types";
function CartItemCard({ image, count, price, id }: productCard) {
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
                    <button className="  md:text-4xl text-3xl ">
                        <BsArrowUpSquareFill />
                    </button>
                    <h1>{count}</h1>
                    <button className="  md:text-4xl text-3xl text-red-500  ">
                        <BsArrowDownSquareFill />
                    </button>
                </div>
                <div className="text-center">
                    <h1>{price} $</h1>
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
