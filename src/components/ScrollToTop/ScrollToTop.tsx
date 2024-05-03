'use client'
import { ArrowUp01Icon } from "hugeicons-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toogleVisible = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
      window.addEventListener('scroll', toogleVisible)
      return () => {
        window.removeEventListener('scroll', toogleVisible)
      }
    }, [])
  return (
    <>
    {
      isVisible && (
        <div onClick={() => handleScrollToTop()} className="cursor-pointer fixed bottom-8 right-8 text-neutral-900 outline outline-1 outline-neutral-300 hover:outline-neutral-400 p-5 rounded-full">
          <ArrowUp01Icon className="size-4" />
        </div>
      )
    }
    </>
  )
};
