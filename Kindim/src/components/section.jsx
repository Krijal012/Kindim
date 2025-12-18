import AdsBoard from "./ads";
import Catagories from "./catagaries";
import ProductGrid from "./ProductGrid";


// Sample product data. In a real application, this would likely come from an API.
const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "2500",
    image: "/product1.jpg",
    rating: "4.5",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "4500",
    image: "/product2.jpg",
    rating: "4.8",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "1800",
    image: "/product3.jpg",
    rating: "4.3",
  },

   {
    id: 3,
    name: "Bluetooth Speaker",
    price: "1800",
    image: "/product3.jpg",
    rating: "4.3",
  }, {
    id: 3,
    name: "Bluetooth Speaker",
    price: "1800",
    image: "/product3.jpg",
    rating: "4.3",
  },
   {
    id: 3,
    name: "Bluetooth Speaker",
    price: "1800",
    image: "/product3.jpg",
    rating: "4.3",
  },
   {
    id: 3,
    name: "Bluetooth Speaker",
    price: "1800",
    image: "/product3.jpg",
    rating: "4.3",
  },
   {
    id: 3,
    name: "Bluetooth Speaker",
    price: "1800",
    image: "/product3.jpg",
    rating: "4.3",
  },
   {
    id: 3,
    name: "Bluetooth Speaker",
    price: "1800",
    image: "/product3.jpg",
    rating: "4.3",
  },
   {
    id: 3,
    name: "Bluetooth Speaker",
    price: "1800",
    image: "/product3.jpg",
    rating: "4.3",
  },



];

function Section() {
  return (
    <div className="bg-white min-h-screen w-screen">
      <div>
      <AdsBoard />
      </div>
      <div className="mt-8">
        <Catagories />
      </div>
      <ProductGrid products={sampleProducts} />
    </div>
  );
}

export default Section;