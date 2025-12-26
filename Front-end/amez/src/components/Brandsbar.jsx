import React from "react";
import amazonLogo from "../assets/brands/Amezon.png";
import meeshoLogo from "../assets/brands/Meesho.png";
import flipkartLogo from "../assets/brands/Flipkart.png";
import myntraLogo from "../assets/brands/Myntra.png";
import ajioLogo from "../assets/brands/Ajio.png";

function Brandsbar() {
  const brands = [
    { name: "Amazon", logo: amazonLogo },
    { name: "Meesho", logo: meeshoLogo },
    { name: "Flipkart", logo: flipkartLogo },
    { name: "Myntra", logo: myntraLogo },
    { name: "Ajio", logo: ajioLogo },
    // add more freely — size stays fixed
  ];

  return (
    <div className="w-full px-6 py-10 bg-white overflow-hidden">
      {/* Scroll Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-infiniteScroll">

          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="mx-10 flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={b.logo}
                alt={b.name}
                className="h-12 w-32 object-contain"
              />
            </div>
          ))}

        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infiniteScroll {
          animation: infiniteScroll 15s linear infinite;
        }
        .animate-infiniteScroll:hover {
          animation-play-state: paused;
        }

      `}</style>
    </div>
  );
}

export default Brandsbar;
