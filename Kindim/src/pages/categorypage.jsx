import { useState, useEffect } from "react";
import Filters from "../Components/filters";
import Footer from "../Components/Footer";
import Header from "../Components/header";
import ProductGrid from "../Components/productgrid";
import { ProductsData } from "../Data/productsdata";

const CategoryPage = () => {

    const allProducts = Object.values(ProductsData)
        .flat()
        .map((p) => ({
            ...p,
            category:
                p.category || Object.keys(ProductsData).find((cat) =>
                    ProductsData[cat].includes(p)
                ),
        }));

    const [filteredProducts, setFilteredProducts] = useState(allProducts);

// controls header/footer visibility
const [showHeader, setShowHeader] = useState(true);
const [showFooter, setShowFooter] = useState(false);

useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
        const currentY = window.scrollY;

        if (currentY > lastY) {
            // scrolling down
            setShowHeader(false);
            setShowFooter(true);
        } else {
            // scrolling up
            setShowHeader(true);
            setShowFooter(false);
        }

        lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
}, []);



    return (
        <>
            <Header show={showHeader} />

            <div className="flex bg-gray-100 pt-24 pb-24">
                {/* Left */}
                <div className="w-1/5 bg-white shadow p-4">
                    <Filters products={allProducts} setFilteredProducts={setFilteredProducts} />
                </div>

                {/* Right */}
                <div className="w-4/5 p-6">
                    <h2 className="font-semibold mb-4">
                        {filteredProducts.length} Products found
                    </h2>

                    <ProductGrid products={filteredProducts} />
                </div>
            </div>

            <Footer show={showFooter} />
        </>
    );
};

export default CategoryPage;
