import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [User, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const Handler = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    if (!User.name || !User.email || !User.password) {
      alert("Please fill all fields");
      return;
    }

    axios
      .post("http://localhost:8080/register", User)
      .then((res) => {
        if (res.data === true) {
          alert("User Registered Successfully!");
        } else {
          alert("Something went wrong...");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error connecting to server.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      <form
        onSubmit={SubmitForm}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-pink-100"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        {/* Name */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={User.name}
            onChange={Handler}
            required
            placeholder="Enter your name"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-300 outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={User.email}
            onChange={Handler}
            required
            placeholder="Enter your email"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-300 outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={User.password}
            onChange={Handler}
            required
            placeholder="Create a password"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-300 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-semibold py-3 rounded-full hover:bg-pink-600 transition-all shadow-md"
        >
          Register
        </button>

        <p className="text-center mt-4 text-gray-600 text-sm">
          Already have an account?
          <a href="/login" className="text-pink-600 font-semibold ml-1">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
