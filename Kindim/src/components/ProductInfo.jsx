export function ProductInfo({productName, originalPrice, productImage}){
    return(
        <>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded">
                        {productImage && (
                            <img src={productImage} alt={productName} className="w-full h-full object-cover rounded" />
                        )}
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{productName}</h3>
                        <p className="text-gray-600">Original Price: Rs. {originalPrice}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
