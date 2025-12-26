import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductDetailModal from "./ProductDetailModal";

/* Skeleton Card */
function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white p-5 rounded-2xl border">
      <div className="h-40 bg-gray-200 rounded-lg"></div>
      <div className="h-4 bg-gray-200 mt-4 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 mt-2 rounded w-1/2"></div>
      <div className="h-8 bg-gray-200 mt-4 rounded"></div>
    </div>
  );
}

function TrendingProducts() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
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
    <section className="py-14 px-6 bg-gradient-to-b from-gray-50 to-white">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Trending Products
        </h2>
        <p className="text-gray-500 mt-2">
          Best deals curated for you
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition
              ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CONTENT */}
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
              className="group fade-in bg-white rounded-2xl border shadow-sm hover:shadow-xl transition"
            >
              {/* CLICKABLE AREA */}
              <div
                onClick={() => setSelectedProduct(p)}
                className="p-5 cursor-pointer"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="h-44 mx-auto object-contain transform group-hover:scale-110 transition"
                  />

                  {/* WISHLIST */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
                    <button className="bg-white rounded-full p-2 shadow hover:text-red-500">
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

                {/* INFO */}
                <h3 className="mt-4 font-semibold text-gray-800 truncate">
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
              </div>

              {/* BUTTONS */}
              <div className="px-5 pb-5 flex gap-3">
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-blue-500 text-white py-2 rounded-full text-sm hover:bg-blue-600"
                >
                  Buy Now
                </button>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-gray-900 text-white py-2 rounded-full text-sm hover:bg-black"
                >
                  Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          otherProducts={productList.filter(
            (p) => p.id !== selectedProduct.id
          )}
          onClose={() => setSelectedProduct(null)}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />
      )}
    </section>
  );
}

export default TrendingProducts;
