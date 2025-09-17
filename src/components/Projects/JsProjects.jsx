import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import Magnet from '../effects/Magnet'
import BlurText from '../effects/BlurText'
import { GrTechnology } from 'react-icons/gr'
import { BiCategory } from 'react-icons/bi'
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
import AosIcon from '../../assets/images/AosIcon.png'
import ProjectImg1 from '../../assets/images/Project1.jpg'
import NoteAppThumb from '../../assets/images/NoteAppThumb.png'
import HectoCommerce from '../../assets/images/HectoThumbnail.png'
import prideAgency from '../../assets/images/PrideAgencyThumb.png'
import appManagement from '../../assets/images/AppManagementThumb.png'
const JsProjects = () => {
    const JsProjectsData = [
        {
          'ProjectImage' : ProjectImg1,
          'ProjectName' : 'nexton e - commerce',
          'Description' : 'Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style',
          'technologies' : [ReactIcon , TailwindCss , JsIcon , reduxIcon ,FigmaIcon , HtmlIcon , CssIcon],
          'type' : 'E-Commerce',
          'liveLink' : 'https://nexton-e-commerce-chi.vercel.app/',
          'GithubRepo' : 'https://github.com/Munna-Scriptz/Nexton-E-Commerce.git'
        },
        {
          'ProjectImage' : HectoCommerce,
          'ProjectName' : 'Hecto E-Commerce',
          'Description' : 'The Hecto E-Commerce project is a responsive 15-page website showcasing stylish furniture with a clean, user-friendly interface. Built with React.js, Tailwind CSS, Redux, and Firebase, it delivers a seamless shopping experience with smooth navigation, interactive components, and API integrations, highlighting advanced web development skills.',
          'technologies' : [ReactIcon , TailwindCss , JsIcon , reduxIcon , FigmaIcon , HtmlIcon , CssIcon],
          'type' : 'E-Commerce',
          'liveLink' : 'https://hecto-e-commerce.vercel.app/',
          'GithubRepo' : 'https://github.com/Munna-Scriptz/Hecto-E-Commerce.git',
        },
        {
          'ProjectImage' : NoteAppThumb,
          'ProjectName' : 'Eclipse Note App',
          'Description' : 'A responsive Note App built entirely with React JS, Tailwind CSS, and Firebase Realtime Database, featuring secure authentication, clean UI, and smooth note management. It includes create, edit, delete, and recover from bin options with real-time data sync.',
          'technologies' : [ReactIcon , TailwindCss , JsIcon , reduxIcon ,firebase , HtmlIcon , CssIcon],
          'type' : 'Note App',
          'liveLink' : 'https://note-app-pi-flame.vercel.app',
          'GithubRepo' : 'https://note-app-pi-flame.vercel.app'
        },
        {
          'ProjectImage' : prideAgency,
          'ProjectName' : 'Pride Agency Domain Site',
          'Description' : 'A fully responsive Domain Hosting website built with React JS and Tailwind CSS, designed with a clean and modern UI. It showcases hosting plans, services, and features in a professional single landing page layout.',
          'technologies' : [ReactIcon , TailwindCss , JsIcon , AosIcon , reduxIcon , HtmlIcon , CssIcon],
          'type' : 'Agency Landing Page',
          'liveLink' : 'https://pride-agency.vercel.app/',
          'GithubRepo' : 'https://github.com/Munna-Scriptz/web-hosing.git'
        },
        {
          'ProjectImage' : appManagement,
          'ProjectName' : 'App Management Landing Page',
          'Description' : 'A responsive Mobile App landing page built with React JS and Tailwind CSS, featuring a clean UI and modern design. It highlights how to use and manage the app with an easy-to-navigate layout.',
          'technologies' : [ReactIcon , TailwindCss ,AosIcon , JsIcon , HtmlIcon , CssIcon],
          'type' : 'Landing Page',
          'liveLink' : 'https://mobile-app-management.vercel.app/',
          'GithubRepo' : 'https://mobile-app-management.vercel.app/'
        },
    ]
  return (
    <>
        <section id='JsProjects' className='mt-[82px]'>
            <div>
                <div id="JsProjects-Row">
                    {/* ----------------------JavaScript Projects Header------------------------- */}
                    <div className='flex items-center justify-center gap-5 mb-[60px]'>
                        <h2 className='text-second font-soldier lg:text-[46px] md:block hidden text-[32px] font-medium text-center' data-aos="fade-up"> JavaScript Projects — Built with Passion</h2> 
                        <img className='w-[45px]' src={JsIcon} alt="JsIcon" />
                        <h2 className='text-second font-soldier lg:text-[46px] md:hidden block text-[32px] font-medium text-center' data-aos="fade-up">JavaScript Projects</h2> 
                    </div>
                    {/* ----------------------JavaScript Projects------------------------- */}
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center'>
                        {
                            JsProjectsData.map((items, i)=>(
                                <div key={i} className={`flex items-center flex-col lg:gap-7 gap-5 h-[700px]`}>
                                    <div className='lg:w-[560px] w-full'>
                                        <img className='rounded-xl' src={items.ProjectImage} alt="Project Image" />
                                    </div>
                                    
                                    <div className='lg:w-[560px] w-full'>
                                        <h2 className='font-soldier lg:text-[36px] text-[32px] text-Primary font-medium mb-4 uppercase'><BlurText text={items.ProjectName} delay={280} animateBy="words" direction="bottom"/></h2>
                                        <h2 className='font-poppins lg:text-[17px] text-[14px] text-Primary font-normal mb-4'><BlurText text={items.Description} delay={50} animateBy="words" direction="bottom"/></h2>
                                        <div className='flex items-center gap-4 mb-4'>
                                            <p className='font-poppins lg:text-[18px] text-[13px] text-second font-medium flex items-center gap-2'><BiCategory /> Type : {items.type}</p>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <p className='font-poppins lg:text-[18px] text-[14px] text-second font-medium flex items-center gap-2'><GrTechnology /> Tools Used :</p>
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

export default JsProjects