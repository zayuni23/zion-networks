// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Cta3 from "../../assets/images/cta3.png";
import Cta4 from "../../assets/images/cta4.png";
import background from "../../assets/images/cta-bg-img-1.jpg";
import { Link, useNavigate } from "react-router-dom";

// MotionWrapper component for wrapping animations
const MotionWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const Cta = () => {
  const navigate = useNavigate();

  const handleGetConnected = () => {
    // Redirect to the request form
    navigate("/request-for-internet");
  };

  return (
    <div className="container mx-auto flex items-center justify-center px-4 lg:px-8">
      <section
        className="relative bg-no-repeat bg-cover bg-center w-full sm:h-[90vh] h-[80vh] rounded-lg shadow-lg overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center text-white p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
            {/* Left Side - Image */}
            <div className="md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
              <img
                alt="Bundled Internet Service"
                src={Cta3}
                className="w-2/3 md:w-3/4 object-contain transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <MotionWrapper>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Save Money By Bundling Your Internet Service
                </h2>
              </MotionWrapper>

              <MotionWrapper>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  When choosing among the best high-speed Internet providers,
                  consider factors beyond download speeds, such as pricing and
                  service quality.
                </p>
              </MotionWrapper>

              <MotionWrapper>
                <span className="text-xl md:text-2xl font-bold text-yellow-400">
                  Kshs: 2500/Month
                </span>
              </MotionWrapper>

              <MotionWrapper>
                <button
                  onClick={handleGetConnected}
                  className="bg-green-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-800 transition-all transform hover:scale-105"
                >
                  Get Connected
                </button>
              </MotionWrapper>
            </div>
          </div>

          {/* Right Decoration Image */}
          <MotionWrapper>
            <img
              src={Cta4}
              alt="Additional Decoration"
              className="absolute -right-4 bottom-0 h-40 w-auto object-contain transform transition-all duration-500 hover:scale-110"
              loading="lazy"
            />
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
};

export default Cta;
