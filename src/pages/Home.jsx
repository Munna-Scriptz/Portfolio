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
            <div className="sticky top-0 h-[1000px] py-[120px] bg-[#E4E2DB]">
              <AboutMe/>
            </div>
            <div className="sticky top-0 h-[900px] bg-[#E4E2DB] border-t border-Primary">
              <Skills/>
            </div>
            <div className="sticky top-0 h-[1000px] bg-[#E4E2DB] py-[70px] border-t border-Primary">
              <Projects/>
            </div>
            <div className="sticky top-0 h-[300px] bg-[#E4E2DB]">
              <Footer/>
            </div>
        </div>
    </>
  )
}
