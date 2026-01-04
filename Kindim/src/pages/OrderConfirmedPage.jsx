import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { OrderCard } from "../components/OrderCard";
import headphone from "../assets/Electronics/headphone.jpg";
import shampoo from "../assets/BeautyProducts/shampoo.jpg";

export function OrderConfirmedPage() {
    const orderItems = [
        { quantity: 1, productName: 'Headphone', price: '5500', image: headphone },
        { quantity: 1, productName: 'Shampoo', price: '550', image: shampoo }
    ];

    const handleTrackOrder = () => {
        alert('Tracking your order...');
    };

    const handleContinueShopping = () => {
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            {/* Main Content */}
            <main className="max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6 mt-20">
                {/* Success Message */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Order Confirmed!</h1>
                    <p className="text-gray-600">
                        Thank you for your purchase. Your order has been successfully placed and is being processed.
                    </p>
                </div>

                {/* Order Info */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16">
                        <div className="text-center">
                            <p className="text-gray-600 mb-1">Estimated Delivery:</p>
                            <p className="font-semibold text-gray-800">12PM</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-600 mb-1">Total Paid:</p>
                            <p className="font-semibold text-gray-800">Price</p>
                        </div>
                    </div>
                </div>

                {/* Order Details */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Order Details:</h2>
                    {orderItems.map((item, index) => (
                        <OrderCard 
                            key={index}
                            quantity={item.quantity}
                            productName={item.productName}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col items-center gap-4">
                    <button 
                        onClick={handleTrackOrder}
                        className="w-full sm:w-64 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
                    >
                        Track Order
                    </button>
                    <button 
                        onClick={handleContinueShopping}
                        className="text-gray-700 font-medium hover:text-gray-900"
                    >
                        Continue Shopping
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}