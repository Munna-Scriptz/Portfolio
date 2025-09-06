import React from 'react'
import FooterLogo from '../../assets/images/Logo.png'
import { Link } from 'react-router'
// ---------Icons 
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Magnet from '../effects/Magnet';


const Footer = () => {
  return (
    <>
        <footer className='pt-[50px] border-[#21212157] border-t-2 lg:pb-[32px] pb-[32px]'>
            <div className="container">
                <div id="Footer_Row" className='grid grid-cols-1 lg:place-items-start place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-10 py-8 lg:py-[65px]'>
                    <div id="Row_1">
                        <Magnet data-aos="fade-up" padding={20} disabled={false} magnetStrength={2}>
                            <Link to={'/'}><img src={FooterLogo} alt="Logo" className='w-[150px]'/></Link>
                        </Magnet>
                        <p data-aos="fade-up" className='text-sm text-second font-poppins font-light w-[130px] text-center mt-6'>©2025 Portfolio By Munna.</p>
                    </div>
                    <div id="Row_2">
                        <h2 data-aos="fade-up" className='font-soldier lg:text-6xl md:text-start text-center text-5xl text-Primary mb-6'>LINKS</h2>
                        <ul id='FooterLinks' className='flex flex-col md:items-start items-center gap-4 text-[#3f3f3f] font-poppins text-sm'>
                            <li data-aos="fade-up"><Link to={'/'}>SUPPORT</Link></li>
                            <li data-aos="fade-up"><Link to={'/'}>LICENSES</Link></li>
                            <li data-aos="fade-up"><Link to={'/'}>TERMS OF USE</Link></li>
                            <li data-aos="fade-up"><Link to={'/'}>PRIVACY POLICY</Link></li>
                        </ul>
                    </div>
                    <div id="Row_3">
                        <h2 data-aos="fade-up" className='font-soldier md:text-start text-center lg:text-6xl text-5xl text-Primary mb-6'>ABOUT ME</h2>
                        <ul id='FooterLinks' className='flex md:items-start items-center flex-col gap-4 text-[#3f3f3f] font-poppins text-sm'>
                            <li data-aos="fade-up"><Link to={'/about'}>ABOUT ME</Link></li>
                            <li data-aos="fade-up"><Link to={'/projects'}>MY WORK</Link></li>
                            <li data-aos="fade-up"><Link to={'/'}>DOWNLOAD CV</Link></li>
                            <li data-aos="fade-up"><Link to={'/contact'}>CONTACT</Link></li>
                        </ul>
                    </div>
                    <div id="Row_4">
                        <h2 data-aos="fade-up" className='font-soldier md:text-start text-center lg:text-6xl text-5xl text-Primary mb-4'>CONTACT</h2>
                        <ul id='FooterLinks' className='flex md:items-start items-center flex-col gap-3 text-[#3f3f3f] font-poppins font-medium'>
                            <li data-aos="fade-up"><Link to={'/'}>DHAKA, BANGLADESH</Link></li>
                            <li data-aos="fade-up"><Link to={'/'}>munnascriptz@gmail.com</Link></li>
                            <li data-aos="fade-up"><Link to={'/'}>+8801908905391</Link></li>

                            <div className='mt-3 flex items-center gap-7'>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <a href='https://www.facebook.com/rexon.notfr'><FaFacebookF className='text-[18px] hover-brown'/></a>
                            </Magnet>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <a href='https://www.instagram.com/rexon.notfr/?__pwa=1'><FaInstagram className='text-[18px] hover-brown'/></a>
                            </Magnet>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <a href='https://github.com/Munna-Scriptz'><FaXTwitter className='text-[18px] hover-brown'/></a>
                            </Magnet>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <a href='https://github.com/Munna-Scriptz'><FaGithub className='text-[18px] hover-brown'/></a>
                            </Magnet>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <a href='https://github.com/Munna-Scriptz'><FaLinkedinIn className='text-[18px] hover-brown'/></a>
                            </Magnet>
                        </div>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ------------------Bottom Copyright------------------ */}
            <div className='border-t border-[#21212157] mt-10 pt-8 text-center'>
                <p className='text-sm text-second font-poppins font-light'>©2025 By Munna. All rights reserved.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer