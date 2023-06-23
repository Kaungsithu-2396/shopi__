import { Link } from "react-router-dom";
import box from "../../assets/box.json";
import Lottie from "lottie-react";
function NoCartItem() {
    return (
        <>
            <div className="md:w-[30%] w-[40%] m-auto">
                <Lottie animationData={box} />
            </div>
            <div className="text-center ">
                <h1 className=" text-xl md:text-3xl font-bold ">
                    <span className=" text-orange-500">No items</span> have been
                    added to cart
                </h1>
                <h1 className="text-2xl">
                    Explore{" "}
                    <Link to="/products" className="underline text-orange-500">
                        Here
                    </Link>{" "}
                </h1>
            </div>
        </>
    );
}

export default NoCartItem;
