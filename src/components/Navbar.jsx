import React from 'react'
import Logo from "../assets/images/Logo.png"
import { Link } from 'react-router'
import { LuDot } from "react-icons/lu";

export const Navbar = () => {
  return (
    <>
        <nav className='py-5'>
            <div className="container">
                <div id='NavRow' className='flex items-center justify-between'>
                    {/* ----Logo---- */}
                    <div className='w-[60px]'>
                        <img src={Logo} alt="Logo" />
                    </div>
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
                        <Link className='ContactButton font-poppins font-medium text-base text-Primary'>CONTACT</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
