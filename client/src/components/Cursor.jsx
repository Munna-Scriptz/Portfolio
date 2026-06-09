import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const bigRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const big = bigRef.current;
    const dot = dotRef.current;
    const hoverEls = document.querySelectorAll(".hover-this");
    const brownEls = document.querySelectorAll(".hover-brown");
    const links = document.querySelectorAll("a");

    const moveCursor = (e) => {
      // 👇 Small dot moves fast (tight follow)
      gsap.to(dot, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
        ease: "power3.out",
      });

      // 👇 Big circle lags slightly behind
      gsap.to(big, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: "power3.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(big, {
        duration: 0.3,
        scale: 2,
        ease: "power3.out",
        mixBlendMode: "difference",
        background: "white",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(big, {
        duration: 0.3,
        scale: 1,
        ease: "power3.out",
        mixBlendMode: "normal",
        background: "transparent",
      });
    };

    const handleBrownEnter = () => {
      gsap.to(big, {
        duration: 0.3,
        scale: 1.5,
        ease: "power3.out",
        borderColor: "#BF4A1A",
        background: "transparent",
      });
    };

    const handleBrownLeave = () => {
      gsap.to(big, {
        duration: 0.3,
        scale: 1,
        ease: "power3.out",
        borderColor: "#adadace3",
        background: "transparent",
      });
    };

    const handleMouseDown = () => {
      gsap.to(big, { scale: 0.7, duration: 0.15, ease: "power3.out" });
      gsap.to(dot, { scale: 0.5, duration: 0.1 });
    };

    const handleMouseUp = () => {
      gsap.to(big, { scale: 1, duration: 0.25, ease: "power3.out" });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    const handleLinkClick = () => {
      document.body.style.cursor = "default";
      big.style.opacity = "0";
      dot.style.opacity = "0";

      setTimeout(() => {
        document.body.style.cursor = "none";
        big.style.opacity = "1";
        dot.style.opacity = "1";
      }, 600);
    };

    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    brownEls.forEach((el) => {
      el.addEventListener("mouseenter", handleBrownEnter);
      el.addEventListener("mouseleave", handleBrownLeave);
    });

    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    window.addEventListener("pageshow", () => {
      document.body.style.cursor = "none";
      big.style.opacity = "1";
      dot.style.opacity = "1";
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* 🔵 Big lagging circle */}
      <div
        ref={bigRef}
        className="fixed md:inline-block hidden pointer-events-none rounded-full bg-transparent border border-[#222831a8] z-[9999] transition-transform duration-300 ease-out"
        style={{
          width: 40,
          height: 40,
          transform: "translate(-50%, -50%) scale(1)",
        }}
      ></div>

      {/* ⚪ Fast chasing dot */}
      <div
        ref={dotRef}
        className="fixed md:inline-block hidden pointer-events-none z-[10000] rounded-full bg-[#BF4A1A]"
        style={{
          width: 7,
          height: 7,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  );
};

export default Cursor;


