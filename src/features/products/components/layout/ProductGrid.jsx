// features/products/components/ProductGrid.jsx
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-2xl p-6">
      <div
        className="grid 
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  lg:grid-cols-4 
  gap-6 md:gap-8"
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
