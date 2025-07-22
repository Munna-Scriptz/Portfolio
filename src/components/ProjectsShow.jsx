import React from 'react'
import ProjectImg1 from '../assets/images/Project1.jpg'


const ProjectsShow = () => {
  return (

    <>
        <div className='flex items-center justify-between'>
            <div className='w-[640px]'>
                <img className='rounded-xl' src={ProjectImg1} alt="Project Image" />
            </div>
            {/* -------Project Details  */}
            <div>
                <h2>NEXTON E-COMMERCE</h2>
            </div>
        </div>
    </>
  )
}

export default ProjectsShow