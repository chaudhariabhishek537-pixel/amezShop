import React from "react";

function ProductDetails() {
  return (
    <div className="p-6 md:p-12 flex flex-col md:flex-row gap-10">
      <img
        src="https://source.unsplash.com/400x400/?product"
        className="rounded-xl shadow-md"
      />

      <div>
        <h1 className="text-3xl font-bold text-gray-800">Amazing Product</h1>
        <p className="text-pink-600 text-2xl font-semibold mt-3">₹499</p>

        <p className="mt-4 text-gray-600">
          This is a beautiful product with premium quality and fast delivery.
        </p>

        <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
