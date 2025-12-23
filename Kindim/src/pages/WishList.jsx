import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { CartItem } from "../components/WishCart";

function WishCart() {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Facewash", image: "/cloth.png", price: 450 },
    { id: 2, name: "Facewash", image: "/product1.jpg", price: 450 },
    { id: 3, name: "Facewash", image: "/product1.jpg", price: 450 },
    { id: 4, name: "Facewash", image: "/product1.jpg", price: 550 },
    { id: 5, name: "Facewash", image: "/product1.jpg", price: 450 },
    { id: 6, name: "Facewash", image: "/product1.jpg", price: 450 },
    { id: 7, name: "Facewash", image: "/product1.jpg", price: 450 },
    { id: 8, name: "Facewash", image: "/product1.jpg", price: 450 },
  ]);

  const handleRemove = (id) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  const handleAddToCart = (item) => {
    console.log("Item added to cart:", item);
    handleRemove(item.id); // Optionally remove from wishlist
  };

  return (
    <div className="bg-gray-300 w-[1432px]">
    <div className="min-h-screen flex flex-col">
      <Header show={true} />
      <main className="flex-1 pt-28 pb-24 px-4">
        <h1 className="text-3xl pt-10 font-bold mb-8 text-black text-center">
          Your Wishlist
        </h1>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {wishlistItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={handleRemove}
                addItemToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-full text-gray-500 text-lg">
            Your wishlist is empty.
          </div>
        )}
      </main>
      <Footer show={true} />
    </div>
    </div>
  );
}

export default WishCart;
