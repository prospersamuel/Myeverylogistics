import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom'; // Corrected import for routing
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa"; // Eye icons for password toggle

// Popup Component
const Popup = ({ closePopup }) => (
  <div className="popup-overlay fixed transition-all top-0 left-0 right-0 bottom-0 bg-slate-50 flex items-center justify-center z-50">
    <div className="popup-content bg-white p-8 max-w-md flex flex-col items-center justify-center rounded-lg shadow-lg text-center text-gray-700 font-bold text-lg">
      <FaCheckCircle className="text-green-500 text-6xl" />
      <h2>Success!</h2>
      <p className='text-gray-700 font-bold'>You have logged in successfully.</p>
      <button onClick={closePopup} className="popup-close-btn bg-[#ef3e53] text-white border-none py-2 px-4 cursor-pointer rounded-md mt-6">Close</button>
    </div>
  </div>
);

const Login = () => {
  const [isEmailLogin, setIsEmailLogin] = useState(false); // Track whether email or phone login is selected
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to manage popup visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleLoginMethod = () => {
    setIsEmailLogin(!isEmailLogin); // Toggle between email and phone number login
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form reload
    setIsPopupVisible(true); // Show popup
  };

  const closePopup = () => {
    setIsPopupVisible(false); // Close popup
  };

  return (
    <div className="signup-overlay flex items-top justify-center min-h-[500px] bg-white sm:items-center sm:pt-0">
      <div className="signup-content max-w-4xl mx-auto sm:px-6 lg:px-8">

        {/* Show popup if isPopupVisible is true */}
        {isPopupVisible && <Popup closePopup={closePopup} />}

        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side */}
            <div className="p-4 mr-2 bg-gray-50 sm:rounded-lg flex flex-col justify-center border-4">
              {/* Header section */}
              <h1 className="text-2xl sm:text-4xl text-[#330065] text-center font-extrabold tracking-tight">
                Login Using These Methods
              </h1>

              {/* Sign in options - Google or Email */}
              <div className="mt-6 text-center">
                <button
                  className="flex items-center justify-center gap-5 w-full py-2 px-4 border-2 bg-white text-gray-600 font-bold rounded-lg mt-4 hover:bg-gray-50"
                >
                  <img src="/src/assets/google.png" alt="google" width={40} />
                  Login with Google
                </button>

                <div className="my-4 flex items-center justify-center gap-1">
                  <div className="w-[25%] border-2"></div>
                  <span className="text-md font-semibold w-[50%] text-center text-gray-500">
                    Or Continue with
                  </span>
                  <div className="w-[25%] border-2"></div>
                </div>

                <button
                  onClick={handleToggleLoginMethod} // Toggle between email and phone login
                  className="flex items-center justify-center gap-5 w-full py-2 px-4 border-2 bg-white text-gray-600 font-bold rounded-lg mt-4 hover:bg-gray-50"
                >
                  <img src="/src/assets/email.png" alt="Email" width={40} />
                  {isEmailLogin ? "Login with Phone Number" : "Login with Email"}
                </button>
              </div>
            </div>

            {/* Right side: Login form */}
            <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
              {/* Conditional rendering for phone number or email input */}
              {!isEmailLogin ? (
                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    required
                    type="tel"
                    id="tel"
                    placeholder="Phone Number"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                </div>
              ) : (
                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                </div>
              )}

              {/* Password input */}
              <div className="flex flex-col mt-2">
                <label htmlFor="password" className="hidden">
                  Password
                </label>
                <div className="relative">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none pr-10"
                  />
                  <div
                    className="absolute top-1/2 mt-1 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-600" />
                    ) : (
                      <FaEye className="text-gray-600" />
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-[#EF3E53] hover:bg-[#e44659] 
                            focus:ring-4 focus:ring-[#330065] font-medium 
                            rounded-lg text-sm px-4  py-4  mt-3 focus:outline-none shadow-md"
              >
                Submit
              </button>

              <p className="text-md font-semibold w-full text-center mt-3 text-gray-500">
                Don't have an Account?{" "}
                <Link to="/Signup" className="text-[#ef3e53] font-semibold">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
