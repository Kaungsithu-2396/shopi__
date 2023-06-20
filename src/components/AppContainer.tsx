import NavBar from "./NavBar";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
export default function AppContainer() {
    return (
        <div className=" grid grid-rows-1 gap-5">
            <NavBar />
            <Categories />
            <FeaturedProducts />

            <Footer />
        </div>
    );
}
