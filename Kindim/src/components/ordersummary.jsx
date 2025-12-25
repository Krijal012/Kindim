export function OrderSummary({ subtotal }){
    // const subtotal = 150.00;
    const delivery = 0.00;
    const total = subtotal + delivery;

    const handleCheckout = () => {
        alert("Thank you for your order!");
    }
    return(
        <>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                {/* Header */}
                <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

                {/* Price Details */}
                <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>Rs. {subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-gray-600">
                            <span>Delivery</span>
                            <span>Rs. {delivery.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-gray-600">
                            <span>Total</span>
                            <span>Rs. {total.toFixed(2)}</span>
                        </div>

                        {/* Checkout Button */}
                        <button onClick={handleCheckout} className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Proceed to Checkout
                        </button>

                </div>

            </div>
        </>
    );
}