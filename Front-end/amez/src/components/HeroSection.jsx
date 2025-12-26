import React from "react";

function HeroSection() {
  return (
    <section className="-mt-20 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Welcome to AmezShop
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Shop trendy products at wholesale prices. Fast delivery & easy returns.
      </p>
      <a
        href="/shop"
        className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition"
      >
        Start Shopping
      </a>
    </section>
  );
}

export default HeroSection;
