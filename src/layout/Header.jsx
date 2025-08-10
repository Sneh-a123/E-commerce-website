import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // ✅ navigate hook
import Add_to_cart from "./Add_to_cart.jsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menu
  const [isCartOpen, setIsCartOpen] = useState(false); // Add to cart
  const [searchTerm, setSearchTerm] = useState("");
  
  const navigate = useNavigate(); // ✅ navigate hook
  // const carouselRef = useRef(null);

  const handleProductClick = (product) => {
    navigate("/products", { state: { product } }); // ✅ correct state key
  };

  // Dummy product data
  const products = [
    { id: 1, name: "Teal and Gold Floral Saree...", price:"₹ 1,050" },
    { id: 2, name: "Baby Blue Chiffon Floral Printed Saree – Elegant, Lightweight & Stylish- Rang Panchami", price: "₹ 3,299.00" },
    { id: 3, name: "Baby Pink Georgette Saree with Graceful Lace Border - Kitkat", price: "₹ 1,680.00" },
    { id: 4, name: "Beige Chiffon Saree with Resham & Stone Work - Aishwrya", price: "₹ 4,960.00" },
    { id: 5, name: "Black Georgette Saree with Multicolor Abstract Print - Shamli", price: "₹ 1,930.00" },
    { id: 6, name: "Black Silk Printed Saree with Striped Pattern – Traditional Yet Trendy - Rang Panchami", price: "₹ 2,249.00" },
    { id: 7, name: "Blue Crepe Silk Saree with Foil Work - Chameli", price: "₹ 2,380.00" },
    { id: 8, name: "Blue Floral Georgette Saree - Gulabo", price: "₹ 1,745.00" },
    { id: 9, name: "Blue Floral Georgette Saree - Gulabo", price: "₹ 1,745.00" },
    { id: 10, name: "Blue Striped Chiffon Saree – Soft, Flowing & Stylish - Rang Panchami", price: "₹ 2,749.00" },
    { id: 11, name: "Green Chiffon Butti Printed Saree – Soft, Flowing & Stylish Look - Rang Panchami", price: "₹ 2,799.00" },
    { id: 12, name: "Party Wear" },
    { id: 13, name: "Festival" },
    { id: 14, name: "Daily Wear" },
    { id: 15, name: "Gifting" }
  ];

  // Filtered products based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="bg-white w-full h-[70px] flex items-center px-4 md:px-8 shadow  sticky top-0 z-50">
        
        {/* Hamburger + Logo */}
        <div className="flex items-center justify-center w-full relative lg:w-auto">
          {/* Hamburger Icon (Mobile Only) */}
          <div className="absolute left-0 lg:hidden">
            <i
              onClick={() => setIsMenuOpen(true)}
              className="fa-solid fa-bars-staggered text-2xl text-red-500 cursor-pointer hover:text-red-600 transition-colors"
            ></i>
          </div>

          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold tracking-wide absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            LOGO
          </h1>
        </div>

        {/* Center Menu (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 text-base text-gray-700 font-medium absolute left-1/2 -translate-x-1/2">
          <a href="#best-seller" className="hover:text-red-500 transition">Best Sarees</a>
          <a href="#latest-saree" className="hover:text-red-500 transition">Latest Sarees</a>
          <a href="#shop-by-occation" className="hover:text-red-500 transition">Shop Occasionally</a>
          <Link to="/ContactUs" className="hover:text-red-500 transition">Ask a Query</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-gray-700 ml-auto relative">
          {/* User Icon Dropdown */}
          <div className="relative group cursor-pointer">
            <i className="fa-solid fa-user text-lg hover:text-red-500 transition-colors"></i>
            <div className="absolute right-0 bg-white shadow-lg rounded-md p-4 hidden group-hover:block z-10 space-y-2 w-36 text-sm">
              <Link to="/login" className="block text-gray-800 hover:text-red-500">Login</Link>
              <Link to="/register" className="block text-gray-800 hover:text-red-500">Register</Link>
            </div>
          </div>

          {/* Wishlist Icon */}
          <i className="fa-regular fa-heart text-lg cursor-pointer hover:text-red-500 transition-colors"></i>

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative"
          >
            <i className="fa-solid fa-cart-shopping text-lg cursor-pointer hover:text-red-500 transition-colors"></i>
          </button>

          {/* Add to Cart Component */}
          <Add_to_cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-[310px] bg-white shadow-2xl transform transition-transform duration-300 z-50
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <i
            onClick={() => setIsMenuOpen(false)}
            className="fa-solid fa-xmark text-2xl text-gray-600 cursor-pointer hover:text-red-500"
          ></i>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col gap-6 px-6 text-gray-700 font-medium">
          <a href="#best-seller" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>Best Sarees</a>
          <a href="#latest-saree" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>Latest Sarees</a>
          <a href="#shop-by-occation" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>Shop Occasionally</a>
          <Link to="/ContactUs" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>Ask a Query</Link>
        </nav>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-2 md:px-6 md:py-3 flex flex-col items-center bg-amber-100 shadow-sm relative">
        <input
          type="text"
          placeholder="🔎 Search for items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-[50%] h-[38px] px-4 border border-gray-300 rounded-md text-sm md:text-base focus:outline-none focus:border-red-500 transition"
        />

        {/* Search Results Dropdown */}
        {searchTerm && (
          <div   className="absolute top-[70px] w-full md:w-[50%] bg-white border shadow-md rounded-md mt-2 max-h-60 overflow-y-auto z-50">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div onClick={() => handleProductClick(item)} >
                  <div
                  key={item.id}
                  
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchTerm(""); // clear search
                    console.log("Clicked:", item.name); // yaha tum navigate ya details open kar sakte ho
                  }}
                >
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
                </div>
              ))
            ) : (
              <p className="p-3 text-gray-500">No items found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
