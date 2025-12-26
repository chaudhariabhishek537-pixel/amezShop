import React from "react";

function Cart() {
  return (
    <div className="p-6 md:p-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      <div className="bg-white shadow rounded-xl p-6 flex flex-col md:flex-row gap-6">
        <img
          src="https://source.unsplash.com/200x200/?product"
          className="rounded-lg"
        />

        <div className="flex-1">
          <h3 className="font-bold text-xl">Product Name</h3>
          <p className="text-pink-600 font-semibold mt-1">₹499</p>

          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
            Remove
          </button>
        </div>
      </div>

      <div className="text-right mt-6">
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
