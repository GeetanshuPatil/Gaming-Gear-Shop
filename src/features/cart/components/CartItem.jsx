// features/cart/components/CartItem.jsx
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../cartSlice";
import { convertToINR, formatINR } from "../../../shared/utils/currency";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();


  console.log(item);
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center justify-between 
bg-gray-900 border border-gray-800 rounded-2xl p-4 gap-4 
hover:shadow-lg hover:shadow-green-500/10 transition"
    >
      {/* LEFT */}
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-medium text-white line-clamp-1">
            {item.name}
          </h3>

          {/* UNIT PRICE */}
          <p className="text-sm text-green-400 font-semibold">₹{item.price}</p>
        </div>
      </div>

      {/* RIGHT SIDE (merged center + right for better layout) */}
      <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
        {/* Quantity */}
        <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden"className="flex items-center border border-gray-700 rounded-xl overflow-hidden">
          <button
            onClick={() => {
              dispatch(decreaseQty(item.id));
              toast("Quantity updated");
            }}
             className="px-3 py-1.5 text-gray-300 hover:bg-gray-800"
          >
            −
          </button>

          <span className="px-3 text-sm text-white">{item.quantity}</span>

          <button
            onClick={() => {
              dispatch(increaseQty(item.id));
              toast.success("Quantity increased");
            }}
            className="px-3 py-1.5 text-gray-300 hover:bg-gray-800"
          >
            +
          </button>
        </div>

        {/* Remove */}
        <button
          onClick={() => {
            dispatch(removeFromCart(item.id));
            toast("Removed from cart ❌");
          }}
          className="text-gray-500 hover:text-red-500 transition text-lg"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default CartItem;
