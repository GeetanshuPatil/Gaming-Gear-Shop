// features/products/components/ProductCard.jsx
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../wishlist/wishlistSlice";
import toast from "react-hot-toast";
import { Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  return (
    <div
  className="relative flex flex-col h-full bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-4 hover:shadow-lg hover:shadow-green-500/10 transition group"
>
  {/* ❤️ HEART (FIXED POSITION) */}
  <button
    onClick={(e) => {
      e.stopPropagation();

      if (isWishlisted) {
        dispatch(removeFromWishlist(product.id));
        toast("Removed from wishlist ❌");
      } else {
        dispatch(addToWishlist(product));
        toast.success("Added to wishlist");
      }
    }}
    className="absolute top-45 right-4 z-10 
               p-1 rounded-full 
               fill-white hover:text-green-500 text-white
               transition-all duration-200 hover:scale-110"
  >
    <Heart
      className={`w-6 h-6 transition ${
        isWishlisted
          ? "fill-green-500 text-green-500 "
          : " fill-white"
      }`}
    />
  </button>

  {/* CLICKABLE AREA */}
  <div
    onClick={() => navigate(`/product/${product.id}`)}
    className="cursor-pointer flex flex-col"
  >
    {/* IMAGE */}
    <div className="h-28 flex items-center justify-center bg-white rounded-xl mb-3">
      <img
        src={product.image}
        alt={product.name}
        className="h-24 object-contain mx-auto"
      />
    </div>

    {/* NAME (CLAMPED) */}
    <p className="text-sm text-gray-200 font-medium line-clamp-2 min-h-[40px]">
      {product.name}
    </p>

    {/* PRICE */}
    <p className="text-base font-semibold text-green-500 mt-1">
      ₹{product.price.toLocaleString("en-IN")}
    </p>
  </div>

  {/* BUTTON */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      dispatch(addToCart(product));
      toast.success("Added to cart");
    }}
    className="mt-3 w-full py-2 rounded-xl 
               bg-green-500 text-black text-sm font-bold
               hover:bg-green-50   transition  active:scale-95"
  >
    Add to Cart
  </button>
</div>
  );
};

export default ProductCard;
