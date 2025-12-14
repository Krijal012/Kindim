import ProductCard from "./ProductCard";

function ProductGrid({ products = [] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((item) => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    );
}

export default ProductGrid;