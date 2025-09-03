import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'
import Magnet from '../effects/Magnet'
import { Link } from 'react-router'

const ExploreMyWork = () => {
  return (
    <section id='ExploreMyWork' className='py-[50px]'>
        <div className="container">
            <div id="Explore-Row" className='flex items-center justify-between'>
                {/* ---------------Right Side-------------- */}
                <div>
                    <p className='font-poppins text-Primary text-lg font-semibold uppercase'>View My projects</p>
                    <h2 className='font-soldier text-Primary lg:text-[148px] text-[64px] font-medium uppercase leading-[100%] w-[500px] mt-[50px]'>Explore my work</h2>
                </div>
                {/* ---------------Left Side-------------- */}
                <div>
                    <Magnet padding={5} magnetStrength={30}>
                        <Link to={'/projects'} className='hover-brown relative w-[200px] h-[200px] rounded-full border-1 border-coffee mt-10 flex items-center justify-center rotate-[-25deg] cursor-pointer hover:rotate-0 hover:bg-coffee duration-[.3s] group'>
                            <span className='absolute top-[-15px] left-0 w-full h-[200px] rotate-[-85deg] group-hover:rotate-0 group-hover:top-0 duration-[.3s] rounded-full border-1 border-coffee'></span>
                            <p className='text-4xl text-second text-center font-soldier group-hover:text-brand duration-[.3s]'>Explore <br /> my Work</p>
                        </Link>
                    </Magnet>
                    <p className='font-poppins text-second lg:text-xl text-lg lg:w-[400px] uppercase mt-10'>Explore my creative journey, where passion meets the art of crafting engaging digital experiences.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExploreMyWork