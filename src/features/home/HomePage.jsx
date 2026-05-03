import ProductList from "../products/pages/ProductList";
import heroImg from "../../assets/hero2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../products/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const category = useSelector((state) => state.products.category);

  const handleCategoryClick = (cat) => {
    dispatch(setCategory(cat));
    navigate(`/?category=${cat}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 text-white">
      
      {/* 🔥 HERO SECTION */}
      <section className="relative rounded-3xl overflow-hidden mb-10">
        {/* Background */}
        <img
          src={heroImg}
          alt="gaming setup"
          className="w-full h-[300px] md:h-[400px] object-cover opacity-60"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Level Up Your <span className="text-green-500">Gaming Setup</span>
          </h1>

          <p className="mt-3 text-gray-300 max-w-md">
            Premium gaming gear for pro performance. Mice, keyboards,
            headsets and more.
          </p>

          <button
            onClick={() => handleCategoryClick("all")}
            className="mt-5 w-fit px-6 py-2.5 rounded-xl bg-black text-white hover:bg-green-600 text-black font-semibold transition"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* 🗂️ CATEGORIES */}
      <div className="mb-8">
        <h2 className="text-sm text-gray-400 mb-3">Browse Categories</h2>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {[
            { label: "All", value: "all" },
            { label: "Mouse", value: "mouse" },
            { label: "Keyboard", value: "keyboard" },
            { label: "Headset", value: "headset" },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryClick(cat.value)}
              className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition border
                ${
                  category === cat.value
                    ? "bg-green-500 text-black border-green-500"
                    : "bg-zinc-900 text-gray-300 border-zinc-700 hover:bg-green-500 hover:text-black"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 SECTION TITLE */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Trending Gear</h2>
      </div>

      {/* 🛒 PRODUCTS */}
      <ProductList />
    </div>
  );
};

export default HomePage;