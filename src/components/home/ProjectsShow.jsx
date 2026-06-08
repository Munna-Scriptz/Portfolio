import React, { useEffect } from 'react'
// ---------Project images 
import nextonProject from '../../assets/images/Project1.jpg'
import sansaProject from '../../assets/images/sansaProject.jpg'
import HectoCommerce from '../../assets/images/HectoThumbnail.png'
import noteProject from '../../assets/images/NoteAppThumb.png'
import canvixProject from '../../assets/images/CanvixThumb.png'
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
import ProjectCard from '../Projects/ProjectCard'
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
            <div className='flex flex-col gap-10 '>
                {
                    MyProjects.map((items, i)=>(
                        <ProjectCard
                            key={items.ProjectName}
                            project={items}
                            index={i}
                            primaryAction={{ label: 'View all projects', to: '/projects' }}
                            secondaryAction={{ label: 'Live link', href: items.GithubRepo }}
                        />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default ProjectsShow
