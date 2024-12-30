// @ts-nocheck
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// Importing the animate.css file into your project
import "animate.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check visibility on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-green-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:bg-[#0D874C] focus:outline-none focus:ring-2 focus:ring-[#0D874C]  animate-pulse hover:scale-110"
          aria-label="Back to top"
        >
          <AiOutlineArrowUp size={30} />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
