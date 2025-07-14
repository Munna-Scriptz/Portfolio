import React, { useRef, useEffect } from 'react';
import Logo from "../assets/images/Logo.png"
import { Link } from 'react-router'
import { LuDot } from "react-icons/lu";
// ---------Gsap Imports 
import { gsap } from "gsap";

export const Navbar = () => {

// --------------Logo Move
  const LogoMove = useRef(null);
  const InnerMove = useRef(null);

  const param = {
    duration: 0.5,
    ease: 'Power2.easeOut'
  };

  const handleMouseMove = (e) => {
    const circle = InnerMove.current;
    const rect = circle.getBoundingClientRect();
    const s = e.clientX - rect.left;
    const o = e.clientY - rect.top;

    gsap.to(circle, {
      duration: param.duration,
      x: ((s - circle.clientWidth / 2) / circle.clientWidth) * 30,
      y: ((o - circle.clientHeight / 2) / circle.clientHeight) * 30,
      scale: 1.1,
      ease: param.ease,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(InnerMove.current, {
      duration: param.duration,
      x: 0,
      y: 0,
      scale: 1,
      ease: param.ease,
    });
  };

//   ----------Button Move 
  const btnRef = useRef(null);

  const param2 = {
    duration: 0.3,
    ease: 'Power2.easeOut',
  };

  const HandleContactHover = (e) => {
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

  const HandleContactLeave = () => {
    gsap.to(btnRef.current, {
      duration: param2.duration,
      x: 0,
      y: 0,
      scale: 1,
      ease: param2.ease,
    });
  };

  return (
    <>
        <nav className='py-5 overflow-hidden'>
            <div className="container">
                <div id='NavRow' className='flex items-center justify-between'>
                    {/* ----Logo---- */}
                    <Link to={'/'} className='w-[60px]' ref={LogoMove} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <img src={Logo} alt="Logo" className='circle'  ref={InnerMove}/>
                    </Link>
                    {/* ----NavLinks---- */}
                    <div>
                        <ul className='font-soldier flex items-center gap-3 text-2xl text-Primary'>
                            <li><Link to={'/'} className='flex items-center NavLinks'>HOME<LuDot/></Link></li>
                            <li><Link to={'/'} className='flex items-center NavLinks'>ABOUT<LuDot/></Link></li>
                            <li><Link to={'/'} className='flex items-center NavLinks'>PROJECTS<LuDot/></Link></li>
                            <li><Link to={'/'} className='flex items-center NavLinks'>CONTACT<LuDot/></Link></li>
                        </ul>
                    </div>
                    {/* ----Button---- */}
                    <div ref={btnRef} className="magnetic-btn" onMouseMove={HandleContactHover} onMouseLeave={HandleContactLeave}>
                        <Link className='ContactButton font-poppins font-medium text-base text-Primary'>CONTACT</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
