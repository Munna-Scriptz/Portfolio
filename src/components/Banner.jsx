import React, { useEffect } from 'react'
import { Link } from 'react-router';
import PortfolioPic from "../assets/images/PortfolioShape.png"
// -----Animation Npm 
import { TypeAnimation } from 'react-type-animation';
import Magnet from './common/Magnet'
// ---------Icons 
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import BlurText from './common/BlurText';
// --------Aos 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
    }, []);

  return (
    <>
       <section id="Banner" className='pt-8 lg:pt-22 h-screen'>
            <div className="container">
                <div className='flex justify-between flex-col gap-10 lg:gap-0 lg:flex-row'>
                    <div className="bannerText" >
                        <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='font-medium text-sm tracking-[2px] lg:text-base lg:tracking-[3px] text-[#212428]'>WELCOME TO MY PORTFOLIO</p>
                        <h1 className='font-poppins text-Primary text-[38px] lg:text-[68px] font-medium lg:mt-2 mt-4'>Hi, i'm <span className='text-[#BF4A1A]'>Munna</span></h1>
                        {/* -----animated Text------- */}
                        <div>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    `A Frontend Developer.`,
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    `A Backend Developer.`,
                                    1000,
                                    `A Fullstack Developer.`,
                                    1000,
                                ]}
                                className='text-[25px] lg:text-[38px] text-second'
                                wrapper="span"
                                speed={60}
                                repeat={Infinity}
                            />
                        </div>
                        <div className='font-medium font-poppins text-[#2d2e30be] mt-6 lg:mt-4 w-full text-[12px] lg:text-sm lg:w-[435px]'><BlurText text="Driven by passion and defined by precision, I craft impactful digital experiences with purpose, creativity, and a relentless focus on excellence." delay={350} animateBy="words" direction="top"/></div>
                        {/* -----Text Button------- */}
                        <div className='mt-6 flex items-center gap-3'>
                            <Magnet padding={10} disabled={false} magnetStrength={5}>
                              <Link className='ContactButton font-poppins font-medium text-base text-Primary hover-this'>CONTACT</Link>
                            </Magnet>
                            <Magnet padding={10} disabled={false} magnetStrength={5}>
                              <Link className='DownloadCv px-[24px] py-[10px] font-poppins font-medium  text-Primary text-sm lg:py-[8px] lg:text-base hover-this'>
                                  <span>Download CV</span>
                              </Link>
                            </Magnet>
                        </div>
                        {/* -----Social Media Button------- */}
                        
                        <div className='mt-10 flex items-center gap-7'>
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
                    </div>
                    <div id="bannerPhoto" className=''>
                        <img src={PortfolioPic} alt="Image" />
                    </div>
                </div>
            </div>
        </section>
  </>
  )
}

export default Banner