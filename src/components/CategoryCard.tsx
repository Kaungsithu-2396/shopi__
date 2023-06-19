import Lottie from "lottie-react";
interface categoryType {
    title: string;
    subTitle: string;
    color: string;
    animation: Object;
}
function CategoryCard({ title, subTitle, color, animation }: categoryType) {
    return (
        <>
            <section
                className={`flex justify-center w-full   ${color}     rounded-md  items-center m-3 `}
            >
                <div className="p-5">
                    <h1 className=" font-bold text-2xl ">{title}</h1>
                    <h1 className="text-sm">{subTitle} </h1>
                    <button className="border-2 border-black rounded px-3 py-1 mt-3">
                        Explore
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
