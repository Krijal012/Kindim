function CategoryFilter() {

  const categories = [
    "Beauty Products",
    "Clothing",
    "Decorations",
    "Electronics",
    "Music"
  ];

  return (
    <form className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-64 flex-shrink-0">

      <h2 className="font-bold text-xl mb-4">Filters</h2>

      {/* Category */}
      <h3 className="font-medium text-lg mb-2">Category</h3>
      <div className="space-y-2">
        {categories.map(cat => (
          <label key={cat} className="flex items-center gap-2">
            <input type="radio" name="category" value={cat} defaultChecked={cat === "Beauty Products"} />
            <span>{cat}</span>
          </label>
        ))}
      </div>

      {/* Price Range */}
      <h3 className="font-medium text-lg mt-4 mb-2">Price Range</h3>
      <input type="range" className="w-full" min="0" max="500" defaultValue="250" />

      {/* Rating */}
      <h3 className="font-medium text-lg mt-4 mb-2">Minimum Rating</h3>
      <div className="space-y-2">
        {[5,4,3,2,1].map(r => (
          <label key={r} className="flex items-center gap-2">
            <input type="radio" name="rating" value={`${r}+`} />
            <span>{r}+ Stars</span>
          </label>
        ))}
        <label className="flex items-center gap-2">
          <input type="radio" name="rating" value="All" />
          <span>All Stars</span>
        </label>
      </div>

      {/* Sort */}
      <h3 className="font-medium text-lg mt-4">Sort By</h3>
      <select className="w-full border border-gray-300 rounded-lg p-2 mt-1">
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Popular</option>
      </select>

      {/* Button */}
      <button className="bg-[#1A73E8] text-white py-2 px-4 mt-4 font-bold rounded-lg w-full transition-colors duration-200 hover:bg-[#1558b0]">
        Clear Filters
      </button>

    </form>
  );
}

export default CategoryFilter;
