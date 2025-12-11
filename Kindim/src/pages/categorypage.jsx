import { useState, useEffect } from "react";
import Filters from "../components/filters";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductGrid from "../Components/productgrid";
import { ProductsData } from "../Data/productsdata";

const CategoryPage = () => {

    const allProducts = Object.values(ProductsData)
        .flat()
        .map((p) => ({ ...p, category: p.category || Object.keys(ProductsData).find(cat => ProductsData[cat].includes(p)) }));

    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [showElements, setShowElements] = useState({ showHeader: true, showFooter: false });
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY) { // if scroll down
                setShowElements({ showHeader: false, showFooter: true });
            } else { // if scroll up
                setShowElements({ showHeader: true, showFooter: false });
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <>
            <Header show={showElements.showHeader} />

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

            <Footer show={showElements.showFooter} />
        </>
    );
};

export default CategoryPage;
