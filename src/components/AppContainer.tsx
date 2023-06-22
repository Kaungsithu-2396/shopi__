import NavBar from "./NavBar";
import Home from "./pages/HomePage";
import CartItems from "./pages/CartItems";
import Products from "./pages/Products";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Footer from "./Footer";
import CategorizedItems from "./pages/CategorizedItems";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/cartItems" element={<CartItems />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category/:name" element={<CategorizedItems />} />
            {/* <Route path="/products" element={<Products/>} */}
        </Route>
    )
);

export default function AppContainer() {
    return (
        <div className="flex flex-col  gap-6 md:gap-14 xl:gap-6">
            <RouterProvider router={router} />
            {/* <Footer /> */}
        </div>
    );
}
