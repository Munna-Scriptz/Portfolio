import React, { useEffect } from 'react'
import { Link } from 'react-router'
import Magnet from './common/Magnet'
import { FaCheck } from "react-icons/fa6";
import BlurText from './common/BlurText';
// --------Aos 
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutMe = () => {
        useEffect(() => {
            AOS.init({
              duration: 800,
            });
        }, []);
  return (
    <>
    
        <section id='About_Me'>
            <div className="container">
                <div className="AboutMe flex justify-between">
                    <div className="aboutMeText">
                        <h2 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='text-[58px] font-soldier text-Primary font-medium mb-5'>ABOUT ME</h2>
                        <p className='text-[68px] font-soldier leading-[72px] text-Primary font-medium w-[370px]'>Creating Stuff That <span data-aos="fade-left" className='text-coffee'>Does More </span>Than Impress</p>
                        <div className='text-[18px] font-poppins text-second font-normal mt-10 w-[370px]'><BlurText text="Creative designer based in Melbourne" delay={250} animateBy="words" direction="top"/></div>
                    </div>
                    <div>
                        <div className='mb-[50px] font-poppins text-[32px] font-medium text-Primary w-[700px] '><BlurText text="I am dedicated to developing innovative solutions and impactful experiences that meet user needs and exceed expectations." delay={150} animateBy="words" direction="top"/></div>
                        <div className='flex items-center justify-between w-[500px] mb-[50px]'>
                            <div className='flex flex-col gap-4'>
                                <p className='flex items-center gap-3 font-poppins font-medium' data-aos="fade-right"><FaCheck />Mistakes To Avoid</p>
                                <p className='flex items-center gap-3 font-poppins font-medium' data-aos="fade-right"><FaCheck />Your Startup</p>
                                <p className='flex items-center gap-3 font-poppins font-medium' data-aos="fade-right"><FaCheck />outside the box</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='flex items-center gap-3 font-poppins font-medium' data-aos="fade-left"><FaCheck />Create destiny</p>
                                <p className='flex items-center gap-3 font-poppins font-medium' data-aos="fade-left"><FaCheck />Dare different</p>
                                <p className='flex items-center gap-3 font-poppins font-medium' data-aos="fade-left"><FaCheck />Will power</p>
                            </div>
                        </div>
                        <Magnet padding={30} disabled={false} magnetStrength={5}>
                              <Link className='ContactButton font-poppins font-medium text-base text-Primary hover-this'>MORE ABOUT ME</Link>
                        </Magnet>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default AboutMe