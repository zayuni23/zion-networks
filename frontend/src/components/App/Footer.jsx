// @ts-nocheck
import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import Motion from "./motion"; // Assuming Motion is your animation component
import WhatsappIcon from "./WhatsappIcon"; // Assuming WhatsappIcon is a component
import logo from "../../assets/images/zionet-logo.png";
import { useInView } from "react-intersection-observer"; // Import for lazy loading

const Footer = () => {
  const { ref: motionRef, inView } = useInView({ triggerOnce: true });

  return (
    <>
      <WhatsappIcon />
      <footer className="bg-gray-800 text-white">
        <div className="w-[85%] container mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Branding Section */}
            <div className="text-center sm:text-left flex flex-col items-center">
              {/* Logo Section */}
              <Motion>
                <Link to="/" className="w-[150px] sm:w-[200px]" ref={motionRef}>
                  <img
                    src={logo}
                    alt="Company Logo"
                      className="w-[150px] sm:w-[200px] cursor-pointer filter invert"
                  />
                </Link>
              </Motion>

              {/* Get Connected Phrase */}
              <Motion>
                <p className="mt-6 max-w-lg text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                  <Link
                    to="/contact"
                    className="hover:text-[#0D874C] text-white text-[18px] transition duration-300 hover:scale-110"
                  >
                    Get Connected!
                  </Link>
                </p>
              </Motion>

              {/* Social Media Icons */}
              <Motion>
                <div className="flex gap-4 justify-center mt-4 w-full p-6">
                  <a
                    href="https://facebook.com/zionnetworks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0D874C] text-white text-[24px] transition transform hover:scale-125"
                    aria-label="Follow us on Facebook"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    href="https://twitter.com/zionnetworks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0D874C] text-white text-[24px] transition transform hover:scale-125"
                    aria-label="Follow us on Twitter"
                  >
                    <BsTwitter />
                  </a>
                  <a
                    href="https://instagram.com/zionnetworks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0D874C] text-white text-[24px] transition transform hover:scale-125"
                    aria-label="Follow us on Instagram"
                  >
                    <BsInstagram />
                  </a>
                </div>
              </Motion>
            </div>

            {/* Navigation Links Section */}
            <div className="text-center sm:text-left">
              <Motion>
                <h2 className="text-[25px]" ref={motionRef}>
                  Quick Links
                </h2>
              </Motion>
              <ul className="mt-8 space-y-4 text-sm">
                <Motion>
                  <li>
                    <Link
                      to="/home"
                      className="hover:text-[#0D874C] text-white transition duration-300"
                      aria-label="Go to Home Page"
                    >
                      Home
                    </Link>
                  </li>
                </Motion>
                <Motion>
                  <li>
                    <Link
                      to="/about"
                      className="hover:text-[#0D874C] text-white transition duration-300"
                      aria-label="Go to About Page"
                    >
                      About
                    </Link>
                  </li>
                </Motion>
                <Motion>
                  <li>
                    <Link
                      to="/careers"
                      className="hover:text-[#0D874C] text-white transition duration-300"
                      aria-label="Go to Careers Page"
                    >
                      Careers
                    </Link>
                  </li>
                </Motion>
                <Motion>
                  <li>
                    <Link
                      to="/contact-us"
                      className="hover:text-[#0D874C] text-white transition duration-300"
                      aria-label="Go to Contact Us Page"
                    >
                      Contact Us
                    </Link>
                  </li>
                </Motion>
              </ul>
            </div>

            {/* Zion Policies Section */}
            <div className="text-center sm:text-left">
              <Motion>
                <h2 className="text-[25px]" ref={motionRef}>
                  ZION Policies
                </h2>
              </Motion>
              <ul className="mt-8 space-y-4 text-sm">
                <Motion>
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="hover:text-[#0D874C] text-white transition duration-300"
                      aria-label="Go to Privacy Policy Page"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </Motion>
                <Motion>
                  <li>
                    <Link
                      to="/use-case-policy"
                      className="hover:text-[#0D874C] text-white transition duration-300"
                      aria-label="Go to Use Case Policy Page"
                    >
                      Use Case Policy
                    </Link>
                  </li>
                </Motion>
                <Motion>
                  <li>
                    <Link
                      to="/terms-conditions"
                      className="hover:text-[#0D874C] text-white transition duration-300"
                      aria-label="Go to Terms and Conditions Page"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </Motion>
              </ul>
            </div>

            {/* Contact Zion Section */}
            <div className="text-center sm:text-left">
              <Motion>
                <h2 className="text-[25px]" ref={motionRef}>
                  Contact Zion
                </h2>
              </Motion>
              <ul className="mt-8 space-y-4 text-sm">
                <Motion>
                  <li>
                    <a
                      href="mailto:intertechzion@gmail.com"
                      className="hover:text-[#0D874C] text-white transition duration-300"
                      aria-label="Send an email to Zion at intertechzion@gmail.com"
                    >
                      intertechzion@gmail.com
                    </a>
                  </li>
                </Motion>
                <Motion>
                  <li>
                    <a
                      href="tel:+254769677143"
                      className="hover:text-[#0D874C] text-white transition duration-300"
                      aria-label="Call Zion at +254769677143"
                    >
                      +254769677143
                    </a>
                  </li>
                </Motion>
                <Motion>
                  <li>
                    <a
                      href="tel:+254756881148"
                      className="hover:text-[#0D874C] text-white transition duration-300"
                      aria-label="Call Zion at +254756881148"
                    >
                      +254756881148
                    </a>
                  </li>
                </Motion>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="bg-gray-900 text-center text-white py-4 mt-12">
            <Motion>
              <span className="text-sm">
                All Rights Reserved | Copyright 2024 &copy; ZionGeneralsPLC
              </span>
            </Motion>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
