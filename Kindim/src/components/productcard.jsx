function ProductCard({ image, name, price, rating }) {
    return (
        <div className="flex gap-x-5">
            <div className="bg-gradient-to-b from-[#4a90e2] to-[#50e3c2] w-[300px] min-h-[200px] shadow-lg shadow-[#50e3c2] p-[20px] rounded-[10px] flex flex-col items-center transition-all hover:-translate-y-2">
                
                <div className="h-[150px] w-[150px] rounded-full cursor-pointer overflow-hidden">
                    <img src={image} alt={name} className="h-full w-full object-cover" />
                </div>

                <p className="text-3xl font-extrabold mt-3">{name}</p>

                <p className="font-bold mt-2">Rs. {price}</p>

                <p className="mt-2">⭐ {rating} (0 Reviews)</p>

                {/* UPDATED BUTTONS */}
                <div className="flex w-full mt-4 gap-3">
                    <button className="flex-1 bg-[#1A73E8] text-white py-2 rounded-lg font-semibold transition-all hover:bg-[#1558b0]">
                        Add to Cart
                    </button>

                    <button className="flex-1 bg-[#34A853] text-white py-2 rounded-lg font-semibold transition-all hover:bg-[#238a3b]">
                        Buy
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ProductCard;
