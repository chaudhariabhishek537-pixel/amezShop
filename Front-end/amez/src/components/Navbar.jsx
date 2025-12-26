import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-none sticky top-0 z-50">
      <div className="container mx-auto flex justify-center items-center p-4">

        {/* Desktop Navbar - centered */}
        <div
          className="hidden md:flex bg-pink-50/70 backdrop-blur-md px-8 py-3 
                     rounded-full shadow-lg space-x-6 text-gray-700 font-medium 
                     border border-pink-100 transition-all duration-300"
        >
          <a href="/" className="hover:text-pink-600">Home</a>
          <a href="/shop" className="hover:text-pink-600">Shop</a>
          <a href="/offers" className="hover:text-pink-600">Offers</a>
          <a href="/cart" className="hover:text-pink-600">Cart</a>
          <a href="/profile" className="hover:text-pink-600">Profile</a>
        </div>

        {/* Mobile Toggle Button (centered automatically) */}
        <button
          className="md:hidden p-3 rounded-lg bg-pink-100/60 backdrop-blur-sm border border-pink-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? (
            // Hamburger Icon
            <svg width="26" height="26" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="22" y2="7" />
              <line x1="4" y1="14" x2="22" y2="14" />
              <line x1="4" y1="21" x2="22" y2="21" />
            </svg>
          ) : (
            // Close Icon
            <svg width="26" height="26" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
              <line x1="5" y1="5" x2="21" y2="21" />
              <line x1="21" y1="5" x2="5" y2="21" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden flex flex-col bg-pink-50/80 backdrop-blur-md 
                    border border-pink-200 shadow-xl mx-6 mt-2 rounded-2xl 
                    overflow-hidden transition-all duration-500 ${
                      menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
      >
        <a href="/" className="p-4 border-b hover:bg-pink-100 transition">Home</a>
        <a href="/shop" className="p-4 border-b hover:bg-pink-100 transition">Shop</a>
        <a href="/categories" className="p-4 border-b hover:bg-pink-100 transition">Categories</a>
        <a href="/offers" className="p-4 border-b hover:bg-pink-100 transition">Offers</a>
        <a href="/cart" className="p-4 border-b hover:bg-pink-100 transition">Cart</a>
        <a href="/profile" className="p-4 hover:bg-pink-100 transition">Profile</a>
      </div>
    </nav>
  );
}

export default Navbar;
