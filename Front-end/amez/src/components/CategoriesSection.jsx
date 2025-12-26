import React, { useEffect, useState } from "react";
import axios from "axios";

function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories") // ← your backend endpoint
      .then((res) => {
        setCategories(res.data); // assuming backend returns list
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      {/* <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Top Categories
      </h2> */}

      {loading ? (
        <p className="text-center text-gray-600">Loading categories...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center cursor-pointer"
              src="/shop"
            >
              <img
                src={cat.imageUrl ? cat.imageUrl : `https://source.unsplash.com/200x200/?${cat.name}`}
                alt={cat.name}
                className="rounded-full mb-3"
              />
              <p className="font-medium text-gray-700">{cat.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default CategoriesSection;
