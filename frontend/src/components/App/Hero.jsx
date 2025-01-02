// @ts-nocheck

import React, { useState } from "react";
import { FaPlay, FaWifi } from "react-icons/fa";
import background from "../../assets/images/icconnecthome.webp";
import { Link } from "react-router-dom";
import Motion from "./motion";

const Hero = () => {
  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[100vh] flex items-center justify-center bg-cover bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-10">
          {/* Content Section */}
          <div className="flex flex-col items-center text-center text-white space-y-4 px-6 md:w-3/4">
            {/* Internet Access Section with Animation */}
            <Motion>
              <div className="flex items-center justify-center mb-4 animate__animated animate__fadeIn">
                <FaWifi size={30} className="text-green-400 mr-3" />
                <p className="text-xl md:text-2xl font-bold font-mono">
                  Affordable & Reliable Internet Services
                </p>
              </div>
            </Motion>

            {/* Title Section */}
            <Motion>
              <h2 className="capitalize text-4xl sm:text-5xl font-extrabold animate__animated animate__fadeIn">
                Seamless Connectivity for All Your Internet Needs
              </h2>
            </Motion>

            {/* Description Section */}
            <Motion>
              <h4 className="text-lg md:text-xl mt-4 animate__animated animate__fadeIn">
                Enjoy uninterrupted streaming, work, and play with our
                high-speed, affordable internet packages. Tailored for both home
                and office use.
              </h4>
            </Motion>

            {/* Pricing Section */}
            <Motion>
              <h2 className="text-green-400 text-3xl sm:text-4xl font-semibold mt-5 animate__animated animate__fadeIn">
                Only Ksh 2500<span className="text-white">/month</span>
              </h2>
            </Motion>

            {/* Call to Action Buttons */}
            <div className="flex gap-6 mt-4 justify-center items-center">
              {/* Get Started Now Button */}
              <Motion>
                <Link to="/packages" className="no-underline">
                  <h4 className="bg-white text-green-800 font-bold py-3 px-8 rounded-md border-none hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out">
                    GET STARTED NOW
                  </h4>
                </Link>
              </Motion>

              {/* Watch Our Video Button */}
              <Motion>
                <p
                  className="flex justify-center items-center bg-[#0D874C]/70 text-white py-3 px-6 rounded-md cursor-pointer hover:bg-white hover:text-[#0D874C]/70 transition-all duration-300 ease-in-out"
                  onClick={() => setVideoPopUp(true)}
                >
                  <FaPlay className="mr-2" />
                  Watch Our Video
                </p>
              </Motion>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {isVideoPoppedUp && (
        <div className="fixed inset-0 flex items-center justify-center z-[2000] bg-black/50">
          {/* Close button */}
          <div
            className="absolute top-5 right-5 w-10 h-10 flex justify-center items-center bg-[#0D874C]/70 text-white rounded-full cursor-pointer hover:bg-[#0D874C] transition-all duration-200"
            onClick={() => setVideoPopUp(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </div>

          {/* Video Player */}
          <div className="relative w-full max-w-2xl px-6">
            <video className="w-full rounded-lg shadow-lg" controls autoPlay>
              <source
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/FloatUI.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
