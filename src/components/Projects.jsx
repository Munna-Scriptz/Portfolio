import React from 'react'
import ScrollFloat from '../components/common/ScrollFloat';
import ProjectsShow from './ProjectsShow';

const Projects = () => {
  return (
    <>
    <section id="Projects" className='lg:mt-0 mt-60'>
      <div>
          <div className="header mb-20">
            <div className='flex items-center justify-center font-poppins text-Primary font-medium lg:text-2xl text-lg'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>MY PROJECTS</ScrollFloat></div>
            <div className='flex items-center justify-center font-soldier text-Primary font-medium lg:text-4xl text-2xl tracking-[5px] lg:mt-5 mt-3'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=70%' scrollEnd='bottom bottom-=40%' stagger={0.03}>EXPLORE MY PROJECTS</ScrollFloat></div>
          </div>
          <ProjectsShow/>
      </div>
        
    </section>
    
    </>
  )
}

export default Projects