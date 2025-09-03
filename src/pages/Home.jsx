import React from 'react'
import Banner from '../components/home/Banner'
import Counter from '../components/home/Counter'
import { LetsWorkTogether } from '../components/home/LetsWorkTogether'
import AboutMe from '../components/home/AboutMe' 
import { Skills } from '../components/home/Skills'
import HomeServices from '../components/home/HomeServices'
import Projects from '../components/home/Projects'
import ContactMe from '../components/home/ContactMe'

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
      <HomeServices/>
      <Projects/>
      <ContactMe/>
    </>
  )
}
