// src/components/Layout.jsx

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 flex flex-col">
      <Navbar />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: {
            background: "#111827",
            color: "#E5E7EB",
            borderRadius: "12px",
            border: "1px solid #1F2937",
          },
        }}
        containerStyle={{
          top: 20,
          right: 20,
        }}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
