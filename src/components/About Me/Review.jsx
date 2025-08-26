import React from 'react'
import MyReview from './MyReview'
import { MdOutlineArrowBack } from 'react-icons/md'

const Review = () => {
  return (
    <>
    <section id='Reviews' className='mt-[112px]'>
        <div className="container">
            {/* ---------------Header------------------ */}
            <div className='mb-[100px]'>
                <p className='font-poppins text-Primary text-2xl font-semibold uppercase'>See!</p>
                    <div className='flex items-center justify-between'>
                    <h2 className='font-soldier text-Primary lg:text-[82px] lg:w-[500px] w-full text-[34px] font-medium uppercase'>What People Say About Me</h2>
                    <MdOutlineArrowBack data-aos="fade-up" className='hidden md:block text-[200px] md:text-[300px] rotate-[-45deg] text-borderCol'/>
                    </div>
                <p className='font-poppins text-second lg:text-xl text-lg lg:w-[500px] uppercase lg:ml-[100px]'>eedback from those I’ve worked with — clients, collaborators, and mentors who’ve seen my code, communication, and consistency in action.</p>
            </div>
            {/* ---------------Slider------------------ */}
            <MyReview/>
        </div>
    </section>
    </>
  )
}

export default Review