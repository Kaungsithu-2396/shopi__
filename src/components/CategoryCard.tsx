import Lottie from "lottie-react";
import { categoryType } from "../app/types";
import { Link } from "react-router-dom";
function CategoryCard({
    title,
    subTitle,
    color,
    animation,
    colWidth,
    pageTo,
}: categoryType) {
    return (
        <>
            <section
                className={`flex justify-center w-full ${colWidth}   ${color}     rounded-md  items-center `}
            >
                <div className="p-5">
                    <h1 className=" font-bold text-xl md:text-2xl ">{title}</h1>
                    <h1 className="text-sm">{subTitle} </h1>
                    <button className=" border border-black/40 rounded px-3 py-1 mt-3 hover:scale-110 transition-all duration-300  hover:bg-white hover:text-black ">
                        <Link to={`category/${pageTo}`}>Explore</Link>
                    </button>
                </div>
                <div className="w-[60%] py-5">
                    <Lottie animationData={animation} />
                </div>
            </section>
        </>
    );
}

export default CategoryCard;
