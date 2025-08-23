import React from 'react'
import ScrollVelocity from './common/ScrollVelocity'

export const LetsWorkTogether = () => {
  return (
    <>
      <section className='relative text-second'>
        <section className="a-section rotate-[10deg]">
          <div className="a-section-marquee-box">
            <h2 className="marquee-text">LETS WORK TOGETHER •</h2>
            <h2 className="marquee-text">LETS WORK TOGETHER •</h2>
          </div>
        </section>

        <section className="b-section absolute top-[50px] left-0 rotate-[-15deg]">
          <div className="b-section-marquee-box">
            <h2 className="marquee-text">scrolling text using css only •</h2>
            <h2 className="marquee-text">scrolling text using css only •</h2>
          </div>
        </section>
        {/* <div className='bg-Primary text-white w-[120%] translate-x-[-60px] rotate-[-10deg] flex items-center justify-center py-4'>
          <ScrollVelocity texts={[`Let's Work Together`]} className="custom-scroll-text"/>
        </div>
        <div className='bg-Primary text-white w-[120%] translate-x-[-60px] rotate-[10deg] flex items-center justify-center py-4'>
          <ScrollVelocity texts={[`Scroll Down`]} className="custom-scroll-text"/>
        </div> */}
      </section>
    </>
  )
}
