"use client";
import React, { useEffect, useState } from 'react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const loadingTime = 2000; // 3 segundos

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, loadingTime);

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, loadingTime / 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 w-full h-screen flex flex-col items-center justify-center bg-background">
        <div className="mb-1">@devadler</div>
        <div className="w-20 h-px bg-primary-foreground rounded-full">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  }

  return null;
}

