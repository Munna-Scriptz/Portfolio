import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <>
       <section id="Banner" className='pt-22'>
            <div className="container">
                <div className="bannerText">
                    <h1 className='font-poppins text-Primary text-[60px]'>Hi, i'm Munna</h1>
                    {/* -----animated Text------- */}
                    <div className='mt-2'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Im A Frontend Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Im A Backend Developer',
                                1000,
                                'Im A Fullstack Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '36px', color:' #161616', fontFamily: 'Poppins, sans-serif' , display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                    
                </div>
            </div>
        </section> 
    </>
  )
}

export default Banner