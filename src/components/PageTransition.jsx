import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { gsap } from "gsap";

const PageTransition = () => {
  const location = useLocation();

  useEffect(() => {
    animateFromTop();
  }, [location.pathname]);

  const animateFromTop = (onComplete = () => {}) => {
    const tl = gsap.timeline();

    // Reset initial state
    gsap.set(".transition-overlay", { y: "-100%", opacity: 1 });
    gsap.set(".transition-text .letter", { y: 50, opacity: 0, scale: 0.8 });
    gsap.set(".loading-indicator", { opacity: 0, scale: 0 });

    // Overlay slides down
    tl.to(".transition-overlay", {
      duration: 0.8,
      y: "0%",
      ease: "power2.out",
    });

    // Letters animate in with stagger
    tl.fromTo(".transition-text .letter", 
      { y: 50, opacity: 0, scale: 0.8 },
      {
        duration: 0.6,
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "back.out(1.5)",
        stagger: 0.1,
      }, "-=0.4"
    );

    // Show loading indicator
    tl.to(".loading-indicator", {
      duration: 0.4,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
    });

    // Brief hold with loading
    tl.to({}, { duration: 1.5 });

    // Hide loading indicator
    tl.to(".loading-indicator", {
      duration: 0.3,
      opacity: 0,
      scale: 0,
      ease: "power2.in",
    });

    // Letters animate out
    tl.to(".transition-text .letter", {
      duration: 0.5,
      y: -30,
      opacity: 0,
      scale: 0.9,
      ease: "power2.in",
      stagger: 0.08,
    }, "-=0.2");

    // Overlay slides up
    tl.to(".transition-overlay", {
      duration: 0.8,
      y: "100%",
      opacity: 0,
      ease: "power2.in",
      onComplete: onComplete
    }, "-=0.3");
  };

  const letters = ["M", "U", "N", "N", "A"];

  return (
    <div className="transition-overlay fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
         style={{
           background: 'linear-gradient(135deg, #E5E3DC 0%, #D1D5DB 50%, #E5E3DC 100%)',
           boxShadow: 'inset 0 0 100px rgba(191, 74, 26, 0.1)'
         }}>
      <div className="transition-text flex space-x-2 md:space-x-4">
        {letters.map((letter, i) => (
          <span 
            key={i} 
            className="letter inline-block font-bold select-none"
            style={{ 
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              color: (i === 0 || i === 3) ? '#BF4A1A' : '#161616',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              WebkitTextStroke: '1px rgba(255,255,255,0.3)'
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="loading-indicator mt-8 flex flex-col items-center">
        <div className="text-[#161616] text-lg md:text-xl font-medium mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
          Loading
        </div>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-[#BF4A1A] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-[#BF4A1A] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-[#BF4A1A] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;