import React, { useRef, useEffect } from 'react';
import Logo from "../assets/images/Logo.png"
import { Link } from 'react-router'
import { LuDot } from "react-icons/lu";

export const Navbar = () => {

    const btnRef = useRef(null);
  let rafId;

  useEffect(() => {
    const btn = btnRef.current;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = Math.max(Math.min(e.clientX - rect.left - rect.width / 2, 50), -50);
      const y = Math.max(Math.min(e.clientY - rect.top - rect.height / 2, 50), -50);

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        btn.style.transform = `translate(${x * 3}px, ${y * 3}px)`;
      });
    };

    const handleMouseLeave = () => {
      btn.style.transform = 'translate(0, 0)';
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);


  return (
    <>
        <nav className='py-5 overflow-hidden'>
            <div className="container">
                <div id='NavRow' className='flex items-center justify-between'>
                    {/* ----Logo---- */}
                    <Link to={'/'} className='w-[60px]'>
                        <img src={Logo} alt="Logo" />
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
                    <div>
                        <Link ref={btnRef} className='ContactButton magnetic-btn font-poppins font-medium text-base text-Primary'>CONTACT</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
