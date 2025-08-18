import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import Image from "../assets/agri1.jpg";
import Image1 from "../assets/agri1212.png";
import logo from "../assets/logo1.png"
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div> 
      <img
        src={Image}
        alt="Illustration"
        className="absolute top-0 left-0 w-[105%] h-full object-cover blur-[2px] brightness-70"
      />

      <div
        className="flex min-h-[calc(100vh-180px)] relative justify-end 
             w-[calc(100%-160px)] max-[640px]:w-[calc(100%-85px)] 
             mx-[30px] mt-25 rounded-xl"
        
      >
       


        {/* Left Illustration */}
        <img
          src={Image1}
          alt="Illustration"
          className="absolute top-0 left-25 w-[80%] h-135 object-cover rounded-l-[2.5rem] 
          hidden sm:block md:w-[70%] lg:w-[75%] xl:w-[80%]"
        />

        {/* Right Login Form */}
        
          <div
            className="flex justify-center items-center p-2 sm:p-4 bg-[#003501] rounded-l-[2.5rem] 
            relative z-10 w-[95%] sm:w-[70%] md:w-[60%] lg:w-[40%] min-h-[100%] 
            absolute right-[5px] sm:right-auto"
            style={{ boxShadow: "-15px 0 40px rgba(0,0,0,0.4)" }}
          >


          <div className="w-full max-w-sm">
            {/* Logo */}
            <div className="flex justify-center mt-3 mb-3">
              <img className="w-30" src={logo} alt="yegnafarm logo" />
            </div>

            {/* Heading */}
            <div className="text-center">
              <h2 className="text-xl md:text-xl text-white font-semibold">
                Welcome to YegnaFarm!
              </h2>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4 p-6">
              <input
                required
                type="name"
                placeholder="Full Name"
                className="w-full border-b border-white pb-1.5 focus:outline-none text-base text-white bg-transparent"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full border-b border-white pb-1.5 focus:outline-none text-base text-white bg-transparent"
              />
              <input
                required
                type="phone"
                placeholder="Phone No."
                className="w-full border-b border-white pb-1.5 focus:outline-none text-base text-white bg-transparent"
              />
              <input
                required
                type="text"
                placeholder="Location"
                className="w-full border-b border-white pb-1.5 focus:outline-none text-base text-white bg-transparent"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border-b border-white pb-1.5 focus:outline-none text-base text-white bg-transparent"
                />
                {showPassword ? (
                  <FaEyeSlash
                    className="absolute right-2 bottom-1.5 cursor-pointer text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEye
                    className="absolute right-2 bottom-1.5 cursor-pointer text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 mt-2">
                <button className="w-full py-2 bg-gray-100 text-black rounded-full font-semibold hover:bg-[#a2c954] transition">
                  Sign Up
                </button>
                <button className="w-full py-2.5 bg-gray-100 flex items-center justify-center gap-2 rounded-full hover:bg-[#a2c954] transition text-sm">
                  <img src={GoogleSvg} alt="Google" className="w-5" />
                  Sign Up with Google
                </button>
              </div>
            </form>

            {/* Bottom Text */}
            <p className="text-center text-sm text-white">
              Have an account?{" "}
              <Link to="/login" className="font-semibold hover:underline hover:text-[#a2c954]">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
