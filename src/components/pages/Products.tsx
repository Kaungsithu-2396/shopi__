import { useEffect } from "react";
import {
    loadAllProducts,
    selectRelatedProducts,
    selectStatus,
    selectError,
} from "../../features/Products/loadProductSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ProductCard from "../ProductCard";
import Loading from "../Loading";

function Products() {
    const dispatch = useAppDispatch();
    const getAllProducts = useAppSelector(selectRelatedProducts);
    const statusInfo = useAppSelector(selectStatus);
    const getError = useAppSelector(selectError);
    useEffect(() => {
        dispatch(loadAllProducts());
    }, []);

    return (
        <>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-4 lg:grid-cols-2 w-4/5 m-auto ">
                {statusInfo && <Loading />}
                {getError && <h1>Error..</h1>}
                {!statusInfo &&
                    getAllProducts.map((el) => {
                        return <ProductCard key={el.id} {...el} />;
                    })}
            </div>
        </>
    );
}

export default Products;
