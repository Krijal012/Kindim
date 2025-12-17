import { useState } from 'react';
import Footer from "../Components/footer";
import Header from "../Components/header";
import { OrderSummary } from "../Components/ordersummary";
import { CartItem } from "../Components/cartitem";
import FacewashImage from '../assets/BeautyProducts/facewash.jpg';

function CartPage() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Facewash', image: FacewashImage, quantity: 1, price: 450 },
        { id: 2, name: 'Facewash', image: FacewashImage, quantity: 1, price: 450 },
        { id: 3, name: 'Facewash', image: FacewashImage, quantity: 1, price: 450 }
    ]);

    const handleUpdateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemove = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = 100;
    const total = subtotal + delivery;

    return (
        <>
            <Header show={true} />
            <main className="pt-28 pb-24 px-4 min-h-screen">
                <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Left - Cart Items (2 columns) */}
                    <div className="lg:col-span-2">
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onUpdateQuantity={handleUpdateQuantity}
                                onRemove={handleRemove}
                            />
                        ))}
                    </div>
                    
                    {/* Right - Order Summary (1 column) */}
                    <div className="lg:col-span-1">
                        <OrderSummary 
                            subtotal={subtotal}
                            delivery={delivery}
                            total={total}
                        />
                    </div>
                </div>
            </main>
            <Footer show={true} />
        </>
    );
}

export default CartPage;