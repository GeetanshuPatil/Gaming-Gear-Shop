import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { selectCartTotal } from "../../cart/cartSelectors";
import { selectIsAuthenticated } from "../../auth/authSelectors";
import BackButton from "../../../shared/components/BackButton";
import { formatINR, convertToINR } from "../../../shared/utils/currency";

const PaymentPortal = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const total = useSelector(selectCartTotal);
  let navigate = useNavigate()

  const [method, setMethod] = useState("cod"); // 🔥 FIX

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  let handlePlaced = ()=>{
    navigate("/order-success");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
  <div className="p-6">
    <BackButton />

    {/* Title */}
    <h1 className="text-2xl font-semibold mb-6 text-white">
      Payment Portal
    </h1>

    {/* Order Summary */}
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-6 shadow-md">
      <h2 className="font-medium mb-3 text-white">Order Summary</h2>

      <div className="flex justify-between text-sm mb-2 text-gray-400">
        <span>Subtotal</span>
        <span className="text-white">
          {formatINR(total)}
        </span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Total</span>
        <span className="font-semibold text-green-500">
          {formatINR(total)}
        </span>
      </div>
    </div>

    {/* Payment Methods */}
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-6 shadow-md">
      <h2 className="font-medium mb-4 text-white">
        Select Payment Method
      </h2>

      {/* COD */}
      <label className="flex items-center gap-2 mb-3 cursor-pointer text-gray-300">
        <input
          type="radio"
          name="payment"
          value="cod"
          checked={method === "cod"}
          onChange={() => setMethod("cod")}
          className="accent-green-500"
        />
        Cash on Delivery (Available)
      </label>

      {/* CARD */}
      <label className="flex items-center gap-2 mb-3 text-gray-500">
        <input type="radio" disabled />
        Card Payment (Coming Soon)
      </label>

      {/* UPI */}
      <label className="flex items-center gap-2 text-gray-500">
        <input type="radio" disabled />
        UPI Payment (Coming Soon)
      </label>
    </div>

    {/* Confirm Button */}
    <button 
      onClick={handlePlaced}
      className="w-full bg-green-500 text-white py-3 rounded-xl font-medium
                 hover:bg-white hover:text-black transition active:scale-[0.98]
                 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
    >
      Place Order (Cash on Delivery)
    </button>

  </div>
</div>
  );
};

export default PaymentPortal;