import React, { useEffect } from "react";
import { gsap } from "gsap";

const PageTransition = () => {
  useEffect(() => {
    const triggers = document.querySelectorAll(".transition-trigger");

    triggers.forEach((btn) => {
      btn.addEventListener("click", animateFromTop);
    });

    return () => {
      triggers.forEach((btn) => {
        btn.removeEventListener("click", animateFromTop);
      });
    };
  }, []);

  const animateFromTop = () => {
    let tl = gsap.timeline({ ease: "power4.inOut" });

    // Tiles slide down with letters
    tl.to(".from-top .tile", {
      duration: 1,
      height: "100%",
      top: "0%",
      delay: 0.2,
      stagger: 0.05,
    });
    
    // Letters scale and rotate in
    tl.from(".from-top .tile", {
      duration: 0.8,
      scale: 0,
      rotation: 360,
      ease: "back.out(2)",
      stagger: 0.05,
    }, "-=0.8");
    
    // Letters pulse effect
    tl.to(".from-top .tile", {
      duration: 0.3,
      scale: 1.1,
      ease: "power2.inOut",
      stagger: 0.05,
    });
    
    tl.to(".from-top .tile", {
      duration: 0.3,
      scale: 1,
      ease: "power2.inOut",
      stagger: 0.05,
    });
    
    // Tiles and letters slide up
    tl.to(".from-top .tile", {
      duration: 1,
      height: "100%",
      top: "100%",
      delay: 0.2,
      stagger: -0.05,
    });
    
    // Letters fade and rotate out
    tl.to(".from-top .tile", {
      duration: 0.6,
      rotation: -180,
      opacity: 0,
      ease: "power2.in",
      stagger: -0.05,
    }, "-=0.8");
    
    tl.set(".from-top .tile", { top: "0", height: "0", rotation: 0, opacity: 1, scale: 1 });
  };

  const letters = ["L", "O", "A", "D", "I", "N"];

  return (
    <div className="from-top fixed inset-0 flex w-full h-full z-10 pointer-events-none [&>span]:relative [&>span]:w-full [&>span]:h-0 bg-transparent [&>span]:overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="bg-[#161616] tile flex items-center justify-center text-white text-6xl md:text-8xl font-bold">
          {letters[i]}
        </span>
      ))}
    </div>
  );
};

export default PageTransition;