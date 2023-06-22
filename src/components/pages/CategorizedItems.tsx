import { useParams } from "react-router-dom";
import { loadCategorizedProducts } from "../../features/Products/loadProductSlice";
import {
    selectRelatedProducts,
    selectError,
    selectStatus,
} from "../../features/Products/loadProductSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import ProductCard from "../ProductCard";
import Loading from "../Loading";
function CategorizedItems() {
    const dispatch = useAppDispatch();
    const getCategorizedItems = useAppSelector(selectRelatedProducts);
    const getStatus = useAppSelector(selectStatus);
    const getError = useAppSelector(selectError);
    const { name } = useParams();
    useEffect(() => {
        dispatch(loadCategorizedProducts(name));
    }, []);
    return (
        <>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-4 lg:grid-cols-2 w-4/5 m-auto">
                {getStatus && <Loading />}
                {getError && <h1>Error..</h1>}
                {!getStatus &&
                    getCategorizedItems.map((el) => {
                        return <ProductCard key={el.id} {...el} />;
                    })}
            </div>
        </>
    );
}

export default CategorizedItems;
