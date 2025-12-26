import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 text-gray-700 pt-12 pb-6 rounded-t-3xl shadow-inner mt-0">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">AmezShop</h2>
          <p className="text-gray-600 text-sm">
            Your one-stop destination for amazing products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-pink-600 transition">Home</a></li>
            <li><a href="/shop" className="hover:text-pink-600 transition">Shop</a></li>
            <li><a href="/categories" className="hover:text-pink-600 transition">Categories</a></li>
            <li><a href="/offers" className="hover:text-pink-600 transition">Offers</a></li>
            <li><a href="/cart" className="hover:text-pink-600 transition">Cart</a></li>
          </ul>
        </div>

        {/* Contact / Social Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Us</h3>
          <p className="text-sm text-gray-600">Email: support@amezshop.com</p>
          <p className="text-sm text-gray-600 mb-3">Phone: +91 98765 43210</p>

          <div className="flex space-x-4 mt-2 text-2xl">
            <a href="#" className="hover:text-pink-600 transition">🌐</a>
            <a href="#" className="hover:text-pink-600 transition">🐦</a>
            <a href="#" className="hover:text-pink-600 transition">📸</a>
            <a href="#" className="hover:text-pink-600 transition">📘</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-700">
        <p>
          © {new Date().getFullYear()} All Rights Reserved by{" "}
          <span className="text-pink-600 font-semibold">AmezShop</span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
