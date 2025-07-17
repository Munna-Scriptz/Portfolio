import React from 'react'
import Banner from '../components/Banner'
import Counter from '../components/Counter'
import AboutMe from '../components/AboutMe'

export const Home = () => {
  
  return (
    <>
      <Banner/>
      <Counter/>
      <div className="relative">
            <div className="sticky top-0 h-[1000px] py-[120px] bg-[#E4E2DB]">
              <AboutMe/>
            </div>
            <div className="sticky top-0 h-[110vh] flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
              <h2 className="text-4xl font-bold">The Second slide</h2>
              <p className="mt-2">Scroll Down for next slide</p>
            </div>
            <div className="sticky top-0 h-[110vh] flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
              <h2 className="text-4xl font-bold">The Third slide</h2>
              <p className="mt-2">Scroll Down</p>
            </div>
            <div className="sticky top-0 h-[400px] flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
              <h2 className="text-4xl font-bold">The Fourth slide</h2>
            </div>
        </div>
    </>
  )
}
