import React from 'react'
import Banner from '../components/Banner'
import Counter from '../components/Counter'
import AboutMe from '../components/AboutMe'
import { Skills } from '../components/Skills'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import { LetsWorkTogether } from '../components/LetsWorkTogether'

export const Home = () => {
  
  return (
    <>
      <Banner/>
      <Counter/>
      <LetsWorkTogether/>
      <div className="relative">
            <div className="lg:sticky top-0 lg:h-[1200px] lg:py-[120px] py-[110px] bg-[#E4E2DB]">
              <AboutMe/>
            </div>
            <div className="lg:sticky top-0 h-[900px] bg-[#E4E2DB] border-t border-Primary">
              <Skills/>
            </div>
            <div className="lg:sticky top-0 h-[2900px] bg-[#E4E2DB] py-[70px] border-t border-Primary">
              <Projects/>
            </div>
            <div className="lg:sticky top-0 h-[750px] bg-[#E4E2DB] border-t border-Primary">
              <Skills/>
            </div>
            <div className="lg:sticky top-0 h-[300px] bg-[#E4E2DB]">
              <Footer/>
            </div>
      </div>
    </>
  )
}
