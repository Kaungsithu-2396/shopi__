import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaShoppingBag } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getAllCartItems } from "../features/cartItems/cartSlice";
import { useAppSelector } from "../app/hooks";

function NavBar() {
    let location = useLocation(); //in order to hide Search Bar in Cart Page
    const cartItemsCount = useAppSelector(getAllCartItems);
    return (
        <>
            <nav className=" border-b   ">
                <div className="w-11/12 m-auto flex justify-between items-center py-8 ">
                    <Link
                        to="/"
                        className="md:text-3xl text-2xl flex items-center gap-1 md:gap-3 hover:scale-125 duration-500 hover:transition-all cursor-pointer "
                    >
                        <span className=" text-slate-800 tracking-wider font-thin">
                            <span className=" text-orange-500 font-bold ">
                                Shop
                            </span>
                            io
                        </span>{" "}
                        <FaShoppingBag />{" "}
                    </Link>
                    <div className="hidden md:block">
                        <SearchBar />
                    </div>
                    <h1 className="md:text-2xl text-xl font-bold cursor-pointer hover:scale-125 hover:transistion-all duration-300 hover:text-orange-500">
                        <Link to={"/products"}>Products</Link>
                    </h1>
                    <Link
                        to={`${
                            cartItemsCount.length === 0
                                ? "/NoCartItem"
                                : "/cartItems"
                        }`}
                        className="font-bold relative cursor-pointer hover:scale-125 duration-300 hover:transistion-all "
                    >
                        <div className="text-4xl">
                            <RiShoppingCart2Line />
                        </div>
                        <div className="w-6 h-6 bg-red-500 text-white flex justify-center items-center text-sm rounded-full absolute top-[-10px] right-[-8px]">
                            {cartItemsCount.length}
                        </div>
                    </Link>
                </div>
            </nav>

            <div className="w-5/6 m-auto my-4 block md:hidden">
                {location.pathname !== "/cartItems" && <SearchBar />}
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;
