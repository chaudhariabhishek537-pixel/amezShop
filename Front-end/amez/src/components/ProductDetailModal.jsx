import React, { useEffect, useState } from "react";

function ProductDetailModal({
  product,
  otherProducts,
  onClose,
  onSelectProduct,
}) {
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.imageUrl];

  const [mainImage, setMainImage] = useState(images[0]);

  /* 🔄 RESET IMAGE WHEN PRODUCT CHANGES */
  useEffect(() => {
    setMainImage(images[0]);
  }, [product]);

  /* 🔒 LOCK BODY SCROLL */
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 z-40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          className="bg-white w-full max-w-6xl rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center p-5 border-b sticky top-0 bg-white z-10">
            <h2 className="text-2xl font-bold text-gray-800">
              Product Details
            </h2>
            <button
              onClick={onClose}
              className="text-2xl font-bold text-gray-500 hover:text-red-500"
            >
              ✕
            </button>
          </div>

          {/* BODY */}
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* LEFT */}
            <div>
              <div className="border rounded-xl p-4">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-80 object-contain"
                />
              </div>

              <div className="flex gap-3 mt-4">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="thumb"
                    onClick={() => setMainImage(img)}
                    className={`h-16 w-16 object-contain rounded-lg cursor-pointer border
                      ${
                        mainImage === img
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {product.name}
              </h1>

              <p className="text-gray-500 mt-1">
                Category: {product.category?.name}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-yellow-500 text-lg">⭐⭐⭐⭐☆</span>
                <span className="text-sm text-gray-500">
                  (234 reviews)
                </span>
              </div>

              <p className="mt-4 text-gray-700">
                {product.description}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <span className="text-3xl font-bold text-green-600">
                  ₹{product.selling_price}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ₹{product.original_price}
                </span>
                {product.discount && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    {product.discount}% OFF
                  </span>
                )}
              </div>

              <div className="mt-8 flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700">
                  Buy Now
                </button>
                <button className="flex-1 bg-gray-900 text-white py-3 rounded-full hover:bg-black">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* RELATED PRODUCTS */}
          <div className="p-6 border-t bg-gray-50">
            <h3 className="text-xl font-bold mb-4">
              You may also like
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {otherProducts.slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  onClick={() => onSelectProduct(p)}
                  className="bg-white border rounded-xl p-4 hover:shadow-lg transition cursor-pointer"
                >
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="h-28 mx-auto object-contain"
                  />
                  <h4 className="mt-2 font-semibold text-sm truncate">
                    {p.name}
                  </h4>
                  <p className="text-green-600 font-bold">
                    ₹{p.selling_price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailModal;
