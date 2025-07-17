import React from 'react'
import Banner from '../components/Banner'
import Counter from '../components/Counter'
import AboutMe from '../components/AboutMe'
import { Skills } from '../components/Skills'
import Footer from '../components/Footer'

export const Home = () => {
  
  return (
    <>
      <Banner/>
      <Counter/>
      <div className="relative">
            <div className="sticky top-0 h-[1000px] py-[120px] bg-[#E4E2DB]">
              <AboutMe/>
            </div>
            <div className="sticky top-0 h-[900px] bg-[#E4E2DB] border-t border-Primary">
              <Skills/>
            </div>
            <div className="sticky top-0 h-[110vh] flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
              <h2 className="text-4xl font-bold">The Third slide</h2>
              <p className="mt-2">Scroll Down</p>
            </div>
            <div className="sticky top-0 h-[300px] bg-[#E4E2DB]">
              <Footer/>
            </div>
        </div>
    </>
  )
}
