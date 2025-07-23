import React from 'react'
import FooterLogo from '../assets/images/Logo.png'
import { Link } from 'react-router'
import Magnet from './common/Magnet'
// ---------Icons 
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <>
        <footer className='py-[50px] border-[#21212157] border-t-2'>
            <div className="container">
                <div id="Footer_Row" className='flex items-center justify-between'>
                    <div id="Row_1">
                        <Magnet padding={20} disabled={false} magnetStrength={2}>
                            <Link to={'/'}><img src={FooterLogo} alt="Logo" className='w-[150px]'/></Link>
                        </Magnet>
                        <p className='text-sm text-second font-poppins font-light w-[130px] mt-6'>©2025 By Munna. All rights reserved.</p>
                    </div>
                    <div id="Row_2">
                        <h2 className='font-soldier text-6xl text-Primary mb-6'>LINKS</h2>
                        <ul id='FooterLinks' className='flex flex-col gap-4 text-[#3f3f3f] font-poppins text-sm'>
                            <li><Link to={'/'}>SUPPORT</Link></li>
                            <li><Link to={'/'}>LICENSES</Link></li>
                            <li><Link to={'/'}>TERMS OF USE</Link></li>
                            <li><Link to={'/'}>PRIVACY POLICY</Link></li>
                        </ul>
                    </div>
                    <div id="Row_3">
                        <h2 className='font-soldier text-6xl text-Primary mb-6'>ABOUT ME</h2>
                        <ul id='FooterLinks' className='flex flex-col gap-4 text-[#3f3f3f] font-poppins text-sm'>
                            <li><Link to={'/'}>ABOUT ME</Link></li>
                            <li><Link to={'/'}>MY WORK</Link></li>
                            <li><Link to={'/'}>DOWNLOAD CV</Link></li>
                            <li><Link to={'/'}>CONTACT</Link></li>
                        </ul>
                    </div>
                    <div id="Row_4">
                        <h2 className='font-soldier text-6xl text-Primary mb-6'>CONTACT</h2>
                        <ul id='FooterLinks' className='flex flex-col gap-4 text-[#3f3f3f] font-poppins font-medium'>
                            <li><Link to={'/'}>DHAKA, BANGLADESH</Link></li>
                            <li><Link to={'/'}>munnascriptz@gmail.com</Link></li>
                            <li><Link to={'/'}>+8801908905391</Link></li>

                            <div className='mt-3 flex items-center gap-7'>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <Link><FaFacebookF className='text-[18px] hover-brown'/></Link>
                            </Magnet>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <Link><FaInstagram className='text-[18px] hover-brown'/></Link>
                            </Magnet>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <Link><FaXTwitter className='text-[18px] hover-brown'/></Link>
                            </Magnet>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <Link><FaGithub className='text-[18px] hover-brown'/></Link>
                            </Magnet>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <Link><FaLinkedinIn className='text-[18px] hover-brown'/></Link>
                            </Magnet>
                        </div>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer