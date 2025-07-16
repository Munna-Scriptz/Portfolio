import React from 'react'
import CountUp from 'react-countup';
import { TfiFiles } from "react-icons/tfi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { GrGroup } from "react-icons/gr";
import { RiCheckboxMultipleLine } from "react-icons/ri";



const Counter = () => {
  return (
    <>
        <section className='bg-[#EB6229] py-[25px]'>
            <div id="counterDiv" className='flex items-center justify-around'>
                <div className='flex items-center gap-5'>
                    <div><TfiFiles className='text-2xl text-brand'/></div>
                    <div>
                        <h2 className='text-4xl text-brand font-poppins font-medium'><CountUp end={38}  duration={5} />+</h2>
                        <p className='text-base text-[#E5E3DC] font-poppins font-medium'>Projects</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div><TfiCommentsSmiley className='text-2xl text-brand'/></div>
                    <div>
                        <h2 className='text-4xl text-brand font-poppins font-medium'><CountUp end={90}  duration={5} />+</h2>
                        <p className='text-base text-[#E5E3DC] font-poppins font-medium'>Client Review</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div><GrGroup className='text-2xl text-brand'/></div>
                    <div>
                        <h2 className='text-4xl text-brand font-poppins font-medium'><CountUp end={12}  duration={5} />+</h2>
                        <p className='text-base text-[#E5E3DC] font-poppins font-medium'>Team members</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div><RiCheckboxMultipleLine className='text-2xl text-brand'/></div>
                    <div>
                        <h2 className='text-4xl text-brand font-poppins font-medium'><CountUp end={100}  duration={5} />+</h2>
                        <p className='text-base text-[#E5E3DC] font-poppins font-medium'>Completed Work</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Counter