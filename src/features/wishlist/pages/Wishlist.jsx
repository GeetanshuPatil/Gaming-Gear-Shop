import { useSelector, useDispatch } from "react-redux";
import { selectWishlistItems } from "../wishlistSelectors";
import { removeFromWishlist } from "../wishlistSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../../cart/cartSlice";
import { convertToINR, formatINR } from "../../../shared/utils/currency";
import BackButton from "../../../shared/components/BackButton";
import toast from "react-hot-toast";



const Wishlist = () => {
  const items = useSelector(selectWishlistItems);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return <p className="p-4 text-gray-500">Your wishlist is empty </p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 text-white">
  <BackButton />

  <h1 className="text-xl md:text-2xl font-semibold mb-6">
    My Wishlist
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {items.map((item) => (
      <div
        key={item.id}
        className="bg-gradient-to-b from-gray-900 to-gray-950 
                   border border-gray-800 rounded-2xl p-4 
                   hover:shadow-lg hover:shadow-green-500/10 transition"
      >
        <Link to={`/product/${item.id}`}>
          <div className="h-36 flex items-center justify-center bg-white rounded-xl mb-3">
            <img
              src={item.image}
              alt={item.name}
              className="h-28 object-contain"
            />
          </div>

          <h2 className="text-sm font-medium text-gray-200 line-clamp-2">
            {item.name}
          </h2>
        </Link>

        {/* Price */}
        <p className="text-sm text-green-400 font-semibold mt-1">
          ₹{item.price.toLocaleString("en-IN")}
        </p>

        {/* Remove */}
        <button
          onClick={() => {
            dispatch(removeFromWishlist(item.id));
            toast("Removed from wishlist");
          }}
          className="mt-3 text-xs text-gray-400 hover:text-red-500 transition"
        >
          Remove
        </button>

        {/* Add to Cart */}
        <button
          onClick={() => {
            dispatch(addToCart(item));
            toast.success("Added to cart");
          }}
          className="mt-3 w-full py-2 rounded-xl 
                     bg-green-500 text-black text-sm font-bold
                     hover:bg-white hover:text-black transition active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>
  );
};

export default Wishlist;
