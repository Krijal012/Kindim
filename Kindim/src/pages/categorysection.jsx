import CategoryFilter from "../Components/categoryfilter";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductCard from "../Components/productcard";

const products = [
  {
    id: 1,
    name: "Mamaearth Facewash",
    price: 450,
    rating: 4.5,
    image: new URL('../assets/BeautyProducts/facewash.jpg', import.meta.url).href
  },
  {
    id: 2,
    name: "Mamaearth Shampoo",
    price: 550,
    rating: 4.2,
    image: new URL('../assets/BeautyProducts/shampoo2.jpeg', import.meta.url).href
  },
  {
    id: 3,
    name: "WOW Product Facewash",
    price: 1200,
    rating: 4.8,
    image: new URL('../assets/BeautyProducts/facewash2.jpg', import.meta.url).href
  },
  {
    id: 4,
    name: "WOW Product Shampoo",
    price: 300,
    rating: 4.1,
    image: new URL('../assets/BeautyProducts/shampoo.jpg', import.meta.url).href
  },
  {
    id: 5,
    name: "Pefume",
    price: 450,
    rating: 4.5,
    image: new URL('../assets/BeautyProducts/Perfume.jpg', import.meta.url).href
  },
  {
    id: 6,
    name: "Perfume",
    price: 550,
    rating: 4.2,
    image: new URL('../assets/BeautyProducts/Perfume2.jpg', import.meta.url).href
  },
  {
    id: 7,
    name: "Lotion",
    price: 1200,
    rating: 4.8,
    image: new URL('../assets/BeautyProducts/lotion.jpeg', import.meta.url).href
  },
  {
    id: 8,
    name: "Lotion",
    price: 300,
    rating: 4.1,
    image: new URL('../assets/BeautyProducts/lotion2.png', import.meta.url).href
  },
];

function CategorySection() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          
          {/* Filter Sidebar */}
          <div className="lg:w-64 xl:w-72">
            <CategoryFilter />
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map((item) => (
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
