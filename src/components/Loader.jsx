import React, { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const Loader = () => {
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.add("scroll-hide");

    const progressBar = document.getElementById("progress-bar");

    function updateProgressBar(progress) {
      if (progressBar) progressBar.style.width = progress + "%";
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      updateProgressBar(progress);

      if (progress === 100) {
        clearInterval(interval);

        setTimeout(() => {
          const loaderText = document.querySelectorAll(".loader-text h3");
          loaderText.forEach((text) => {
            const loaderSingleText = new SplitType(text, { types: "chars" });
            gsap.from(loaderSingleText.chars, {
              opacity: 0,
              x: 50,
              duration: 0.5,
              stagger: 0.1,
              delay: 0.8,
            });
          });

          gsap.to(".progress-wrapper", {
            scale: 1.5,
            opacity: 0,
            duration: 1.2,
            ease: "power3.inOut",
            delay: 0.2,
          });

          gsap.to(".revealer", {
            top: "0%",
            duration: 2.2,
            ease: "power3.inOut",
            delay: 1,
          });

          gsap.to(".loader", {
            yPercent: -100,
            duration: 1,
            ease: "power3.inOut",
            delay: 1.0,
          });

          setTimeout(() => {
            html.classList.remove("scroll-hide");
          }, 2600);
        }, 500);
      }
    }, 20); // smoother than 0ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      <div className="revealer"></div>
      <div className="loader-text-wrapper">
        <div className="loader-text">
          <h3>MUNNA</h3>
        </div>
      </div>
      <div className="progress-wrapper">
        <div className="progress-line-wrapper">
          <span className="progress-line" id="progress-bar"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
