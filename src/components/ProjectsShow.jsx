import React from 'react'
import ProjectImg1 from '../assets/images/Project1.jpg'
import { GrTechnology } from "react-icons/gr";
import ReactIcon from '../assets/images/react.svg'
import FigmaIcon from '../assets/images/FigmaIcon.svg'
import TailwindCss from '../assets/images/TailwindCssIcon.svg'
import JsIcon from '../assets/images/JsIcon.jpg'
import HtmlIcon from '../assets/images/HtmlIcon.svg'
import CssIcon from '../assets/images/CssIcon.svg'
import Magnet from './common/Magnet'
import { Link } from 'react-router';


const ProjectsShow = () => {

    const MyProjects = [

        {
            'ProjectName' : 'nexton e - commerce',
            'Description' : 'Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style',
            'technologies' : [ReactIcon , TailwindCss , JsIcon ,FigmaIcon , HtmlIcon , CssIcon]
        },
        {
            'ProjectName' : 'nexton e - commerce',
            'Description' : 'Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style',
            'technologies' : [ReactIcon , TailwindCss , JsIcon ,FigmaIcon , HtmlIcon , CssIcon]
        },
        {
            'ProjectName' : 'nexton e - commerce',
            'Description' : 'Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style',
            'technologies' : [ReactIcon , TailwindCss , JsIcon ,FigmaIcon , HtmlIcon , CssIcon]
        },
    ]
    console.log(MyProjects)
  return (

    <>
        <div className='flex items-center gap-25 px-10'>
            <div className='w-[640px]'>
                <img className='rounded-xl' src={ProjectImg1} alt="Project Image" />
            </div>
            {/* -------Project Details  */}
            <div className='w-[650px]'>
                <h2 className='font-soldier text-[44px] text-Primary font-medium mb-4 uppercase'>NEXTON E-COMMERCE</h2>
                <h2 className='font-poppins text-[19px] text-Primary font-normal mb-6'>Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style</h2>
                
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
                <div className='mt-7 flex items-center gap-4'>
                    <Magnet padding={30} disabled={false} magnetStrength={5}>
                        <Link className='ContactButton font-poppins font-medium text-base text-Primary'>VIEW FULL PROJECT</Link>
                    </Magnet>
                    <Magnet padding={10} disabled={false} magnetStrength={5}>
                         <Link className='DownloadCv font-poppins font-medium text-base text-Primary'>
                             <span>GITHUB REPO</span>
                        </Link>
                    </Magnet>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectsShow