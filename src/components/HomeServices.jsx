import React from 'react'
import InfoCards from './InfoCards'
import { MdOutlineArrowBack } from 'react-icons/md'
import ScrollReveal from './effects/ScrollReveal'

const HomeServices = () => {
  return (
    <>
    <section id='Services' className='lg:mt-0 mt-80'>
        <div className="container">
            <div id="Services-Row">
                {/* -----------------Header------------------ */}
                <div>
                    <p className='font-poppins text-Primary text-lg font-semibold uppercase' data-aos="fade-up">What I Do</p>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-soldier text-Primary lg:text-[152px] text-[64px] font-medium uppercase' data-aos="fade-up">Services</h2>
                        <div data-aos="fade-up">
                            <MdOutlineArrowBack className='hidden md:block text-[200px] md:text-[300px] rotate-[-45deg] text-borderCol'/>
                        </div>
                    </div>
                    <p data-aos="fade-up" className='font-poppins text-second lg:text-xl text-md lg:w-[400px] uppercase lg:ml-[100px] lg:mb-20'>Comprehensive digital services to boost your online presence and achieve impactful results.</p>
                </div>
                {/* -----------------Cards------------------ */}
                <div className='lg:mt-0 mt-20'>
                    <InfoCards/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeServices