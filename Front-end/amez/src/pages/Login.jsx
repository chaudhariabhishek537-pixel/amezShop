import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const Handler = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    if (!User.email || !User.password) {
      alert("Please fill all fields");
      return;
    }

    axios
      .post("http://localhost:8080/login", User)
      .then((res) => {
        console.log(res.data);
        if (res.data === true) {
          alert("Login Successful!");
        } else {
          alert("Invalid email or password.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in. Check server.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      <form
        onSubmit={SubmitForm}
        className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md border border-pink-100"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          name="email"
          value={User.email}
          onChange={Handler}
          placeholder="Enter your email"
          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-pink-300 outline-none"
        />

        <input
          type="password"
          name="password"
          value={User.password}
          onChange={Handler}
          placeholder="Enter your password"
          className="w-full p-3 border rounded-lg mb-6 focus:ring-2 focus:ring-pink-300 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-all shadow-md"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4 text-gray-600">
          Don't have an account?
          <a href="/signup" className="text-pink-600 font-semibold ml-1">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
