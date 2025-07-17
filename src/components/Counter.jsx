import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup';
import { TfiFiles } from "react-icons/tfi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { GrGroup } from "react-icons/gr";
import { RiCheckboxMultipleLine } from "react-icons/ri";


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
    <div className='flex justify-center items-center'>
        <section className='bg-[#212121] py-[25px] px-[30px] w-[50%] rounded-[10px] mb-20' ref={expandRef}>
            <div id="counterDiv" className='flex items-center justify-around'>
                <div className='flex items-center gap-5'>
                    <div><TfiFiles className='text-2xl text-brand'/></div>
                    <div>
                        <h2 className='text-4xl text-brand font-poppins font-medium'><CountUp enableScrollSpy  end={38}  duration={5} />+</h2>
                        <p className='text-base text-[#E5E3DC] font-poppins font-medium'>Projects</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div><TfiCommentsSmiley className='text-2xl text-brand'/></div>
                    <div>
                        <h2 className='text-4xl text-brand font-poppins font-medium'><CountUp end={90} enableScrollSpy  duration={5} />+</h2>
                        <p className='text-base text-[#E5E3DC] font-poppins font-medium'>Client Review</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div><GrGroup className='text-2xl text-brand'/></div>
                    <div>
                        <h2 className='text-4xl text-brand font-poppins font-medium'><CountUp end={12} enableScrollSpy  duration={5} />+</h2>
                        <p className='text-base text-[#E5E3DC] font-poppins font-medium'>Team members</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div><RiCheckboxMultipleLine className='text-2xl text-brand'/></div>
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