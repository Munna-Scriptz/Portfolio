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
                      <Link to={'/'} className='hover-this' >
                        <img className='w-[60px] transition-trigger' src={Logo} alt="Logo" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1200" data-aos-easing="ease-in-sine"/>
                      </Link>
                    </Magnet>
                    {/* ----NavLinks---- */}
                    <div>
                      <ul className='font-soldier flex items-center gap-6 text-2xl text-Primary'>
                        <li data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1400" data-aos-easing="ease-in-sine"><Link to={'/'} className={`flex items-center NavLinks hover-brown transition-trigger`}>HOME<LuDot/></Link></li>
                        <li data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1600" data-aos-easing="ease-in-sine"><Link to={'/about'} className='flex items-center NavLinks hover-brown transition-trigger'>ABOUT<LuDot/></Link></li>
                        <li data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1800" data-aos-easing="ease-in-sine"><Link to={'/projects'} className='flex items-center NavLinks hover-brown transition-trigger'>PROJECTS<LuDot/></Link></li>
                        <li data-aos="fade-down" data-aos-duration="1500" data-aos-delay="2000" data-aos-easing="ease-in-sine"><Link to={'/contact'} className='flex items-center NavLinks hover-brown transition-trigger'>CONTACT<LuDot/></Link></li>
                      </ul>
                    </div>
                    {/* ----Button---- */}
                    <Magnet magnetStrength={2} padding={20}>
                      <div className="magnetic-btn" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="2200" data-aos-easing="ease-in-sine">
                        <Link to={'/contact'} className='ContactButton font-poppins font-medium px-[24px] py-[8px] text-base text-Primary hover-this transition-trigger'>CONTACT</Link>
                      </div>
                    </Magnet>
                </div>
            </div>
        </nav>
    </>
  )
}
