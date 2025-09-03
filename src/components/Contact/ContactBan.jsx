import React from 'react'
import Magnet from '../effects/Magnet'
// ---------Icons 
import { FaArrowDown, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import CircularText from '../effects/CircularText';
const ContactBan = () => {
  return (
    <>
    <section id='ContactBanner' className='py-[112px]'>
        <div className="container">
            <div id="Banner-Row" className='flex items-end justify-between relative'>
                {/* -----Social Media Button------- */}
                <div data-aos="fade-right" data-aos-duration="2200" data-aos-delay="4500" data-aos-easing="ease-in-sine"  className='mt-10 flex flex-col gap-7'>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <a href='https://www.facebook.com/rexon.notfr' ><FaFacebookF className='text-[18px] text-second hover-brown'/></a>
                            </Magnet>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <a href='https://www.instagram.com/rexon.notfr/?__pwa=1'> <FaInstagram className='text-[18px] text-second hover-brown'/></a>
                            </Magnet>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <a href='https://github.com/Munna-Scriptz'> <FaXTwitter className='text-[18px] text-second hover-brown'/></a>
                            </Magnet>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <a href='https://github.com/Munna-Scriptz'> <FaGithub className='text-[18px] text-second hover-brown'/></a>
                            </Magnet>
                            <Magnet padding={20} disabled={false} magnetStrength={2}>
                              <a href='https://github.com/Munna-Scriptz'> <FaLinkedinIn className='text-[18px] text-second hover-brown'/></a>
                            </Magnet>
                </div>
                {/* -----Center Text------- */}
                <div className='mb-[120px]'>
                    <p className='font-poppins uppercase text-lg text-[#313131] tracking-wide font-medium text-center'>Build Something Amazing Together</p>
                    <h2 className='font-soldier text-[#242424] leading-[130%] font-medium text-[180px] text-center'>CONTACT</h2>
                    <p className='font-poppins uppercase text-lg text-[#525252] tracking-wide font-medium text-center mx-auto w-[400px]'>Excited about a new project? Let’s connect and bring it to life together</p>
                </div>
                {/* -----Explore More------- */}
                <div className='absolute right-0 bottom-0'>
                    <CircularText
                        text=" SCROLL TO EXPLORE ✦ SCROLL TO EXPLORE  ✦ "
                        onHover="speedUp"
                        spinDuration={20}
                        className="custom-class z-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FaArrowDown className="text-xl text-[#242424]" />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactBan