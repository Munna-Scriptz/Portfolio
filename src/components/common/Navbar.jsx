import React from 'react';
import Logo from "../../assets/images/Logo.png"
import { Link } from 'react-router'
import { LuDot } from "react-icons/lu";
import Magnet from '../effects/Magnet';

export const Navbar = () => {
  
  return (
    <>
        <nav className='py-5 hidden lg:block'>
            <div className="container">
                <div id='NavRow' className='flex items-center justify-between'>
                    {/* ----Logo---- */}
                    <Magnet padding={40}>
                      <Link to={'/'} className='hover-this' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1200" data-aos-easing="ease-in-sine">
                        <img className='w-[60px] transition-trigger' src={Logo} alt="Logo"/>
                      </Link>
                    </Magnet>
                    {/* ----NavLinks---- */}
                    <div>
                      <ul className='font-soldier flex items-center gap-6 text-2xl text-Primary'>
                        <li data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1200" data-aos-easing="ease-in-sine"><Link to={'/'} className={`flex items-center NavLinks hover-brown transition-trigger`}>HOME<LuDot/></Link></li>
                        <li data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1500" data-aos-easing="ease-in-sine"><Link to={'/about'} className='flex items-center NavLinks hover-brown transition-trigger'>ABOUT<LuDot/></Link></li>
                        <li data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1800" data-aos-easing="ease-in-sine"><Link to={'/projects'} className='flex items-center NavLinks hover-brown transition-trigger'>PROJECTS<LuDot/></Link></li>
                        <li data-aos="fade-down" data-aos-duration="1500" data-aos-delay="2100" data-aos-easing="ease-in-sine"><Link to={'/contact'} className='flex items-center NavLinks hover-brown transition-trigger'>CONTACT<LuDot/></Link></li>
                      </ul>
                    </div>
                    {/* ----Button---- */}
                    <Magnet magnetStrength={4}>
                      <div className="magnetic-btn" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="1200" data-aos-easing="ease-in-sine">
                        <Link to={'/contact'} className='ContactButton font-poppins font-medium px-[24px] py-[8px] text-base text-Primary hover-this transition-trigger'>CONTACT</Link>
                      </div>
                    </Magnet>
                </div>
            </div>
        </nav>
    </>
  )
}
