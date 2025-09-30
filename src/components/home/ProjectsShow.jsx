import React, { useEffect } from 'react'
// ---------Project images 
import ProjectImg1 from '../../assets/images/Project1.jpg'
import HectoCommerce from '../../assets/images/HectoThumbnail.png'
import ProjectImg2 from '../../assets/images/Project2.png'
import ProjectImg3 from '../../assets/images/Project3.png'
// -------icons 
import { GrTechnology } from "react-icons/gr";
// -------Technologies svg 
import ReactIcon from '../../assets/images/react.svg'
import FigmaIcon from '../../assets/images/FigmaIcon.svg'
import TailwindCss from '../../assets/images/TailwindCssIcon.svg'
import reduxIcon from '../../assets/images/ReduxIcon.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import CssIcon from '../../assets/images/CssIcon.svg'
import Bootstrap from '../../assets/images/BootStrapIcon.svg'
// -----other Import 
import Magnet from '../effects/Magnet'
import BlurText from '../effects/BlurText'
import { Link } from 'react-router';
// --------Aos 
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsShow = () => {
    // --------Aos Fun 
        useEffect(() => {
        AOS.init({
          duration: 800,
        });
    }, []);
    // --------Project Array 
    const MyProjects = [

        {
            'ProjectImage' : ProjectImg1,
            'ProjectName' : 'nexton e - commerce',
            'Description' : 'Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style',
            'technologies' : [ReactIcon , TailwindCss , JsIcon , reduxIcon ,FigmaIcon , HtmlIcon , CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir' : 'fade-right',
            'GithubRepo' : 'https://github.com/Munna-Scriptz/Nexton-E-Commerce.git'
        },
        {
            'ProjectImage' : HectoCommerce,
            'ProjectName' : 'Hecto E-Commerce',
            'Description' : 'The Hecto E-Commerce project is a responsive 15-page website showcasing stylish furniture with a clean, user-friendly interface. Built with React.js, Tailwind CSS, Redux, and Firebase, it delivers a seamless shopping experience with smooth navigation, interactive components, and API integrations, highlighting advanced web development skills.',
            'technologies' : [ReactIcon , TailwindCss , JsIcon , reduxIcon , FigmaIcon , HtmlIcon , CssIcon],
            'Direction': 'lg:flex-row-reverse',
            'AosDir' : 'fade-left',
            'GithubRepo' : 'https://github.com/Munna-Scriptz/Hecto-E-Commerce.git'
        },
        {
            'ProjectImage' : ProjectImg2,
            'ProjectName' : 'future scooter',
            'Description' : 'A modern and vibrant landing page for an E-Scooter brand, highlighting features, community engagement, and sleek UI design. Built for performance and visual appeal, perfect for urban mobility startups',
            'technologies' : [JsIcon ,FigmaIcon ,Bootstrap, HtmlIcon , CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir' : 'fade-right',
            'GithubRepo' : 'https://github.com/Munna-Scriptz/E-Scooter.git'
        },
        {
            'ProjectImage' : ProjectImg3,
            'ProjectName' : 'Nescafe foods',
            'Description' : 'A stylish and modern restaurant landing page for Nescafe-themed food services. Showcases menus, deals, and cozy vibes with a clean UI, perfect for cafes and food brands',
            'technologies' : [JsIcon ,FigmaIcon, Bootstrap , HtmlIcon , CssIcon],
            'Direction': 'lg:flex-row-reverse',
            'AosDir' : 'fade-left',
            'GithubRepo' : 'https://github.com/Munna-Scriptz/Nescafe_web.git'
        },
    ]
  return (

    <>
        <div>
            {/* -------Project Details  */}
            <div className='flex flex-col gap-20 lg:px-12 px-[24px]'>
                {
                    MyProjects.map((items, i)=>(
                        <div key={i} className={`flex items-center ${items.Direction} flex-col lg:gap-20 gap-5`}>
                            <div className='lg:w-[640px] w-full' data-aos={`${items.AosDir}`} data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <img className='rounded-xl' src={items.ProjectImage} alt="Project Image" />
                            </div>
                            <div className='lg:w-[650px] w-full'>
                                <h2 className='font-soldier lg:text-[44px] text-[32px] text-Primary font-medium mb-4 uppercase'><BlurText text={items.ProjectName} delay={280} animateBy="words" direction="bottom"/></h2>
                                <h2 className='font-poppins lg:text-[19px] text-[14px] text-Primary font-normal mb-6'><BlurText text={items.Description} delay={100} animateBy="words" direction="bottom"/></h2>
                                
                                <div className='flex items-center gap-4'>
                                    <p className='font-poppins lg:text-[19px] text-[14px] text-second font-medium flex items-center gap-2'><GrTechnology /> Tools Used :</p>
                                    <div className='lg:w-[30px] w-[22px] flex items-center gap-2'>
                                        {
                                            items.technologies.map((img , i)=>(
                                                <img src={img} key={i}/>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='mt-7 flex items-center lg:gap-4 gap-2'>
                                    <Magnet padding={30} disabled={false} magnetStrength={5}>
                                        <Link to={'/projects'} className='ContactButton transition-trigger font-poppins lg:px-[24px] py-[8px] px-[15px] font-medium lg:text-base text-sm text-Primary hover-this'>VIEW ALL PROJECT</Link>
                                    </Magnet>
                                    <Magnet padding={10} disabled={false} magnetStrength={5}>
                                        <a href={`${items.GithubRepo}`} target='_blank' className='DownloadCv font-poppins font-medium lg:text-base text-sm text-Primary hover-brown'>
                                            <span>GITHUB REPO</span>
                                        </a>
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