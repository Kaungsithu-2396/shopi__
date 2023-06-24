import NavBar from "./NavBar";
import Home from "./pages/HomePage";
import CartItems from "./pages/CartItems";
import Products from "./pages/Products";
import NoCartItem from "./pages/NoCartItem";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import CategorizedItems from "./pages/CategorizedItems";
import ProductDetail from "./pages/ProductDetail";
import Page from "./pages/Page";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/cartItems" element={<CartItems />} />
            <Route path="/products" element={<Products />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/test" element={<Page />} />
            <Route path="/category/:name" element={<CategorizedItems />} />
            <Route path="/NoCartItem" element={<NoCartItem />} />
            {/* <Route path="/products" element={<Products/>} */}
        </Route>
    )
);

export default function AppContainer() {
    return (
        <div className="flex flex-col   gap-6 md:gap-14 xl:gap-6">
            <RouterProvider router={router} />
        </div>
    );
}
