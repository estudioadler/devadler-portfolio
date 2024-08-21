"use client";
import React, { useEffect, useState } from 'react';

export const  Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Ajuste o tempo de carregamento conforme necessário

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-neutral-900 fixed top-0 left-0 right-0 bottom-0 z-50 w-screen h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return null;
}