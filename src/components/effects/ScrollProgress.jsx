import { useEffect, useRef, useState , React } from "react";

const ScrollProgress = () => {
    
    const circleRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const radius = 10;
    const circumference = 2 * Math.PI * radius;

    const updateProgress = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const scrollableHeight = docHeight - windowHeight;

  const scrollPercent =
    scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

  setProgress(scrollPercent);
};


    useEffect(() => {
        const circle = circleRef.current;
        if (circle) {
          circle.style.strokeDasharray = circumference;
          circle.style.strokeDashoffset = circumference;
        }

        window.addEventListener("scroll", updateProgress);
        updateProgress();

        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

  // Stroke offset based on scroll progress
  const strokeOffset = circumference - (progress / 100) * circumference;
  return (
    <>
        <div className="fixed bottom-0 right-5 -translate-y-1/2 bg-black/40 backdrop-blur-md rounded-[40px] px-5 py-3 flex items-center gap-4 cursor-pointer z-[1000]" style={{backdropFilter: 'blur(10px)'}}>
            <div className="w-6 h-6 relative">
                <svg viewBox="0 0 24 24" className="absolute top-0 left-0 w-full h-full -rotate-90" >
                    <circle cx="12" cy="12" r="10" className="fill-none stroke-[#ffffffa6] stroke-[2]"/>
                    <circle ref={circleRef} cx="12" cy="12" r="10" className="fill-none stroke-[#BF4A1A] stroke-[2] stroke-linecap-round transition-[stroke-dashoffset] duration-300 ease-in-out" style={{ strokeDasharray: circumference, strokeDashoffset: strokeOffset, }}/>
                </svg>
            </div>
            {/* -------------- Percentage ---------------- */}
            <div className="text-white font-manrope">{Math.round(progress)}%</div>
        </div>

    </>
  )
}

export default ScrollProgress