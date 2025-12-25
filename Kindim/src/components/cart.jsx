import { useState } from 'react';
import img1 from "../assets/BeautyProducts/facewash.jpg"

function Cart(){
    // Dummy data for 5 products
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Facewash", price: 450, quantity: 1 },
        { id: 2, name: "Sunscreen", price: 600, quantity: 2 },
        { id: 3, name: "Moisturizer", price: 850, quantity: 1 },
        { id: 4, name: "Serum", price: 1200, quantity: 1 },
        { id: 5, name: "Toner", price: 350, quantity: 3 },
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

    return(
        <div className="space-y-4 w-40 h-40">
            {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200">
                    {/* Product Image */}
                    <img src={img1} className="w-20 h-20 rounded-lg object-cover" alt={item.name} />

                    {/* Product Details */}
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600">Rs {item.price}</p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-10 h-10 flex items-center justify-center">-</button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-10 h-10 flex items-center justify-center">+</button>
                    </div>

                    {/* Remove Button */}
                    <button onClick={() => handleRemove(item.id)} className="flex items-center gap-2 text-red-500 hover:text-red-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}
export default Cart;