
export function OrderSummary(){
    return(
        <div className="bg-gray-300 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="mb-4">
                <div className="flex justify-between text-gray-600 mb-2">
                    <span>Subtotal</span>
                    <span>Rs. 450</span>
                </div>

                <div className="flex justify-between text-gray-600 mb-2">
                    <span>Delivery</span>
                    <span>Rs. 100</span>
                </div>
            </div>

            <button className="w-full py-3 rounded-lg font-medium border-t border-none text-white bg-blue-600 cursor-pointer transition hover:bg-blue-500">Proceed to checkout</button>
        </div>
    );
}

