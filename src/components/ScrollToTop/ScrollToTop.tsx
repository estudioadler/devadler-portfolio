"use client";
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toogleVisible = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toogleVisible);
    return () => {
      window.removeEventListener("scroll", toogleVisible);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <button
          onClick={() => handleScrollToTop()}
          className="fixed bottom-6 right-6 lg:bottom-12 lg:right-16 bg-background border border-text-primary group inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full"
        >
          <div className="translate-y-0 transition duration-200 group-hover:-translate-y-[300px]">
            <ArrowUp size={20} />
          </div>
          <div className="absolute translate-y-[300px] transition duration-200 group-hover:translate-y-0">
            <ArrowUp size={20} />
          </div>
        </button>
      )}
    </>
  );
};

