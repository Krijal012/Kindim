import { useState } from "react";
import CategoryFilter from "../Components/categoryfilter";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductCard from "../Components/productcard";
import { ProductsData } from "../Data/products";

function CategorySection() {
  const [selectCategory, setSelectCategory] = useState("Beauty Products");

  const productsToDisplay = ProductsData[selectCategory] || [];
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          
          {/* Filter Sidebar */}
            <CategoryFilter setSelectCategory={setSelectCategory} />

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {productsToDisplay.map((item) => (
              <ProductCard
                key={item.id} // Use the new id property for the key
                image={item.image}
                name={item.name}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default CategorySection;
