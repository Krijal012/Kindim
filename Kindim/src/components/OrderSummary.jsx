export default function OrderSummary({ subtotal = 0 }) {
  const deliveryFee = subtotal > 0 ? 150 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-bold text-xl mb-6 text-gray-800">Order Summary</h3>

      <div className="space-y-3 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">Rs. {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span className="font-medium">Rs. {deliveryFee.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-300 pt-3 mt-3">
          <div className="flex justify-between font-bold text-lg text-gray-900">
            <span>Total</span>
            <span>Rs. {total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button className="w-full mt-6 bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition-colors">
        Proceed to Checkout
      </button>
    </div>
  );
}
