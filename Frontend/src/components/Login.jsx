import React, { useState } from "react"; 
import {Link} from "react-router-dom";
import Image from "../assets/loginimg.jpg";
import logo from "../assets/logo1.png"
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
<div className="flex min-h-screen relative justify-end">
  
    <img
      src={Image}
      alt="Illustration"
      className="absolute top-0 left-0 w-[105%] blur-[3px] h-full object-cover brightness-75"
    />
  

  {/* Right Login Form */}
  <div className="w-full md:w-170 flex justify-center items-center p-6 bg-[#003501]  rounded-l-[3rem] relative z-10 " style={{ boxShadow: '-10px 0 20px rgba(0,0,0,0.3)' }}>
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="flex justify-center mb-10">
        <img className="w-60" src={logo} alt="yegnafarm logo" />
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl text-white font-semibold mb-2">Welcome back to YegnaFarm!</h2>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border-b border-white pb-2 focus:outline-none text-lg text-white"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border-b border-white pb-2 focus:outline-none text-lg text-white"
          />
          {showPassword ? (
            <FaEyeSlash
              className="absolute right-2 bottom-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <FaEye
              className="absolute right-2 bottom-2 cursor-pointer text-white"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}

          <a 
            href="#" 
            className="absolute right-0 mt-14 text-sm text-white hover:text-[#a2c954] hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-14">
          <button className="w-full py-3 bg-gray-100 text-black rounded-full font-semibold hover:bg-[#a2c954] transition">
            Log In
          </button>
          <button className="w-full py-3 bg-gray-100 flex items-center justify-center gap-3 rounded-full hover:bg-[#a2c954] transition">
            <img src={GoogleSvg} alt="Google" className="w-6" />
            Log In with Google
          </button>
        </div>
      </form>

      {/* Bottom Text */}
      <p className="text-center text-base mt-8 text-white">
        Don't have an account? 
        <Link to="/signup" className="font-semibold hover:underline hover:text-[#a2c954]">
          Sign Up
        </Link>
      </p>
    </div>
  </div>
</div>


  );
};

export default Login;
