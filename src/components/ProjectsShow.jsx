import React from 'react'
import ProjectImg1 from '../assets/images/Project1.jpg'
import { GrTechnology } from "react-icons/gr";
import ReactIcon from '../assets/images/react.svg'
import FigmaIcon from '../assets/images/FigmaIcon.svg'
import TailwindCss from '../assets/images/TailwindCssIcon.svg'
import JsIcon from '../assets/images/JsIcon.jpg'
import HtmlIcon from '../assets/images/HtmlIcon.svg'
import CssIcon from '../assets/images/CssIcon.svg'


const ProjectsShow = () => {
  return (

    <>
        <div className='flex items-center gap-25 px-10'>
            <div className='w-[640px]'>
                <img className='rounded-xl' src={ProjectImg1} alt="Project Image" />
            </div>
            {/* -------Project Details  */}
            <div className='w-[650px]'>
                <h2 className='font-soldier text-[44px] text-Primary font-medium mb-4'>NEXTON E-COMMERCE</h2>
                <h2 className='font-poppins text-[19px] text-Primary font-normal mb-7'>Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style</h2>
                
                <div className='flex items-center gap-4'>
                    <p className='font-poppins text-[19px] text-second font-medium flex items-center gap-2'><GrTechnology /> Tools Used :</p>
                    <div className='w-[30px] flex items-center gap-2'>
                        <img src={ReactIcon} alt="Icon" />
                        <img src={TailwindCss} alt="Icon" />
                        <img src={JsIcon} alt="Icon" />
                        <img src={FigmaIcon} alt="Icon" />
                        <img src={HtmlIcon} alt="Icon" />
                        <img src={CssIcon} alt="Icon" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectsShow