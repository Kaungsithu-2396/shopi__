import Lottie from "lottie-react";
import MenFashion from "../assets/99745-sales-man.json";
import womenFashion from "../assets/64325-young-girl-style-walk-loop.json";
import electricity from "../assets/89481-plug-outlet.json";
import jewellery from "../assets/38462-necklace-animation.json";
import CategoryCard from "./CategoryCard";
function Categories() {
    return (
        <>
            <div className="flex m-5">
                {/* <section className="flex justify-around w-full border-black bg-lime-500  rounded-md  items-center m-5 ">
                    <div className="p-5">
                        <h1 className=" font-bold ">Men's Fashion</h1>
                        <h1 className="">Don't miss modernized Clothes</h1>
                        <button className="border-2 border-black rounded px-3 py-1 mt-3">
                            Explore
                        </button>
                    </div>
                    <div className="w-[50%] py-5">
                        <Lottie animationData={jewellery} />
                    </div>
                </section> */}
                <CategoryCard
                    title={"Men Fashion"}
                    subTitle={"Wear Authentic"}
                    color={"bg-yellow-500"}
                    animation={MenFashion}
                />{" "}
                <CategoryCard
                    title={"Women Fashion"}
                    subTitle={"Don't miss modernized fits "}
                    color={"bg-red-200"}
                    animation={womenFashion}
                />{" "}
                <CategoryCard
                    title={"Electriciy"}
                    subTitle={"World's safest item collection"}
                    color={"bg-amber-300"}
                    animation={electricity}
                />
                <CategoryCard
                    title={"Jewellery"}
                    subTitle={"Gorgeous Accessories "}
                    color={"bg-lime-300"}
                    animation={jewellery}
                />
            </div>
        </>
    );
}

export default Categories;
