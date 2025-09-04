import React from 'react'
import { FaRegStar } from 'react-icons/fa'
// ---------Project images 
import ProjectImg1 from '../../assets/images/Project1.jpg'
import NoteAppThumb from '../../assets/images/NoteAppThumb.png'
import HectoCommerce from '../../assets/images/HectoThumbnail.png'
import prideAgency from '../../assets/images/PrideAgencyThumb.png'
import appManagement from '../../assets/images/AppManagementThumb.png'

import ProjectImg2 from '../../assets/images/Project2.png'
import ProjectImg3 from '../../assets/images/Project3.png'
// ------------Icons----------
import ReactIcon from '../../assets/images/react.svg'
import FigmaIcon from '../../assets/images/FigmaIcon.svg'
import TailwindCss from '../../assets/images/TailwindCssIcon.svg'
import reduxIcon from '../../assets/images/ReduxIcon.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import CssIcon from '../../assets/images/CssIcon.svg'
import Bootstrap from '../../assets/images/BootStrapIcon.svg'
import firebase from '../../assets/images/FirebaseIcon.svg'

import Magnet from '../effects/Magnet'
import BlurText from '../effects/BlurText'
import { GrTechnology } from 'react-icons/gr'
import { Link } from 'react-router'
const AllProjects = () => {

    const MyProjects = [
    {
      'ProjectImage' : ProjectImg1,
      'ProjectName' : 'nexton e - commerce',
      'Description' : 'Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style',
      'technologies' : [ReactIcon , TailwindCss , JsIcon , reduxIcon ,FigmaIcon , HtmlIcon , CssIcon],
      'Direction': 'lg:flex-row',
      'AosDir' : 'fade-right',
      'liveLink' : 'https://nexton-e-commerce-chi.vercel.app/',
      'GithubRepo' : 'https://github.com/Munna-Scriptz/Nexton-E-Commerce.git'
    },
    {
      'ProjectImage' : HectoCommerce,
      'ProjectName' : 'Hecto E-Commerce',
      'Description' : 'The Hecto E-Commerce project is a responsive 15-page website showcasing stylish furniture with a clean, user-friendly interface. Built with React.js, Tailwind CSS, Redux, and Firebase, it delivers a seamless shopping experience with smooth navigation, interactive components, and API integrations, highlighting advanced web development skills.',
      'technologies' : [ReactIcon , TailwindCss , JsIcon , reduxIcon , FigmaIcon , HtmlIcon , CssIcon],
      'Direction': 'lg:flex-row-reverse',
      'AosDir' : 'fade-left',
      'liveLink' : 'https://hecto-e-commerce.vercel.app/',
      'GithubRepo' : 'https://github.com/Munna-Scriptz/Hecto-E-Commerce.git',
    },
    {
      'ProjectImage' : NoteAppThumb,
      'ProjectName' : 'Eclipse Note App',
      'Description' : 'A responsive Note App built entirely with React JS, Tailwind CSS, and Firebase Realtime Database, featuring secure authentication, clean UI, and smooth note management. It includes create, edit, delete, and recover from bin options with real-time data sync.',
      'technologies' : [ReactIcon , TailwindCss , JsIcon , reduxIcon ,firebase , HtmlIcon , CssIcon],
      'Direction': 'lg:flex-row',
      'AosDir' : 'fade-right',
      'liveLink' : 'https://note-app-pi-flame.vercel.app',
      'GithubRepo' : 'https://note-app-pi-flame.vercel.app'
    },
    {
      'ProjectImage' : prideAgency,
      'ProjectName' : 'Pride Agency Domain Site',
      'Description' : 'A fully responsive Domain Hosting website built with React JS and Tailwind CSS, designed with a clean and modern UI. It showcases hosting plans, services, and features in a professional single landing page layout.',
      'technologies' : [ReactIcon , TailwindCss , JsIcon , reduxIcon ,firebase , HtmlIcon , CssIcon],
      'Direction': 'lg:flex-row-reverse',
      'AosDir' : 'fade-left',
      'liveLink' : 'https://pride-agency.vercel.app/',
      'GithubRepo' : 'https://github.com/Munna-Scriptz/web-hosing.git'
    },
    {
      'ProjectImage' : appManagement,
      'ProjectName' : 'App Management Landing Page',
      'Description' : 'A responsive Mobile App landing page built with React JS and Tailwind CSS, featuring a clean UI and modern design. It highlights how to use and manage the app with an easy-to-navigate layout.',
      'technologies' : [ReactIcon , TailwindCss , JsIcon , HtmlIcon , CssIcon],
      'Direction': 'lg:flex-row',
      'AosDir' : 'fade-right',
      'liveLink' : 'https://mobile-app-management.vercel.app/',
      'GithubRepo' : 'https://mobile-app-management.vercel.app/'
    },
    ]
  return (
    <>
        <section className='my-[112px] overflow-hidden'>
            <div className="container">
                {/* -------------Header-------------- */}
                <div id="Projects-Header-Row">
                    <div>
                        <h2 className='text-second font-soldier lg:text-[46px] md:block hidden text-[32px] font-medium text-center' data-aos="fade-up">A Collection of Work — Built with Passion</h2> 
                        <h2 className='text-second font-soldier lg:text-[46px] md:hidden block text-[32px] font-medium text-center' data-aos="fade-up">Crafting Projects Across Every Stack</h2> 
                    </div>
                    <div data-aos="fade-up" className='flex items-center justify-center'>
                        <div className='mt-[40px] flex flex-wrap items-center gap-[16px]'>
                            <button className='bg-coffee py-[12px] px-[16px] shadow-lg duration-[.3s] text-white flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-xs font-semibold cursor-pointer'>
                                <FaRegStar />
                                <span>All Projects</span>
                            </button>
                            <button className='bg-[#EFF2FC] active:bg-coffee active:scale-[1.1] active:text-white text-gray800 py-[12px] px-[16px] shadow-lg duration-[.3s] flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-xs font-semibold cursor-pointer'>
                                <img className='w-[20px]' src={ReactIcon} alt="React" />
                                <span>React Projects</span>
                            </button>
                            <button className='bg-[#EFF2FC] active:bg-coffee active:scale-[1.1] active:text-white text-gray800 py-[12px] px-[16px] shadow-lg duration-[.3s] flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-xs font-semibold cursor-pointer'>
                                <img className='w-[20px]' src={JsIcon} alt="React" />
                                <span>JavaScript Projects</span>
                            </button>
                            <button className='bg-[#EFF2FC] active:bg-coffee active:scale-[1.1] active:text-white text-gray800 py-[12px] px-[16px] shadow-lg duration-[.3s] flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-xs font-semibold cursor-pointer'>
                                <img className='w-[20px]' src={HtmlIcon} alt="React" />
                                <span>Html-Css Projects</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* -------------Projects Card-------------- */}
                <div id='Projects-Cards-Row' className='mt-[80px]'>
                    <div className='flex flex-col gap-20'>
                {
                    MyProjects.map((items, i)=>(
                        <div key={i} className={`flex items-center ${items.Direction} flex-col lg:gap-20 gap-5`}>
                            <div className='lg:w-[640px] w-full' data-aos={`${items.AosDir}`} data-aos-offset="200" data-aos-easing="ease-in-sine">
                                <img className='rounded-xl' src={items.ProjectImage} alt="Project Image" />
                            </div>
                            <div className='lg:w-[650px] w-full'>
                                <h2 className='font-soldier lg:text-[44px] text-[32px] text-Primary font-medium mb-4 uppercase'><BlurText text={items.ProjectName} delay={280} animateBy="words" direction="bottom"/></h2>
                                <h2 className='font-poppins lg:text-[19px] text-[14px] text-Primary font-normal mb-6'><BlurText text={items.Description} delay={50} animateBy="words" direction="bottom"/></h2>
                                
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
                                        <a href={items.liveLink} target='_blank' to={'/projects'} className='ContactButton font-poppins lg:px-[24px] py-[8px] px-[15px] font-medium lg:text-base text-sm text-Primary hover-this'>OPEN PROJECT</a>
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

            </div>
        </section>
    </>
  )
}

export default AllProjects