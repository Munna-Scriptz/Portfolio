import React from 'react'
import ScrollFloat from '../components/common/ScrollFloat';

const Projects = () => {
  return (
    <>
    <section id="Projects">
        <div className="container">

            <div className="header">
                <div className='flex items-center justify-center font-poppins text-Primary font-medium text-2xl'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>MY PROJECTS</ScrollFloat></div>
                <div className='flex items-center justify-center font-soldier text-Primary font-medium text-4xl tracking-[5px] mt-5'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=70%' scrollEnd='bottom bottom-=40%' stagger={0.03}>EXPLORE MY PROJECTS</ScrollFloat></div>
            </div>

            
        </div>
    </section>
    
    </>
  )
}

export default Projects