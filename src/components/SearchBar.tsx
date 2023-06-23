import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { searchCartItem } from "../features/Products/loadProductSlice";

function SearchBar() {
    const dispatch = useAppDispatch();
    const getOrgItems = useAppSelector(
        (state) => state.loadProducts.originalItems
    );

    const navigate = useNavigate();
    const onChangeHandler = (e: any) => {
        navigate("/products");
        console.log(e.target.value);
        dispatch(
            searchCartItem({ searchVal: e.target.value, orgItems: getOrgItems })
        );
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
