import React from "react";

const Header = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <div className="bg-white w-full h-[70px] flex items-center justify-between px-4 py-5">
        {/* Hamburger Icon - Visible only on small screens */}
        <i className="fa-solid fa-bars-staggered text-xl block md:hidden"></i>

        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">LOGO</h1>

        {/* Icons - Heart & Cart */}
        <div className="flex items-center gap-4">
            <i class="fa-solid fa-user"></i>
          <i className="fa-regular fa-heart text-base sm:text-lg"></i>
          <i className="fa-solid fa-cart-shopping text-base sm:text-lg"></i>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-3 py-2 md:px-6 md:py-3 bg-white">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for items..."
          className="w-full h-[35px] px-3 border-2 border-gray-300 rounded-md text-sm md:text-base"
        />
      </div>
    </>
  );
};

export default Header;
