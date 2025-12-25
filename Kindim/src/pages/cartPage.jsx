import { useState } from "react";
import Cart from "../components/cart";
import { OrderSummary } from "../Components/ordersummary";
import { Footer } from "../Components/footer";
import { Header } from "../Components/header";
import Snowfall from "react-snowfall"

export function CartPage(){
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Facewash", price: 450, quantity: 1 },
        { id: 2, name: "Sunscreen", price: 600, quantity: 2 },
        { id: 3, name: "Moisturizer", price: 850, quantity: 1 },
        { id: 4, name: "Serum", price: 1200, quantity: 1 }    
    ]);

    const updateQuantity = (id, change) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + change;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
            }
            return item;
        }));
    };

    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return(
        <>
            <Header />
            <main className="bg-gray-50 py-10 mt-20 min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-3xl text-left font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
                    
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1">
                            <Cart 
                                cartItems={cartItems} 
                                updateQuantity={updateQuantity} 
                                handleRemove={handleRemove} 
                            />
                        </div>
                        <div className="w-full lg:w-96">
                            <OrderSummary subtotal={subtotal} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <Snowfall
        className="fixed inset-0 z-20 pointer-events-none"
        color="#82C3D9"
        snowflakeCount={120}
        />

        </>
    );
}