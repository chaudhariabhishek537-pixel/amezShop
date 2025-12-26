import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import TrendingProducts from "../components/TrendingProducts";
import Brandsbar from "../components/Brandsbar";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <HeroSection />
      <CategoriesSection />
      <Brandsbar />
      <TrendingProducts />
      <Footer />
    </div>
  );
}

export default Home;
