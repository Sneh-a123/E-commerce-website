import React from "react";

const Header = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <div className="bg-white w-full h-[70px] flex items-center px-4 py-5 shadow relative">
        
        {/* Hamburger + Logo */}
        <div className="flex items-center justify-center w-full relative lg:w-auto">
          {/* Hamburger icon - visible only on small screens */}
          <div className="absolute left-0 lg:hidden">
            <i className="fa-solid fa-bars-staggered text-xl text-red-500"></i>
          </div>

          {/* Logo - centered on mobile, left on lg */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:left-auto lg:text-left">
            LOGO
          </h1>
        </div>

        {/* CENTER MENU - only for large screens */}
        <div className="hidden lg:flex items-center gap-10 text-sm md:text-base text-gray-700 font-medium absolute left-1/2 -translate-x-1/2">
          <a href="#" className="hover:text-red-500 transition">Category</a>
          <a href="#" className="hover:text-red-500 transition">BestSarees</a>
          <a href="#" className="hover:text-red-500 transition">LatestSarees</a>
          <a href="#" className="hover:text-red-500 transition">ShopOccasionly</a>
          <a href="#" className="hover:text-red-500 transition">Contact Us</a>
        </div>

        {/* RIGHT ICONS */}
        <div className="ml-auto flex items-center gap-4 text-gray-700">
          <i className="fa-solid fa-user text-base sm:text-lg"></i>
          <i className="fa-regular fa-heart text-base sm:text-lg"></i>
          <i className="fa-solid fa-cart-shopping text-base sm:text-lg"></i>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-3 py-2 md:px-6 md:py-3 flex justify-center bg-amber-100 shadow-sm">
        <input
          type="text"
          placeholder="🔎 Search for items..."
          className="w-full md:w-[50%] h-[35px] px-3 border-2 border-gray-300 rounded-md text-sm md:text-base focus:outline-none focus:border-red-500"
        />
      </div>
    </>
  );
};

export default Header;
