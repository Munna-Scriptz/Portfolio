import React from 'react'
import { Link } from 'react-router';
import PortfolioPic from "../../assets/images/portfolioImg2.png"
// -----Animation Npm 
import { TypeAnimation } from 'react-type-animation';
import Magnet from '../effects/Magnet'
import BlurText from '../effects/BlurText';
// ---------Icons 
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      <section id="Banner" className='pt-8 lg:pt-16 overflow-hidden lg:pb-16 pb-0'>
        <div className="container">
          <div className='flex justify-between items-start md:flex-nowrap flex-wrap gap-10 lg:gap-0'>
            <div className="bannerText" >
              <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="2300" data-aos-easing="ease-in-sine" className='font-medium text-sm tracking-[2px] lg:text-base lg:tracking-[3px] text-[#212428]'>WELCOME TO MY PORTFOLIO</p>
              <h1 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000" data-aos-easing="ease-in-sine" className='font-poppins text-Primary text-[38px] lg:text-[68px] font-medium lg:mt-2 mt-4'>Hi, i'm <span className='text-[#BF4A1A]'>Munna</span></h1>
              {/* -----animated Text------- */}
              <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="2300" data-aos-easing="ease-in-sine">
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
              <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="3000" data-aos-easing="ease-in-sine" className='font-medium font-poppins text-[#2d2e30be] mt-6 lg:mt-4 text-[12px] lg:text-sm md:w-[435px] w-full'><BlurText text="Driven by passion and defined by precision, I craft impactful digital experiences with purpose, creativity, and a relentless focus on excellence." delay={350} animateBy="words" direction="top" /></div>
              {/* -----Text Button------- */}
              <div className='mt-6 flex items-center gap-3'>
                <Magnet padding={10} disabled={false} magnetStrength={5}>
                  <div data-aos="fade-right" data-aos-duration="2600" data-aos-delay="3000" data-aos-easing="ease-in-sine">
                    <Link to={'/contact'}  className='ContactButton transition-trigger transition-link px-[24px] py-[8px] font-poppins font-medium lg:text-base text-sm text-Primary hover-this'>CONTACT</Link>
                  </div>
                </Magnet>
                <Magnet padding={10} disabled={false} magnetStrength={5}>
                  <Link data-aos="fade-right" data-aos-duration="2600" data-aos-delay="3000" data-aos-easing="ease-in-sine" className='DownloadCv px-[24px] py-[8px] font-poppins font-medium  text-Primary text-sm lg:py-[8px] lg:text-base hover-this'>
                    <span>DOWNLOAD CV</span>
                  </Link>
                </Magnet>
              </div>
              {/* -----Social Media Button------- */}
              <div className='mt-10 flex items-center gap-7'>
                <Magnet padding={20} disabled={false} magnetStrength={2}>
                  <div data-aos="fade-right" data-aos-duration="1300" data-aos-delay="1200" data-aos-easing="ease-in-sine" data-aos-offset="30" >
                    <a target='_blank' href='https://www.facebook.com/rexon.notfr' aria-label="Visit my Facebook profile"><FaFacebookF className='text-[18px] hover-brown' /></a>
                  </div>
                </Magnet>
                <Magnet padding={20} disabled={false} magnetStrength={2}>
                  <div data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1800" data-aos-easing="ease-in-sine" data-aos-offset="30">
                    <a target='_blank' href='https://www.instagram.com/rexon.notfr/?__pwa=1' aria-label="Visit my Instagram profile"><FaInstagram className='text-[18px] hover-brown' /></a>
                  </div>
                </Magnet>
                <Magnet padding={20} disabled={false} magnetStrength={2}>
                  <div data-aos="fade-up" data-aos-duration="1600" data-aos-delay="2000" data-aos-easing="ease-in-sine" data-aos-offset="30">
                    <a target='_blank' href='https://github.com/Munna-Scriptz' aria-label="Visit my Twitter profile"><FaXTwitter className='text-[18px] hover-brown' /></a>
                  </div>
                </Magnet>
                <Magnet padding={20} disabled={false} magnetStrength={2}>
                  <div data-aos="fade-up" data-aos-duration="1800" data-aos-delay="2200" data-aos-easing="ease-in-sine" data-aos-offset="30">
                    <a target='_blank' href='https://github.com/Munna-Scriptz' aria-label="Visit my Github profile"><FaGithub className='text-[18px] hover-brown' /></a>
                  </div>
                </Magnet>
                <Magnet padding={20} disabled={false} magnetStrength={2}>
                  <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="2000" data-aos-easing="ease-in-sine" data-aos-offset="30">
                    <a target='_blank' href='https://www.linkedin.com/in/munna-scriptz-25287635b/' aria-label="Visit my Linkedin profile"><FaLinkedinIn className='text-[18px] hover-brown'/></a>
                  </div>
                </Magnet>
              </div>
            </div>

            {/* ----------------------- Portfolio Image ---------------------- */}
            <div className='md:w-[650px] w-full' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="2000" data-aos-easing="ease-in-sine" id="bannerPhoto">
              <img src={PortfolioPic} alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner