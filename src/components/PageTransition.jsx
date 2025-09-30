// Transition.jsx
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

    tl.to(".from-top .tile", {
      duration: 1,
      height: "100%",
      top: "0%",
      delay: 0.2,
      stagger: 0.05,
    });
    tl.to(".from-top .tile", {
      duration: 1,
      height: "100%",
      top: "100%",
      delay: 0.2,
      stagger: -0.05,
    });
    tl.set(".from-top .tile", { top: "0", height: "0" });
  };

  return (
    <div className="transition-container from-top">
      {[...Array(6)].map((_, i) => (
        <span className="tile" key={i}></span>
      ))}
    </div>
  );
};

export default PageTransition;
