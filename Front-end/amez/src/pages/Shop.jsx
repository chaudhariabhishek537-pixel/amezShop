import axios from "axios";
import React, { useEffect, useState } from "react";

/* Skeleton Loader */
function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white rounded-2xl border p-5">
      <div className="h-44 bg-gray-200 rounded-xl"></div>
      <div className="h-4 bg-gray-200 mt-4 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 mt-2 rounded w-1/2"></div>
      <div className="h-8 bg-gray-200 mt-4 rounded"></div>
    </div>
  );
}

function Shop() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Men", "Women", "Electronics"];

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => {
        setProductList(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? productList
      : productList.filter(
          (p) => p.category?.name === activeCategory
        );

  return (
    <section className="py-14 px-6 md:px-12 bg-gray-50">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Shop Products
        </h2>
        <p className="text-gray-500 mt-2">
          Discover our best collections
        </p>
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition
              ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl border shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-t-2xl p-4">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="h-44 mx-auto object-contain transform group-hover:scale-110 transition duration-300"
                />

                {/* WISHLIST */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white p-2 rounded-full shadow hover:text-red-500">
                    ❤️
                  </button>
                </div>

                {/* DISCOUNT */}
                {p.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                    {p.discount}% OFF
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 truncate">
                  {p.name}
                </h3>

                {/* RATING */}
                <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                  ⭐ ⭐ ⭐ ⭐ <span className="text-gray-400">(124)</span>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  {p.category?.name}
                </p>

                {/* PRICE */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-bold text-green-600">
                    ₹{p.selling_price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{p.original_price}
                  </span>
                </div>

                {/* ACTIONS */}
                <div className="mt-4 flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
                    Buy Now
                  </button>
                  <button className="flex-1 bg-gray-900 text-white py-2 rounded-full text-sm font-medium hover:bg-black transition">
                    Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Shop;
