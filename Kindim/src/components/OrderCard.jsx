export function OrderCard({ quantity, productName, price, image }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-3 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                    {image ? (
                        <img src={image} alt={productName} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-xs text-gray-500">Qty: {quantity}</span>
                    )}
                </div>
                <div className="truncate">
                    <p className="font-semibold text-gray-800 truncate">{productName}</p>
                    <p className="text-sm text-gray-500">Qty: {quantity}</p>
                </div>
            </div>
            <span className="font-semibold text-gray-800">{price}</span>
        </div>
    );
}