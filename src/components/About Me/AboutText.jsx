import React from 'react'

const AboutText = () => {
  return (
    <>
    <div id='AboutMeText'>
        <div className="container">
            <div id="AboutTextRow">
                <div id='Text' className='w-[600px] flex flex-col gap-7'>
                    <h2 className='text-6xl text-Primary font-soldier'>Hello!</h2>
                    <p className='text-2xl text-second font-poppins font-normal leading-[150%]'>I’m <span className='text-coffee font-medium'>Munna,</span> a passionate <span className='text-coffee font-medium'>frontend developer</span> with a strong focus on building modern, responsive, and visually engaging web applications. I enjoy turning ideas into digital <span className='text-coffee font-medium'>experiences</span> that not only look good but also feel intuitive and smooth to use. My core strengths lie in writing efficient code, and keeping designs user-centered.</p>
                    <p className='text-2xl text-second font-poppins font-normal leading-[150%]'>I’m currently learning <span className='text-coffee font-medium'>backend development</span> to become a full-stack developer, aiming to create complete solutions that combine great design with <span className='text-coffee font-medium'>powerful functionality.</span> With curiosity driving me and code as my creative tool, I’m always excited to learn, grow, and collaborate on impactful projects.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutText