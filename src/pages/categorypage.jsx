import { useState, useEffect, useRef } from "react";
import Filters from "../Components/filters";
import Footer from "../Components/footer";
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
const [showFooter, setShowFooter] = useState(true);
const lastY = useRef(window.scrollY);

useEffect(() => {
    const handleScroll = () => {
        const currentY = window.scrollY;

        // A small threshold to prevent hiding on minor scrolls
        if (currentY > lastY.current && currentY - lastY.current > 10) {
            // scrolling down
            setShowHeader(false);
            setShowFooter(true);
        } else if (lastY.current - currentY > 10) {
            // scrolling up
            setShowHeader(true);
            setShowFooter(false);
        }

        lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
}, []);



    return (
        <>
            <Header show={showHeader} />
            {/* This container should ideally be part of a main Layout component */}
            <main className="pt-24 pb-24">
              {/* Add a spacer div for the footer so content doesn't get hidden */}
              <div className="flex flex-col md:flex-row bg-gray-100">
                {/* Left */}
                <div className="w-full md:w-1/5 bg-white shadow p-4">
                    <Filters products={allProducts} setFilteredProducts={setFilteredProducts} />
                </div>

                {/* Right */}
                <div className="w-full md:w-4/5 p-6">
                    <h2 className="font-semibold mb-4">
                        {filteredProducts.length} Products found
                    </h2>

                    <ProductGrid products={filteredProducts} />
                </div>
              </div>
              <div className="h-[150px]" /> {/* Spacer for the footer */}
            </main>

            <Footer show={showFooter} />
        </>
    );
};

export default CategoryPage;