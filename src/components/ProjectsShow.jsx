import React from 'react'
import ProjectImg1 from '../assets/images/Project1.jpg'
import ProjectImg2 from '../assets/images/Project2.png'

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
            'ProjectImage' : ProjectImg1,
            'ProjectName' : 'nexton e - commerce',
            'Description' : 'Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style',
            'technologies1' : ReactIcon,
            'technologies2' : TailwindCss,
            'technologies3' : JsIcon,
            'technologies4' : FigmaIcon,
            'technologies5' : HtmlIcon,
            'technologies6' : CssIcon,
        },
        {
            'ProjectImage' : ProjectImg2,
            'ProjectName' : 'future scooter',
            'Description' : 'A modern and vibrant landing page for an E-Scooter brand, highlighting features, community engagement, and sleek UI design. Built for performance and visual appeal, perfect for urban mobility startups',
            'technologies1' : ReactIcon,
            'technologies2' : TailwindCss,
            'technologies3' : JsIcon,
            'technologies4' : FigmaIcon,
            'technologies5' : HtmlIcon,
            'technologies6' : CssIcon,
            'Direction': 'flex-row-reverse'
        },
        {
            'ProjectName' : 'nexton e - commerce',
            'Description' : 'Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style',
            'technologies' : [ReactIcon , TailwindCss , JsIcon ,FigmaIcon , HtmlIcon , CssIcon]
        },
        {
            'ProjectName' : 'nexton e - commerce',
            'Description' : 'Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style',
            'technologies' : [ReactIcon , TailwindCss , JsIcon ,FigmaIcon , HtmlIcon , CssIcon],
            'Direction': 'flex-row-reverse'
        }
    ]
  return (

    <>
        <div>
            {/* -------Project Details  */}
            <div className='flex flex-col gap-20 px-12'>
                {
                    MyProjects.map((items, i)=>(
                        <div key={i} className={`flex items-center ${items.Direction} gap-20`}>
                            <div className='w-[640px]'>
                                <img className='rounded-xl' src={items.ProjectImage} alt="Project Image" />
                            </div>
                            <div className='w-[650px]'>
                                <h2 className='font-soldier text-[44px] text-Primary font-medium mb-4 uppercase'>{items.ProjectName}</h2>
                                <h2 className='font-poppins text-[19px] text-Primary font-normal mb-6'>{items.Description}</h2>
                                
                                <div className='flex items-center gap-4'>
                                    <p className='font-poppins text-[19px] text-second font-medium flex items-center gap-2'><GrTechnology /> Tools Used :</p>
                                    <div className='w-[30px] flex items-center gap-2'>
                                        <img src={items.technologies1} alt="Icon" />
                                        <img src={items.technologies2} alt="Icon" />
                                        <img src={items.technologies3} alt="Icon" />
                                        <img src={items.technologies4} alt="Icon" />
                                        <img src={items.technologies5} alt="Icon" />
                                        <img src={items.technologies6} alt="Icon" />
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
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default ProjectsShow