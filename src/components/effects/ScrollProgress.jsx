import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link to="top" smooth={true} duration={500} className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-center group animate-float">
      <div
        className="relative w-14 h-20 md:w-16 md:h-24 rounded-xl md:rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden cursor-pointer shadow-2xl transition-transform active:scale-95"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {/* The Fill Layer */}
        <div
          className="absolute bottom-0 left-0 w-full bg-[#BF4A1A] transition-all duration-700 ease-out shadow-[0_-5px_20px_#BF4A1A]"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Responsive Icons & Text */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-1 md:gap-2">
          <svg
            className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-500 ${scrollProgress > 75 ? 'text-white' : 'text-[#BF4A1A]'}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>

          <span className={`text-[10px] md:text-xs font-black transition-colors duration-500 ${scrollProgress > 35 ? 'text-white' : 'text-[#BF4A1A]'}`}>
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>

      <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
    /* Disable float on very small screens if it feels too jumpy */
    @media (max-width: 640px) {
      .animate-float { animation: none; }
    }
  `}</style>
    </Link>
  );
};

export default ScrollProgress;