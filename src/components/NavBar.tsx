import SearchBar from "./SearchBar";
import { FaShoppingBag } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

function NavBar() {
    return (
        <nav className=" border-b   ">
            <div className="w-11/12 m-auto flex justify-between items-center py-8 ">
                <div className="md:text-3xl text-2xl flex items-center gap-1 md:gap-3 hover:scale-125 duration-500 hover:transition-all cursor-pointer ">
                    <span className=" text-slate-800 tracking-wider font-thin">
                        <span className=" text-orange-500 font-bold ">
                            Shop
                        </span>
                        io
                    </span>{" "}
                    <FaShoppingBag />{" "}
                </div>
                <div className="hidden md:block">
                    <SearchBar />
                </div>
                <h1 className="md:text-2xl text-xl font-bold cursor-pointer hover:scale-125 hover:transistion-all duration-300 hover:text-orange-500">
                    Products
                </h1>
                <div className="font-bold relative cursor-pointer hover:scale-125 duration-300 hover:transistion-all ">
                    <div className="text-4xl">
                        <RiShoppingCart2Line />
                    </div>
                    <div className="w-6 h-6 bg-red-500 text-white flex justify-center items-center text-sm rounded-full absolute top-[-10px] right-[-8px]">
                        10
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
