import React from 'react'
// ---------Project images 
import ProjectImg1 from '../assets/images/Project1.jpg'
import ProjectImg2 from '../assets/images/Project2.png'
import ProjectImg3 from '../assets/images/Project3.png'
import ProjectImg4 from '../assets/images/Project4.png'
// -------icons 
import { GrTechnology } from "react-icons/gr";
// -------Technologies svg 
import ReactIcon from '../assets/images/react.svg'
import FigmaIcon from '../assets/images/FigmaIcon.svg'
import TailwindCss from '../assets/images/TailwindCssIcon.svg'
import JsIcon from '../assets/images/JsIcon.jpg'
import HtmlIcon from '../assets/images/HtmlIcon.svg'
import CssIcon from '../assets/images/CssIcon.svg'
import Bootstrap from '../assets/images/BootStrapIcon.svg'
// -----other Import 
import Magnet from './common/Magnet'
import { Link } from 'react-router';


const ProjectsShow = () => {

    const MyProjects = [

        {
            'ProjectImage' : ProjectImg1,
            'ProjectName' : 'nexton e - commerce',
            'Description' : 'Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style',
            'technologies' : [ReactIcon , TailwindCss , JsIcon ,FigmaIcon , HtmlIcon , CssIcon]
        },
        {
            'ProjectImage' : ProjectImg2,
            'ProjectName' : 'future scooter',
            'Description' : 'A modern and vibrant landing page for an E-Scooter brand, highlighting features, community engagement, and sleek UI design. Built for performance and visual appeal, perfect for urban mobility startups',
            'technologies' : [JsIcon ,FigmaIcon ,Bootstrap, HtmlIcon , CssIcon],
            'Direction': 'flex-row-reverse'
        },
        {
            'ProjectImage' : ProjectImg3,
            'ProjectName' : 'Nescafe foods',
            'Description' : 'A stylish and modern restaurant landing page for Nescafe-themed food services. Showcases menus, deals, and cozy vibes with a clean UI, perfect for cafes and food brands',
            'technologies' : [JsIcon ,FigmaIcon, Bootstrap , HtmlIcon , CssIcon]
        },
        {
            'ProjectImage' : ProjectImg4,
            'ProjectName' : 'furniture landing page',
            'Description' : 'NexA minimal and elegant single-page website for a furniture brand, highlighting premium products with smooth UI, large visuals, and a modern layout designed for conversion',
            'technologies' : [JsIcon ,FigmaIcon ,Bootstrap, HtmlIcon , CssIcon],
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
                                        {
                                            items.technologies.map((img , i)=>(
                                                <img src={img} key={i}/>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='mt-7 flex items-center gap-4'>
                                    <Magnet padding={30} disabled={false} magnetStrength={5}>
                                        <Link className='ContactButton font-poppins font-medium text-base text-Primary'>VIEW ALL PROJECT</Link>
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