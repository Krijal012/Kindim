export function OrderSummary({ subtotal, delivery, total }) {
    return(
        <div className="bg-gray-300 p-4 sm:p-6 rounded-lg sticky top-28">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="mb-4">
                <div className="flex justify-between text-gray-600 mb-2">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal}</span>
                </div>

                <div className="flex justify-between text-gray-600 mb-2">
                    <span>Delivery</span>
                    <span>Rs. {delivery}</span>
                </div>

                <div className="flex justify-between font-bold text-lg border-t border-gray-400 pt-2 mt-2">
                    <span>Total</span>
                    <span>Rs. {total}</span>
                </div>
            </div>

            <button className="w-full py-3 rounded-lg font-medium text-white bg-blue-600 cursor-pointer transition hover:bg-blue-500">
                Proceed to checkout
            </button>
        </div>
    );
}