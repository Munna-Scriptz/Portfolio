import React from 'react'
import ScrollVelocity from './common/ScrollVelocity'

export const LetsWorkTogether = () => {
  return (
    <>
        <section className=' text-second'>
            <ScrollVelocity texts={[`Let's Work Together`, 'Scroll Down']} className="custom-scroll-text"/>
        </section>
    </>
  )
}
