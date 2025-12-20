import { useState } from "react";

function Filters({ products, setFilteredProducts }) {
    const categories = [
        "All",
        "Beauty Products",
        "Clothing",
        "Decorations",
        "Electronics",
        "Music",
    ];

    const ratings = ["4+", "3+", "2+", "1+"];

    // states
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedRating, setSelectedRating] = useState(null);
    const [priceRange, setPriceRange] = useState({
        min: 0,
        max: 100000,
    });

    // one function to apply ALL filters
    const applyFilters = (cat, price, rating) => {
        let filtered = products;

        // category filter
        if (cat !== "All") {
            filtered = filtered.filter(p => p.category === cat);
        }

        // price filter
        filtered = filtered.filter(
            p => p.price >= price.min && p.price <= price.max
        );

        // rating filter
        if (rating !== null) {
            filtered = filtered.filter(p => p.rating >= rating);
        }

        setFilteredProducts(filtered);
    };

    // category change
    const handleCategory = (cat) => {
        setSelectedCategory(cat);
        applyFilters(cat, priceRange, selectedRating);
    };

    // price change
    const handlePriceChange = (e) => {
        const { name, value } = e.target;

        const newRange = {
            ...priceRange,
            [name]: Number(value),
        };

        setPriceRange(newRange);
        applyFilters(selectedCategory, newRange, selectedRating);
    };

    // rating change
    const handleRating = (r) => {
        const ratingValue = Number(r[0]); // "3+" → 3
        setSelectedRating(ratingValue);
        applyFilters(selectedCategory, priceRange, ratingValue);
    };

    // clear filters
    const clearFilters = () => {
        setSelectedCategory("All");
        setSelectedRating(null);
        setPriceRange({ min: 0, max: 100000 });
        setFilteredProducts(products);
    };

    return (
        <div className="font-sans p-4">
            <h2 className="text-xl font-bold mb-4">Filters</h2>

            {/* Category */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Category</h3>
                {categories.map((c) => (
                    <label key={c} className="flex items-center gap-2 mb-1 cursor-pointer">
                        <input
                            type="radio"
                            name="category"
                            checked={selectedCategory === c}
                            onChange={() => handleCategory(c)}
                        />
                        {c}
                    </label>
                ))}
            </div>

            {/* Rating */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Minimum Rating</h3>
                {ratings.map((r) => {
                    const ratingValue = Number(r[0]);
                    return (
                        <label key={r} className="flex items-center gap-2 mb-1 cursor-pointer">
                            <input
                                type="radio"
                                name="rating"
                                checked={selectedRating === ratingValue}
                                onChange={() => handleRating(r)}
                            />
                            {r} Stars
                        </label>
                    );
                })}
            </div>

            {/* Price */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Price Range (NPR)</h3>
                <div className="flex gap-2">
                    <input
                        type="number"
                        name="min"
                        value={priceRange.min}
                        onChange={handlePriceChange}
                        className="w-1/2 border px-2 py-1 rounded"
                    />
                    <input
                        type="number"
                        name="max"
                        value={priceRange.max}
                        onChange={handlePriceChange}
                        className="w-1/2 border px-2 py-1 rounded"
                    />
                </div>
            </div>

            <button
                onClick={clearFilters}
                className="w-full bg-blue-600 text-white py-2 rounded"
            >
                Clear Filters
            </button>
        </div>
    );
}

export default Filters;
