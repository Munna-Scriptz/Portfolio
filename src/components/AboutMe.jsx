import React from 'react'
import { Link } from 'react-router'
import Magnet from './common/Magnet'
import { FaCheck } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <>
    
        <section id='About_Me'>
            <div className="container">
                <div className="AboutMe flex justify-between">
                    <div className="aboutMeText">
                        <h2 className='text-[58px] font-soldier text-Primary font-medium mb-5'>ABOUT ME</h2>
                        <p className='text-[68px] font-soldier leading-[72px] text-Primary font-medium w-[370px]'>Creating Stuff That <span className='text-coffee'>Does More </span>Than Impress</p>
                        <p className='text-[18px] font-poppins text-second font-normal mt-10 w-[370px]'>Creative designer based in Melbourne</p>
                    </div>
                    <div>
                        <p className='mb-[50px] font-poppins text-[32px] font-medium text-Primary w-[700px] '>I am dedicated to developing innovative solutions and impactful experiences that meet user needs and exceed expectations.</p>
                        <div className='flex items-center justify-between w-[500px] mb-[50px]'>
                            <div className='flex flex-col gap-4'>
                                <p className='flex items-center gap-3 font-poppins font-medium'><FaCheck />Mistakes To Avoid</p>
                                <p className='flex items-center gap-3 font-poppins font-medium'><FaCheck />Your Startup</p>
                                <p className='flex items-center gap-3 font-poppins font-medium'><FaCheck />outside the box</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='flex items-center gap-3 font-poppins font-medium'><FaCheck />Create destiny</p>
                                <p className='flex items-center gap-3 font-poppins font-medium'><FaCheck />Dare different</p>
                                <p className='flex items-center gap-3 font-poppins font-medium'><FaCheck />Wlll power</p>
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