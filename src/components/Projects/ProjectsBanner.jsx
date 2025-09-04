import React from 'react'
import Magnet from '../effects/Magnet'
// ---------Icons 
import { FaArrowDown, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import CircularText from '../effects/CircularText';
const ProjectsBanner = () => {
  return (
    <>
    <section id='ContactBanner' className='py-[90px]'>
        <div className="container">
            <div id="Banner-Row" className='flex lg:flex-row flex-col-reverse lg:items-end items-start justify-between relative'>
                {/* -----Social Media Button------- */}
                <div data-aos="fade-right" data-aos-duration="2200" data-aos-delay="3500" data-aos-easing="ease-in-sine" data-aos-offset="50"  className='mt-10 flex lg:flex-col flex-row gap-7'>
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
                    <p className='font-poppins uppercase text-lg text-[#313131] tracking-wide font-medium text-center md:block hidden' data-aos="fade-up" data-aos-duration="3000">View My Works</p>
                    <p className='font-poppins uppercase text-lg text-[#313131] tracking-wide font-medium text-center md:hidden block' data-aos="fade-up" data-aos-duration="3000">View My Works</p>
                    <h2 className='font-soldier text-[#242424] lg:leading-[130%] font-medium lg:text-[180px] text-[70px] text-center' data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1400">PROJECTS</h2>
                    <p className='font-poppins uppercase lg:text-lg text-base text-[#525252] tracking-wide font-medium text-center mx-auto lg:w-[500px] w-full' data-aos="fade-up" data-aos-duration="3000" data-aos-delay="2000">Explore a showcase of my creative journey, where passion meets design to craft engaging digital experiences.</p>
                </div>
                {/* -----Explore More------- */}
                <a href='#AllProjects-Section' className='absolute right-0 bottom-0' data-aos="fade-up" data-aos-duration="3000" data-aos-delay="3500">
                  <div className='lg:block hidden'>
                    <CircularText text=" SCROLL TO EXPLORE ✦ SCROLL TO EXPLORE  ✦ " onHover="speedUp" spinDuration={20} className="custom-class z-10"/>
                  </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FaArrowDown className="text-xl text-[#242424]" />
                    </div>
                </a>
                <div></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProjectsBanner