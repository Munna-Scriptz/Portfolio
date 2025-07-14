import React from 'react'
import { Link } from 'react-router';

// -----Animation Npm 
import { TypeAnimation } from 'react-type-animation';
import MagnetAnimation from './common/MagnetEffect'


const Banner = () => {

    const contactEffect = MagnetAnimation();
    const CvEffect = MagnetAnimation();

  return (
    <>
       <section id="Banner" className='pt-22'>
            <div className="container">
                <div className="bannerText">
                    <p className='font-medium text-base tracking-[3px] text-[#212428]'>WELCOME TO MY PORTFOLIO</p>
                    <h1 className='font-poppins text-Primary text-[64px] font-medium mt-2'>Hi, i'm <span className='text-[#BF4A1A]'>Munna</span></h1>
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
                    {/* -----Text Button-------ref={btnRef} className="magnetic-btn" onMouseMove={HandleContactHover} onMouseLeave={HandleContactLeave} */}
                    <div className='mt-6 flex items-center gap-3'>
                        <Link {...contactEffect} className='ContactButton font-poppins font-medium text-base text-Primary'>CONTACT</Link>
                        <Link {...CvEffect} className='DownloadCv font-poppins font-medium text-base text-Primary'>
                            <span>Download CV</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Banner