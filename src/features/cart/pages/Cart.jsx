// features/cart/pages/Cart.jsx

import { useSelector } from "react-redux";
import { selectCartItems } from "../cartSelectors";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import BackButton from "../../../shared/components/BackButton";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const items = useSelector(selectCartItems);
  let navigate = useNavigate();

  if (!items.length) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-4">
        <BackButton />

        <h2 className="text-xl font-semibold text-gray-500">
          Your cart is empty 🛒
        </h2>

        <p className="text-gray-500 text-sm">
          Looks like you haven’t added anything yet.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <BackButton />

      <div className="grid lg:grid-cols-3 gap-8 mt-6">
        {/* LEFT */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {items.map((item) => (
             <CartItem key={`${item.id}-${item.quantity}`} item={item} />
          ))}
        </div>

        {/* RIGHT */}
        <div className="lg:sticky lg:top-24 h-fit">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
