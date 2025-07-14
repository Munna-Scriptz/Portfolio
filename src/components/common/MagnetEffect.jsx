import React, { useRef, useEffect } from 'react';

import { gsap } from "gsap";

const MagnetEffect = () => {

    const btnRef = useRef(null);
    
      const param2 = {
        duration: 0.3,
        ease: 'Power2.easeOut',
      };
    
      const handleHover = (e) => {
        const btn = btnRef.current;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        const offsetX = ((x - rect.width / 2) / rect.width) * 20;
        const offsetY = ((y - rect.height / 2) / rect.height) * 20;
    
        gsap.to(btn, {
          duration: param2.duration,
          x: offsetX,
          y: offsetY,
          scale: 1,
          ease: param2.ease,
        });
      };
    
      const handleLeave = () => {
        gsap.to(btnRef.current, {
          duration: param2.duration,
          x: 0,
          y: 0,
          scale: 1,
          ease: param2.ease,
        });
      };

  return {
    ref: btnRef,
    onMouseMove: handleHover,
    onMouseLeave: handleLeave,

  }
}

export default MagnetEffect