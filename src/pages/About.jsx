import React from 'react'
import AboutText from '../components/About Me/AboutText'
import Services from '../components/About Me/Services'

const About = () => {

  return (
    <>
    <section className='my-[122px]'>
      <AboutText/>
      <div className='mt-[112px]'>
        <Services/>
      </div>
    </section>
    </>
  )
}

export default About
