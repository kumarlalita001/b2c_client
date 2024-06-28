import React, { useState, useEffect } from "react";
import { ChevronUp } from "react-feather";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Effect to add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run this effect only once when component mounts

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scroll behavior
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-[1rem] right-5 bg-blue-900 text-gold px-4 py-2 rounded-xl shadow-3xl hover:bg-gold hover:text-white transition duration-200 z-50 hidden lg:block md:block"
          onClick={scrollToTop}
        >
        <ChevronUp/>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
