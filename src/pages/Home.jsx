import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Counter from '../components/Counter'
import AboutMe from '../components/AboutMe'
import { Skills } from '../components/Skills'
import Projects from '../components/Projects'
import { LetsWorkTogether } from '../components/LetsWorkTogether'
import Contact from '../components/Contact'
import InfoCards from '../components/InfoCards'
import { MdOutlineArrowBack } from 'react-icons/md'

export const Home = () => {
  return (
    <>
      <Banner/>
      <Counter/>
      <div className="relative">
        <div className="lg:sticky top-0 lg:h-[400px] lg:py-[30px] lg:mt-18 bg-[#E4E2DB]">
          <LetsWorkTogether/>
        </div>
        <div className="lg:sticky top-0 lg:h-[1200px] lg:py-[120px] lg:border-t border-[#1616167e] mt-[100px] py-0 bg-[#E4E2DB]">
          <AboutMe/>
        </div>
        <div className="lg:sticky top-0 lg:h-[1100px] h-[900px] bg-[#E4E2DB] lg:pt-0 pt-[50px] lg:border-t border-Primary">
          <Skills/>
        </div>
      </div>
      <div className='lg:mt-0 mt-80'>
        <div className='container'>
            <p className='font-poppins text-Primary text-lg font-semibold uppercase'>What I Do</p>
            <div className='flex items-center justify-between'>
              <h2 className='font-soldier text-Primary lg:text-[152px] text-[64px] font-medium uppercase'>Services</h2>
              <MdOutlineArrowBack data-aos="fade-up" className='hidden md:block text-[200px] md:text-[300px] rotate-[-45deg] text-borderCol'/>
            </div>
            <p className='font-poppins text-second lg:text-xl text-lg lg:w-[400px] uppercase lg:ml-[100px] lg:mb-20'>Comprehensive digital services to boost your online presence and achieve impactful results.</p>
            <InfoCards/>
          </div>
      </div>
      <Projects/>
      <Contact/>
    </>
  )
}
