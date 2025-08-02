import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup';
import { TfiFiles } from "react-icons/tfi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { GrGroup } from "react-icons/gr";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import ProjectsIcon from '../assets/images/CounterProjectIcon.png'
import TeamICon from '../assets/images/CounterTeamIcon.png'
import ReviewIcon from '../assets/images/CounterReviewIcon.png'
import CompleteICon from '../assets/images/ReviewCompleteICon.png'

const Counter = () => {

    const expandRef = useRef(null);
    const speed = 5;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollAndSpeed = scrollTop / speed;
      const newWidth = Math.min(Math.max(scrollAndSpeed, 60), 100); // clamp between 20% and 95%
      if (expandRef.current) {
        expandRef.current.style.width = `${newWidth}%`;
      }
    };

    window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));

    return () => {
      window.removeEventListener('scroll', () => requestAnimationFrame(handleScroll));
    };
  }, []);


  return (
    <div id='Counter' className='flex justify-center items-center lg:mt-0 mt-[140px]'>
        <section id='CounterBG' className='py-[25px] px-[30px] w-[50%] rounded-[10px] mb-20' ref={expandRef}>
            <div id="counterDiv" className='flex lg:flex-row lg:gap-0 gap-7 flex-col  lg:items-center justify-around'>
                <div className='flex items-center gap-5'>
                    <div className='w-[50px]'><img src={ProjectsIcon} alt="Icon" /></div>
                    <div>
                        <h2 className='text-4xl text-brand font-poppins font-medium'><CountUp enableScrollSpy  end={38}  duration={5} />+</h2>
                        <p className='text-base text-[#E5E3DC] font-poppins font-medium'>Projects</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='w-[50px]'><img src={ReviewIcon} alt="Icon" /></div>
                    <div>
                        <h2 className='text-4xl text-brand font-poppins font-medium'><CountUp end={90} enableScrollSpy  duration={5} />+</h2>
                        <p className='text-base text-[#E5E3DC] font-poppins font-medium'>Client Review</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='w-[50px]'><img src={TeamICon} alt="Icon" /></div>
                    <div>
                        <h2 className='text-4xl text-brand font-poppins font-medium'><CountUp end={12} enableScrollSpy  duration={5} />+</h2>
                        <p className='text-base text-[#E5E3DC] font-poppins font-medium'>Team members</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='w-[40px]'><img src={CompleteICon} alt="Icon" /></div>
                    <div>
                        <h2 className='text-4xl text-brand font-poppins font-medium'><CountUp end={100} enableScrollSpy  duration={5} />+</h2>
                        <p className='text-base text-[#E5E3DC] font-poppins font-medium'>Completed Work</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
  )
}

export default Counter