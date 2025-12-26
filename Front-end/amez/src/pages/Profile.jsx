import React from "react";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <div className="p-6 md:p-12 max-w-xl mx-auto">
      <Navbar />
      <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8dlpPmgtzHkcFKQAkFTzRpPKU0AVb3IPsA&s"}
                alt= {"Profile Photo"}
                className="ml-25 rounded-full mb-3"
              />
        <p className="font-semibold text-gray-700">Name: John Doe</p>
        <p className="text-gray-600 mt-1">Email: john@example.com</p>

        <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full w-full">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
