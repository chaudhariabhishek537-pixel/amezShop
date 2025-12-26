import React from "react";
import Navbar from "../components/Navbar";

function Offers() {
  const offers = [
    { title: "50% OFF Fashion", img: "fashion" },
    { title: "Buy 1 Get 1 Free", img: "shoes" },
    { title: "Beauty Sale 40% OFF", img: "beauty" },
  ];

  return (
    <div className="p-6 md:p-12">
      <Navbar />
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Special Offers
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((o, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition cursor-pointer"
          >
            <img
              src={`https://source.unsplash.com/400x300/?${o.img}`}
              alt=""
              className="w-full"
            />
            <div className="p-4 bg-white">
              <h3 className="font-bold text-gray-800 text-xl">{o.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
