"use client";

import { useState, useEffect } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-0 right-0 z-50">
      {isVisible && (
        <button
          className="flex flex-col m-3 lg:m-5 p-2.5 rounded-xl bg-gray-200/80 hover:bg-white/90 backdrop-blur-xs text-2xl md::text-4xl font-bold transition duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <MdOutlineArrowUpward />
        </button>
      )}
    </div>
  );
}
