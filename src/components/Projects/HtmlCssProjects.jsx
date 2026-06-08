import React, { useEffect } from 'react'
// ------------Icons----------
import FigmaIcon from '../../assets/images/FigmaIcon.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import CssIcon from '../../assets/images/CssIcon.svg'
import AosIcon from '../../assets/images/AosIcon.png'
import scooter from '../../assets/images/scooterHtml.png'
import furniture from '../../assets/images/furnitureHtml.png'
import planty from '../../assets/images/plantyHtml.png'
import nescafe from '../../assets/images/nescafeHtml.png'
import residential from '../../assets/images/residentialHtml.png'
import solarSystem from '../../assets/images/solarHtml.png'
import ProjectCard from './ProjectCard'



const HtmlCssProjects = ({ proLength }) => {
  const htmlCssData = [
    {
      'ProjectImage': scooter,
      'ProjectName': 'E-Scooter',
      'Description': 'An impressive e-commerce landing page for futuristic e-scooters, built with HTML, CSS, and Vanilla JavaScript. It featuresclean, modern UI and uses AOS animations to create a dynamic and engaging user experience.',
      'technologies': [FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
      'Direction': 'lg:flex-row-reverse',
      'AosDir': 'fade-left',
      'type': 'E-Commerce Landing Page',
      'liveLink': 'https://munna-scriptz.github.io/E-Scooter/',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
    {
      'ProjectImage': furniture,
      'ProjectName': 'Furniture E-Commerce',
      'Description': 'A responsive e-commerce landing page for a furniture store, built with HTML, CSS, and Vanilla JavaScript. It features a clean amodern design, showcasing products in a user-friendly way for a smooth shopping experience.',
      'technologies': [FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
      'Direction': 'lg:flex-row',
      'AosDir': 'fade-right',
      'type': 'E-Commerce Landing Page',
      'liveLink': 'https://munna-scriptz.github.io/Furniture-Project/',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
    {
      'ProjectImage': planty,
      'ProjectName': `Planty'x Projects`,
      'Description': `A stylish e-commerce landing page for 'Planty'x', built with HTML, CSS, and Vanilla JavaScript. It showcases a variety of pla  for sale with a clean, user-friendly interface that makes browsing and buying a breeze.`,
      'technologies': [FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
      'Direction': 'lg:flex-row-reverse',
      'AosDir': 'fade-left',
      'type': 'E-Commerce Landing Page',
      'liveLink': 'https://munna-scriptz.github.io/Planty-x-Project/',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
    {
      'ProjectImage': nescafe,
      'ProjectName': 'Nescafe Food',
      'Description': `A dynamic restaurant website for 'Nescafe,' built with HTML, CSS, and Vanilla JavaScript. It's designed to showcase a variety  food and drinks with an easy-to-navigate menu and a clean interface, making it simple for customers to explore their options.`,
      'technologies': [FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
      'Direction': 'lg:flex-row',
      'AosDir': 'fade-right',
      'type': 'Restaurant',
      'liveLink': 'https://munna-scriptz.github.io/Nescafe_web/',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
    {
      'ProjectImage': residential,
      'ProjectName': 'Residential Security',
      'Description': 'A modern website for residential security services, built with HTML, CSS, and Vanilla JavaScript. It presents a clean aprofessional look, highlighting various security solutions to give homeowners peace of mind.',
      'technologies': [AosIcon, JsIcon, HtmlIcon, CssIcon],
      'Direction': 'lg:flex-row-reverse',
      'AosDir': 'fade-left',
      'type': 'Residential Landing Page',
      'liveLink': 'https://github.com/Munna-Scriptz',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
    {
      'ProjectImage': solarSystem,
      'ProjectName': 'Solar System',
      'Description': 'A dynamic solar system project built with HTML and CSS animations. It features all the planets orbiting the sun with realis  movement and a visually stunning design, bringing the cosmos to life on the screen.',
      'technologies': [FigmaIcon, AosIcon, JsIcon, HtmlIcon, CssIcon],
      'Direction': 'lg:flex-row',
      'AosDir': 'fade-right',
      'type': 'Animation',
      'liveLink': 'https://task-management-assistant.vercel.app/',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
  ]

  useEffect(() => {
    if (typeof proLength === "function") {
      proLength(htmlCssData.length);
    }
  }, [proLength]);
  
  return (
    <>
      <section id='HtmlCss-Projects' className='mt-[82px]'>
        {/* ----------------------HtmlCss Projects Header------------------------- */}
        <div className='flex items-center justify-center gap-5 mb-[60px]'>
          <h2 className='text-second font-soldier lg:text-[46px] md:block hidden text-[32px] font-medium text-center' data-aos="fade-up"> HTML-CSS Projects — Building the Web’s First Impression</h2>
          <img className='w-[45px]' src={HtmlIcon} alt="JsIcon" />
          <h2 className='text-second font-soldier lg:text-[46px] md:hidden block text-[32px] font-medium text-center' data-aos="fade-up">Html-Css Projects</h2>
        </div>
        {/* ----------------------HtmlCss Projects------------------------- */}
        <div className="flex flex-col gap-10">
          {htmlCssData.map((items, i) => (
            <ProjectCard key={items.ProjectName} project={items} index={i} scrollPreview />
          ))}
        </div>
      </section>
    </>
  )
}

export default HtmlCssProjects
