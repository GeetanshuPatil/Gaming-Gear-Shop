import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import toast from "react-hot-toast";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { clearCart } from "../../features/cart/cartSlice";
import { clearWishlist } from "../../features/wishlist/wishlistSlice";
import logo from "../../assets/favicon.png";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);

  const cartItems = useSelector((state) => state.cart?.items || []);
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    dispatch(clearWishlist());

    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");
    localStorage.removeItem("user");

    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="GearZone Logo"
            className="h-8 w-auto object-contain rounded-3xl"
          />

          <span className="text-lg font-semibold hidden sm:flex items-center">
            <span className="text-white">Gear</span>
            <span className="text-green-500">Zone</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300 hover:text-green-400">
          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative px-3 py-1 text-sm transition ${
                isActive
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              `relative flex items-center justify-center px-3 py-1 transition ${
                isActive
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Heart className="w-5 h-5" />

                {/* Badge */}
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 text-xs bg-pink-500 text-white rounded-full px-1">
                    {wishlistItems.length}
                  </span>
                )}

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center justify-center px-3 py-1 transition ${
                isActive
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <ShoppingCart className="w-5 h-5" />

                {/* Badge */}
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-1">
                    {cartItems.length}
                  </span>
                )}

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}
          </NavLink>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-4">
          {/* ❤️ Wishlist */}
          <Link to="/wishlist" className="relative">
            <Heart className="w-5 h-5" />

            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-pink-500 text-white rounded-full px-1">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* 🛒 Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-5 h-5" />

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-sm">
          {token ? (
            <>
              <span className="text-gray-100 hidden sm:block">
                Hi, {user?.username || "User"}
              </span>

              <button
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-xl bg-red-500 text-gray-100 hover:bg-gray-200 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-white b font-medium"
                    : "text-gray-100 hover:text-green-500 transition"
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-xl text-white transition ${
                    isActive ? "bg-gray-800" : "bg-black hover:bg-gray-800"
                  }`
                }
              >
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
