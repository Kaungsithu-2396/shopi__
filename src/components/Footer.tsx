import { BiCopyright } from "react-icons/bi";
function Footer() {
    return (
        <>
            <footer className=" bg-[#f6f6f6] w-full   bottom-0 m-auto align-text-bottom  font-bold">
                <h1 className="flex justify-center items-center py-5 ">
                    {" "}
                    <span className="text-3xl">
                        <BiCopyright />
                    </span>{" "}
                    (2023) All rights Reserved to Kaung Si Thu
                </h1>
            </footer>
        </>
    );
}

export default Footer;
