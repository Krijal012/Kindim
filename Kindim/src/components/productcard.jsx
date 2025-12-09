function ProductCard({ image, name, price, rating }) {
    return(
        <div className="flex gap-x-5">
            <div className="bg-gradient-to-b from-[#4a90e2] to-[#50e3c2] w-[300px] min-h-[200px] shadow-lg shadow-[#50e3c2] p-[20px]  flex gap-5 rounded-[10px] flex flex-col items-center transition-all hover:-translate-y-2 ">
                <div className="h-[150px] w-[150px] rounded-full cursor-pointer transition-all object-cover">
                    <img src={image} alt={name} className="h-full w-full rounded-full object-cover" />
                </div>
                <div className="text-3xl font-extrabold mt-[10px]">
                    <p>{name}</p>
                </div>
                <div className="font-bold mt-[10px]">
                    <p>Rs. {price}</p>
                </div>
                <div className="mt-[10px]">
                    <p>⭐ {rating} (0 Reviews)</p>
                </div>
                <div>
                    <button className="bg-[#1a73e8] text-white border-none rounded-md p-[10px] mt-[10px] cursor-pointer transition-all hover:bg-[#07489e] hover:text-white">Add to Cart</button>
                </div>
            </div>
            </div>
    )
}

export default ProductCard;