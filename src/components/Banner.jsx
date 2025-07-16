import React from 'react'
import { Link } from 'react-router';
import { gsap } from "gsap";
import PortfolioPic from "../assets/images/PortfolioShape.png"
// -----Animation Npm 
import { TypeAnimation } from 'react-type-animation';
import MagnetAnimation from './common/MagnetEffect'


const Banner = () => {

    const contactEffect = MagnetAnimation();
    const CvEffect = MagnetAnimation();
    
  return (
    <>
       <section id="Banner" className='pt-22 h-screen'>
            <div className="container">
                <div className='flex justify-between'>
                    <div className="bannerText">
                        <p className='font-medium text-base tracking-[3px] text-[#212428]'>WELCOME TO MY PORTFOLIO</p>
                        <h1 className='font-poppins text-Primary text-[68px] font-medium mt-2'>Hi, i'm <span className='text-[#BF4A1A]'>Munna</span></h1>
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
                                wrapper="span"
                                speed={60}
                                style={{ fontSize: '38px', color:' #161616', fontFamily: 'Poppins, sans-serif' , display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                        <p className='font-medium font-poppins text-sm text-[#2d2e30be] mt-4 w-[435px]'>Driven by passion and defined by precision, I craft impactful digital experiences with purpose, creativity, and a relentless focus on excellence.</p>
                        {/* -----Text Button-------ref={btnRef} className="magnetic-btn" onMouseMove={HandleContactHover} onMouseLeave={HandleContactLeave} */}
                        <div className='mt-6 flex items-center gap-3'>
                            <Link {...contactEffect} className='ContactButton font-poppins font-medium text-base text-Primary'>CONTACT</Link>
                            <Link {...CvEffect} className='DownloadCv font-poppins font-medium text-base text-Primary'>
                                <span>Download CV</span>
                            </Link>
                        </div>
                    </div>
                    <div id="bannerPhoto">
                        <img src={PortfolioPic} alt="Image" />
                    </div>
                </div>
            </div>
        </section> 
        <div class="relative">
  <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
    <h2 class="text-4xl font-bold">The First slide</h2>
    <p class="mt-2">Scroll Down for next slide</p>
  </div>
  <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
    <h2 class="text-4xl font-bold">The Second slide</h2>
    <p class="mt-2">Scroll Down for next slide</p>
  </div>
  <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
    <h2 class="text-4xl font-bold">The Third slide</h2>
    <p class="mt-2">Scroll Down</p>
  </div>
  <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
    <h2 class="text-4xl font-bold">The Fourth slide</h2>
  </div>
</div>
    </>
  )
}

export default Banner