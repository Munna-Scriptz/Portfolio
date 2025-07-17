import React from 'react'
import Banner from '../components/Banner'
import Counter from '../components/Counter'
import AboutMe from '../components/AboutMe'
import { Skills } from '../components/Skills'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

export const Home = () => {
  
  return (
    <>
      <Banner/>
      <div class="spacer h-50">spacer</div>

<div class="slider-mask h-100">
  <div class="slider-track">
    <div class="screen screen-1">screen 1</div>
    <div class="screen screen-2">screen 2</div>
    <div class="screen screen-3">screen 3</div>
    <div class="screen screen-4">screen 4</div>
  </div>
</div>

<div class="spacer h-100">spacer</div>
      <Counter/>
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
