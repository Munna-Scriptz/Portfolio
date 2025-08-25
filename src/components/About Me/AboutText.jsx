import React from 'react'
import { Link } from 'react-router'
import Magnet from '../common/Magnet'

const AboutText = () => {
  return (
    <>
    <div id='AboutMeText'>
        <div className="container">
            <div id="AboutTextRow">
                <div id='Text' className='lg:w-[600px] flex flex-col gap-7'>
                    <h2 className='lg:text-6xl text-5xl text-Primary font-soldier'>Hello!</h2>
                    <p className='lg:text-2xl text-second font-poppins font-normal leading-[150%]'>I’m <span className='text-coffee font-medium'>Munna,</span> a passionate <span className='text-coffee font-medium'>frontend developer</span> with a strong focus on building modern, responsive, and visually engaging web applications. I enjoy turning ideas into digital <span className='text-coffee font-medium'>experiences</span> that not only look good but also feel intuitive and smooth to use. My core strengths lie in writing efficient code, and keeping designs user-centered.</p>
                    <p className='lg:text-2xl text-second font-poppins font-normal leading-[150%]'>I’m currently learning <span className='text-coffee font-medium'>backend development</span> to become a full-stack developer, aiming to create complete solutions that combine great design with <span className='text-coffee font-medium'>powerful functionality.</span> With curiosity driving me and code as my creative tool, I’m always excited to learn, grow, and collaborate on impactful projects.</p>
                    {/* -----------Explore Work----------- */}
                    <Magnet padding={5} magnetStrength={30}>
                        <Link to={'/'} className='hover-brown relative w-[200px] h-[200px] rounded-full border-1 border-coffee mt-10 flex items-center justify-center rotate-[-25deg] cursor-pointer hover:rotate-0 hover:bg-coffee duration-[.3s] group'>
                            <span className='absolute top-[-15px] left-0 w-full h-[200px] rotate-[-85deg] group-hover:rotate-0 group-hover:top-0 duration-[.3s] rounded-full border-1 border-coffee'></span>
                            <p className='text-4xl text-second text-center font-soldier group-hover:text-brand duration-[.3s]'>Explore <br /> my Work</p>
                        </Link>
                    </Magnet>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutText