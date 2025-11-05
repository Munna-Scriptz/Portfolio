import React, { useEffect, useState } from 'react'
import Magnet from '../effects/Magnet'
import BlurText from '../effects/BlurText'
import { GrTechnology } from 'react-icons/gr'
import { BiCategory } from 'react-icons/bi'
import { useInView } from 'react-intersection-observer'
// ------------Icons----------
import ReactIcon from '../../assets/images/react.svg'
import FigmaIcon from '../../assets/images/FigmaIcon.svg'
import TailwindCss from '../../assets/images/TailwindCssIcon.svg'
import reduxIcon from '../../assets/images/ReduxIcon.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import CssIcon from '../../assets/images/CssIcon.svg'
import firebase from '../../assets/images/FirebaseIcon.svg'
import AosIcon from '../../assets/images/AosIcon.png'

// ---------Project images 
import ProjectImg1 from '../../assets/images/Project1.jpg'
import NoteAppThumb from '../../assets/images/NoteAppThumb.png'
import HectoCommerce from '../../assets/images/HectoThumbnail.png'
import prideAgency from '../../assets/images/PrideAgencyThumb.png'
import appManagement from '../../assets/images/AppManagementThumb.png'
import taskManage from '../../assets/images/TaskManageMentScroll.jpeg'
import taskManageV2 from '../../assets/images/taskManagementV2.jpeg'
import escolaEducation from '../../assets/images/EscolaEduImg.jpeg'
import safwanPortfolio from '../../assets/images/safwanPortfolioProject.jpeg'
import safwanPortfolioV2 from '../../assets/images/safwanV2Scroll.png'
import photographerPortfolio from '../../assets/images/photographerScroll.jpeg'
import canvixAgency from '../../assets/images/canvixProjectScroll.png'
import goTrip from '../../assets/images/goTripScroll.png'
import rexScale from '../../assets/images/rexScaleReal.png'
import rexMotors from '../../assets/images/rexMotors.png'
import SkeletonLoader from '../effects/SkeletonLoader'

const ReactProjects = ({ proLength }) => {
    const MyProjects = [
        {
            'ProjectImage': ProjectImg1,
            'ProjectName': 'nexton e - commerce',
            'Description': 'Nexton is a sleek and modern e-commerce platform designed to offer a smooth shopping experience with dynamic product listings, variant selection, and responsive design. Built with React and crafted for performance and style',
            'technologies': [ReactIcon, TailwindCss, JsIcon, reduxIcon, FigmaIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir': 'fade-right',
            'type': 'E-Commerce',
            'liveLink': 'https://nexton-e-commerce-chi.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz/Nexton-E-Commerce.git'
        },
        {
            'ProjectImage': HectoCommerce,
            'ProjectName': 'Hecto E-Commerce',
            'Description': 'The Hecto E-Commerce project is a responsive 15-page website showcasing stylish furniture with a clean, user-friendly interface. Built with React.js, Tailwind CSS, Redux, and Firebase, it delivers a seamless shopping experience with smooth navigation, interactive components, and API integrations, highlighting advanced web development skills.',
            'technologies': [ReactIcon, TailwindCss, JsIcon, reduxIcon, FigmaIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row-reverse',
            'AosDir': 'fade-left',
            'type': 'E-Commerce',
            'liveLink': 'https://hecto-e-commerce.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz/Hecto-E-Commerce.git',
        },
        {
            'ProjectImage': NoteAppThumb,
            'ProjectName': 'Eclipse Note App',
            'Description': 'A responsive Note App built entirely with React JS, Tailwind CSS, and Firebase Realtime Database, featuring secure authentication, clean UI, and smooth note management. It includes create, edit, delete, and recover from bin options with real-time data sync.',
            'technologies': [ReactIcon, TailwindCss, JsIcon, reduxIcon, firebase, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir': 'fade-right',
            'type': 'Note App',
            'liveLink': 'https://note-app-pi-flame.vercel.app',
            'GithubRepo': 'https://note-app-pi-flame.vercel.app'
        },
        {
            'ProjectImage': prideAgency,
            'ProjectName': 'Pride Agency Domain Site',
            'Description': 'A fully responsive Domain Hosting website built with React JS and Tailwind CSS, designed with a clean and modern UI. It showcases hosting plans, services, and features in a professional single landing page layout.',
            'technologies': [ReactIcon, TailwindCss, JsIcon, AosIcon, reduxIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row-reverse',
            'AosDir': 'fade-left',
            'type': 'Agency Landing Page',
            'liveLink': 'https://pride-agency.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz/web-hosing.git'
        },
        {
            'ProjectImage': appManagement,
            'ProjectName': 'App Management Landing Page',
            'Description': 'A responsive Mobile App landing page built with React JS and Tailwind CSS, featuring a clean UI and modern design. It highlights how to use and manage the app with an easy-to-navigate layout.',
            'technologies': [ReactIcon, TailwindCss, AosIcon, JsIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir': 'fade-right',
            'type': 'Landing Page',
            'liveLink': 'https://mobile-app-management.vercel.app/',
            'GithubRepo': 'https://mobile-app-management.vercel.app/'
        },
    ]
    const MyProjectsScroll = [
        {
            'ProjectImage': rexScale,
            'ProjectName': 'RexScale Real-Estate',
            'Description': 'RexScale Travel is a modern multi-page website built with React JS, Tailwind CSS, and advanced UI components, designed to inspire and simplify Real estate businesses. With pages like Home, Properties, contact and about.',
            'technologies': [ReactIcon, TailwindCss, FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row-reverse',
            'AosDir': 'fade-left',
            'type': 'E-commerce',
            'liveLink': 'https://rex-scale-real-estate.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz'
        },
        {
            'ProjectImage': canvixAgency,
            'ProjectName': 'Canvix Agency',
            'Description': 'Canvix Agency is a full multi-page website built with React JS and Tailwind CSS, designed for agencies to showcase services, portfolio, team, testimonials, blog, and contact. It features polished visuals, refined layout, and smooth transitions. Fully responsive across all devices, it highlights professionalism and strong content structure and usability.',
            'technologies': [ReactIcon, TailwindCss, FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir': 'fade-right',
            'type': 'Agency Full Website',
            'liveLink': 'https://canvix-agency.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz'
        },
        {
            'ProjectImage': rexMotors,
            'ProjectName': 'Rex-Motors',
            'Description': 'Rex-Motors is a E-commerce landing page website built with React JS and Tailwind CSS, designed to provide a seamless UI/UX experience. Featuring pages like About, responsive across all devices.',
            'technologies': [ReactIcon, TailwindCss, FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row-reverse',
            'AosDir': 'fade-left',
            'type': 'E-commerce',
            'liveLink': 'https://rex-motors.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz'
        },
        {
            'ProjectImage': escolaEducation,
            'ProjectName': 'Escola Education Full Website',
            'Description': 'Escola Education is a multi-page educational website built with React JS and Tailwind CSS, designed to provide a seamless learning experience. Featuring pages like About, Services, Service Details, Blog, and Contact, it’s fully responsive and crafted with a clean, engaging UI for smooth navigation across all devices.',
            'technologies': [ReactIcon, TailwindCss, FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir': 'fade-right',
            'type': 'Educational Full Website',
            'liveLink': 'https://escola-education.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz'
        },
        {
            'ProjectImage': escolaEducation,
            'ProjectName': 'Escola Education Full Website',
            'Description': 'Escola Education is a multi-page educational website built with React JS and Tailwind CSS, designed to provide a seamless learning experience. Featuring pages like About, Services, Service Details, Blog, and Contact, it’s fully responsive and crafted with a clean, engaging UI for smooth navigation across all devices.',
            'technologies': [ReactIcon, TailwindCss, FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row-reverse',
            'AosDir': 'fade-left',
            'type': 'Educational Full Website',
            'liveLink': 'https://escola-education.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz'
        },
        {
            'ProjectImage': goTrip,
            'ProjectName': 'GoTrip Travel',
            'Description': 'GoTrip Travel is a modern multi-page website built with React JS, Tailwind CSS, and advanced UI components, designed to inspire and simplify travel planning. With pages like Home, Destinations, Services, Blog, and Contact, it features a cool and engaging interface, smooth navigation, and full responsiveness across all devices for an enjoyable browsing experience.',
            'technologies': [ReactIcon, TailwindCss, FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir': 'fade-right',
            'type': 'Hotel Booking Full Website',
            'liveLink': 'https://canvix-agency.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz'
        },
        {
            'ProjectImage': taskManage,
            'ProjectName': 'Task Management Assistant',
            'Description': 'The Task Management Assistant is a modern landing page built with React JS and enhanced with AOS animations for smooth interactions. Designed to be fully responsive, it delivers a clean and engaging experience across all devices.',
            'technologies': [ReactIcon, TailwindCss, FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row-reverse',
            'AosDir': 'fade-left',
            'type': 'Web Page',
            'liveLink': 'https://task-management-assistant.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz'
        },
        {
            'ProjectImage': taskManageV2,
            'ProjectName': 'Task Management Assistant V2',
            'Description': 'The Task Management Assistant is a modern landing page built with React JS and enhanced with AOS animations for smooth interactions. Designed to be fully responsive, it delivers a clean and engaging experience across all devices.',
            'technologies': [ReactIcon, TailwindCss, FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir': 'fade-right',
            'type': 'Web Page',
            'liveLink': 'https://task-management-assistant.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz'
        },
        {
            'ProjectImage': safwanPortfolio,
            'ProjectName': 'UI/UX Designer Portfolio',
            'Description': 'This UI/UX Designer Portfolio is a fully responsive landing page built with React JS and Tailwind CSS, designed to showcase creative projects and design expertise. With a clean, modern layout and smooth navigation, it highlights both aesthetic visuals and user-focused functionality across all devices.',
            'technologies': [ReactIcon, TailwindCss, FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row-reverse',
            'AosDir': 'fade-left',
            'type': 'Portfolio',
            'liveLink': 'https://safwan-portfolio-neon.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz'
        },
        {
            'ProjectImage': safwanPortfolioV2,
            'ProjectName': 'UI/UX Designer Portfolio V2',
            'Description': 'This UI/UX Designer Portfolio V2 is a redesigned and fully responsive landing page built with React JS and CSS. It includes sections like About, Services, Projects, and Contact, crafted with cleaner visuals, smoother navigation, and better responsiveness across all devices to showcase design skills more effectively.',
            'technologies': [ReactIcon, TailwindCss, AosIcon, FigmaIcon, JsIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row',
            'AosDir': 'fade-right',
            'type': 'Portfolio',
            'liveLink': 'https://safwan2-portfolio-v2.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz'
        },
        {
            'ProjectImage': photographerPortfolio,
            'ProjectName': 'Photographer Portfolio V2',
            'Description': 'This Photographer Portfolio is a responsive landing page built with React JS and Tailwind CSS, showcasing a professional photographer’s creativity and skills. With sections like About, Gallery, Services, and Contact, it delivers a clean layout, engaging visuals, and smooth navigation across all devices.',
            'technologies': [ReactIcon, TailwindCss, FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
            'Direction': 'lg:flex-row-reverse',
            'AosDir': 'fade-left',
            'type': 'Portfolio',
            'liveLink': 'https://photographer-portfolio-eight-green.vercel.app/',
            'GithubRepo': 'https://github.com/Munna-Scriptz'
        },
    ]

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (typeof proLength === "function") {
            proLength(MyProjects.length + MyProjectsScroll.length);
        }
    }, [proLength]);
    return (
        <>
            <section id='React-Projects' className='mt-[82px]'>
                {/* ----------------------React Projects Header------------------------- */}
                <div className='flex items-center justify-center gap-5 mb-[60px]'>
                    <h2 className='text-second font-soldier lg:text-[46px] md:block hidden text-[32px] font-medium text-center' data-aos="fade-up"> React Projects — UI That Reacts to You</h2>
                    <img className='w-[45px]' src={ReactIcon} alt="JsIcon" />
                    <h2 className='text-second font-soldier lg:text-[46px] md:hidden block text-[32px] font-medium text-center' data-aos="fade-up">React Projects</h2>
                </div>
                {/* ----------------------React Projects------------------------- */}
                <div className='flex flex-col gap-20'>
                    <div className='flex flex-col gap-15' ref={ref}>
                        {inView ?

                            MyProjects.map((items, i) => (
                                <div key={i} className={`flex items-center ${items.Direction} flex-col lg:gap-20 gap-5`}>
                                    <div className='lg:w-[640px] w-full' data-aos={`${items.AosDir}`} data-aos-offset="200" data-aos-easing="ease-in-sine">
                                        <img className='rounded-xl' src={items.ProjectImage} alt="Project Image" />
                                    </div>
                                    <div className='lg:w-[650px] w-full'>
                                        <h2 className='font-soldier lg:text-[44px] text-[32px] text-Primary font-medium mb-4 uppercase'><BlurText text={items.ProjectName} delay={280} animateBy="words" direction="bottom" /></h2>
                                        <h2 className='font-poppins lg:text-[19px] text-[14px] text-Primary font-normal mb-4'><BlurText text={items.Description} delay={50} animateBy="words" direction="bottom" /></h2>
                                        <div className='flex items-center gap-4 mb-4'>
                                            <p className='font-poppins lg:text-[19px] text-[13px] text-second font-medium flex items-center gap-2'><BiCategory /> Type : {items.type}</p>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <p className='font-poppins lg:text-[19px] text-[14px] text-second font-medium flex items-center gap-2'><GrTechnology /> Tools Used :</p>
                                            <div className='lg:w-[30px] w-[22px] flex items-center gap-2'>
                                                {
                                                    items.technologies.map((img, i) => (
                                                        <img src={img} key={i} />
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
                            :
                            <SkeletonLoader />
                        }
                    </div>
                    {/* ----------------------------------Hover Scroll Project------------------------------- */}
                    <div className='flex flex-col gap-15' ref={ref}>
                        {
                            inView ?
                                MyProjectsScroll.map((items, i) => (
                                    <div key={i} id='HoverDivImg' className={`flex items-center ${items.Direction} flex-col lg:gap-20 gap-5`}>
                                        <div className='lg:w-[640px] w-full' data-aos={`${items.AosDir}`} data-aos-offset="200" data-aos-easing="ease-in-sine">
                                            <div className='screen cursor-none'>
                                                <img className='rounded-xl' src={items.ProjectImage} alt="Project Image" />
                                            </div>
                                            <h2 className='text-center mt-2 text-sm text-[#646464] font-medium font-poppins lg:block hidden'>Hover On the image To Preview</h2>
                                            <h2 className='text-center mt-2 text-sm text-[#646464] font-medium font-poppins lg:hidden block'>Tap On the image To Preview</h2>
                                        </div>
                                        <div className='lg:w-[650px] w-full'>
                                            <h2 className='font-soldier lg:text-[44px] text-[32px] text-Primary font-medium mb-4 uppercase'><BlurText text={items.ProjectName} delay={280} animateBy="words" direction="bottom" /></h2>
                                            <h2 className='font-poppins lg:text-[19px] text-[14px] text-Primary font-normal mb-4'><BlurText text={items.Description} delay={50} animateBy="words" direction="bottom" /></h2>

                                            <div className='flex items-center gap-4 mb-4'>
                                                <p className='font-poppins lg:text-[19px] text-[13px] text-second font-medium flex items-center gap-2'><BiCategory /> Type : {items.type}</p>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <p className='font-poppins lg:text-[19px] text-[14px] text-second font-medium flex items-center gap-2'><GrTechnology /> Tools Used :</p>
                                                <div className='lg:w-[30px] w-[22px] flex items-center gap-2'>
                                                    {
                                                        items.technologies.map((img, i) => (
                                                            <img src={img} key={i} />
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
                                :
                                <SkeletonLoader />
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReactProjects