import React from 'react'

export const LetsWorkTogether = () => {
  return (
    <>
    <section className='relative text-second w-screen lg:overflow-x-visible overflow-x-hidden lg:h-auto h-[160px]'>
      {/* A Section */}
      <section className="a-section rotate-[10deg] min-w-[120vw] -translate-x-[10vw] lg:mt-0 mt-[33px]">
        <div className="a-section-marquee-box">
          <h2 className="marquee-text lg:text-[5rem] text-[2rem]">LETS WORK TOGETHER ✦ LETS WORK TOGETHER ✦</h2>
          <h2 className="marquee-text lg:text-[5rem] text-[2rem]">LETS WORK TOGETHER ✦ LETS WORK TOGETHER ✦</h2>
        </div>
      </section>
      
      {/* B Section */}
      <section className="b-section absolute top-[50px] left-0 rotate-[-15deg] min-w-[120vw] -translate-x-[10vw]">
        <div className="b-section-marquee-box">
          <h2 className="marquee-text lg:text-[5rem] text-[2rem]">SCROLL DOWN ✦ SCROLL DOWN ✦ SCROLL DOWN ✦</h2>
          <h2 className="marquee-text lg:text-[5rem] text-[2rem]">SCROLL DOWN ✦ SCROLL DOWN ✦ SCROLL DOWN ✦</h2>
        </div>
      </section>
    </section>
    </>
  )
}
