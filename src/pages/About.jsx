import React from 'react'
import AboutText from '../components/About Me/AboutText'
import Services from '../components/About Me/Services'
import { MdOutlineArrowBack } from 'react-icons/md'

const About = () => {

  return (
    <>
    <section className='my-[122px]'>
      <div className="container">
        <AboutText/>
        <div className='mt-[112px]'>
          <p className='font-poppins text-Primary text-lg font-semibold uppercase'>What I Do</p>
          <div className='flex items-center justify-between'>
            <h2 className='font-soldier text-Primary text-[152px] font-medium uppercase'>Services</h2>
            <MdOutlineArrowBack data-aos="fade-up" className='hidden md:block text-[200px] md:text-[300px] rotate-[-45deg] text-borderCol'/>
          </div>
          <p className='font-poppins text-second text-xl w-[400px] uppercase ml-[100px]'>Comprehensive digital services to boost your online presence and achieve impactful results.</p>
          <Services/>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
