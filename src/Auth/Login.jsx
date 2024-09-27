import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/action/user";
import { motion } from "framer-motion";
import image from '../assets/boy.png'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 lg:flex-row bg-gradient-to-br from-blue-400 to-green-500 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center mb-8 lg:w-1/2 lg:mb-0"
      >
        <img
          src={image}
          alt="Cartoon boy with smiling tooth"
          className="max-w-xs rounded-lg shadow-xl lg:max-w-sm"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-10 space-y-8 bg-white shadow-2xl lg:w-1/2 rounded-xl"
      >
        <div>
          <h1 className="mb-2 text-3xl font-extrabold text-center text-gray-900">
            Welcome to
          </h1>
          <h2 className="mb-6 text-4xl font-extrabold text-center text-green-600">
            Dental Clinic Hub
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Your gateway to exceptional dental care
          </p>
        </div>

        <form onSubmit={submitHandler} className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                required
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                required
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**********"
                className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgetpassword"
                className="font-medium text-green-600 transition duration-150 ease-in-out hover:text-green-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign in
            </motion.button>
          </div>
        </form>

        <p className="mt-2 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium text-green-600 transition duration-150 ease-in-out hover:text-green-500">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}