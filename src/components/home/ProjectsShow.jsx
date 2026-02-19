import React, { useEffect } from 'react'
// ---------Project images 
import nextonProject from '../../assets/images/Project1.jpg'
import sansaProject from '../../assets/images/sansaProject.jpg'
import HectoCommerce from '../../assets/images/HectoThumbnail.png'
import noteProject from '../../assets/images/NoteAppThumb.png'
import canvixProject from '../../assets/images/CanvixThumb.png'
// -------icons 
import { GrTechnology } from "react-icons/gr";
// -------Technologies svg 
import ReactIcon from '../../assets/images/react.svg'
import NextJsIcon from '../../assets/images/NextJsIcon.svg'
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
            'ProjectImage' : sansaProject,
            'ProjectName' : 'Sansa e - commerce',
            'Description' : 'Sansa is a full e-commerce website with 10+ paGES which provide users to order online and pick up product eastly, contain features like add to cart, search, product preview etc. Made with next js and fully responsive across all devices.',
            'technologies' : [NextJsIcon , TailwindCss , JsIcon , reduxIcon ,FigmaIcon , HtmlIcon , CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir' : 'fade-right',
            'GithubRepo' : 'https://sansa-commerce.vercel.app/'
        },
        {
            'ProjectImage' : nextonProject,
            'ProjectName' : 'nexton e - commerce',
            'Description' : 'Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style',
            'technologies' : [ReactIcon , TailwindCss , JsIcon , reduxIcon ,FigmaIcon , HtmlIcon , CssIcon],
            'Direction': 'lg:flex-row-reverse',
            'AosDir' : 'fade-left',
            'GithubRepo' : 'https://nexton-e-commerce-chi.vercel.app/'
        },
        {
            'ProjectImage' : HectoCommerce,
            'ProjectName' : 'Hecto E-Commerce',
            'Description' : 'The Hecto E-Commerce project is a responsive 15-page website showcasing stylish furniture with a clean, user-friendly interface. Built with React.js, Tailwind CSS, Redux, and Firebase, it delivers a seamless shopping experience with smooth navigation, interactive components, and API integrations, highlighting advanced web development skills.',
            'technologies' : [ReactIcon , TailwindCss , JsIcon , reduxIcon , FigmaIcon , HtmlIcon , CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir' : 'fade-right',
            'GithubRepo' : 'https://hecto-e-commerce.vercel.app/'
        },
        {
            'ProjectImage' : noteProject,
            'ProjectName' : 'Eclipse Note App',
            'Description' : 'A responsive Note App built entirely with React JS, Tailwind CSS, and Firebase Realtime Database, featuring secure authentication, clean UI, and smooth note management. It includes create, edit, delete, and recover from bin options with real-time data sync.',
            'technologies' : [JsIcon ,FigmaIcon ,Bootstrap, HtmlIcon , CssIcon],
            'Direction': 'lg:flex-row-reverse',
            'AosDir' : 'fade-left',
            'GithubRepo' : 'https://note-app-pi-flame.vercel.app/'
        },
        {
            'ProjectImage' : canvixProject,
            'ProjectName' : 'Canvix Agency',
            'Description' : 'Canvix Agency is a full multi-page website built with React JS and Tailwind CSS, designed for agencies to showcase services, portfolio, team, testimonials, blog, and contact. It features polished visuals,smooth transitions. Fully responsive across all devices, it highlights professionalism and strong content structure and usability.',
            'technologies' : [JsIcon ,FigmaIcon, Bootstrap , HtmlIcon , CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir' : 'fade-right',
            'GithubRepo' : 'https://canvix-agency.vercel.app/'
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
                                                <img src={img} alt='project Technologies' key={i}/>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='mt-7 flex items-center lg:gap-4 gap-2'>
                                    <Magnet padding={30} disabled={false} magnetStrength={5}>
                                        <Link to={'/projects'} className='ContactButton transition-trigger transition-link font-poppins lg:px-[24px] py-[8px] px-[15px] font-medium lg:text-base text-sm text-Primary hover-this'>VIEW ALL PROJECT</Link>
                                    </Magnet>
                                    <Magnet padding={10} disabled={false} magnetStrength={5}>
                                        <a href={`${items.GithubRepo}`} target='_blank' className='DownloadCv font-poppins font-medium lg:text-base text-sm text-Primary hover-brown'>
                                            <span>LIVE LINK</span>
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