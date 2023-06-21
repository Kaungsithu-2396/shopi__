import { useNavigate } from "react-router-dom";
function SearchBar() {
    const navigate = useNavigate();
    const onChangeHandler = () => {
        navigate("/products");
    };
    return (
        <div>
            <input
                type="text"
                name=""
                className="   rounded-md px-4 w-full lg:w-[30rem] py-3 border text-xl border-black"
                id=""
                onChange={onChangeHandler}
                autoFocus
                placeholder="&#x1F50D;  Search Product"
            />
        </div>
    );
}

export default SearchBar;
