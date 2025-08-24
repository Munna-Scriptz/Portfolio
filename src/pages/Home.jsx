import React from 'react'
import Banner from '../components/Banner'
import Counter from '../components/Counter'
import AboutMe from '../components/AboutMe'
import { Skills } from '../components/Skills'
import Projects from '../components/Projects'
import { LetsWorkTogether } from '../components/LetsWorkTogether'
import Contact from '../components/Contact'

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
        <div className="lg:sticky top-0 h-[900px] bg-[#E4E2DB] lg:pt-0 pt-[50px] lg:border-t border-Primary">
          <Skills/>
        </div>
      </div>
      <Projects/>
      <Contact/>
    </>
  )
}
