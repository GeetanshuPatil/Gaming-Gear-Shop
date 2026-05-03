const ProductSkeleton = () => {
  return (
    <div className="animate-pulse bg-gray-900 border border-gray-800 rounded-2xl p-4 space-y-3">
      
      {/* Image */}
      <div className="h-36 w-full bg-gray-800 rounded-xl"></div>

      {/* Title */}
      <div className="h-4 bg-gray-700 rounded w-3/4"></div>

      {/* Price */}
      <div className="h-5 bg-gray-700 rounded w-1/3"></div>

      {/* Button */}
      <div className="h-10 bg-gray-800 rounded-xl mt-2"></div>
    </div>
  );
};

export default ProductSkeleton;