import React from 'react'
import AboutText from '../components/About Me/AboutText'
import Services from '../components/About Me/Services'
import MyReview from '../components/About Me/MyReview'
import Review from '../components/About Me/Review'

const About = () => {

  return (
    <>
    <section className='my-[122px]'>
      <AboutText/>
      <Services/>
      <Review/>
    </section>
    </>
  )
}

export default About
