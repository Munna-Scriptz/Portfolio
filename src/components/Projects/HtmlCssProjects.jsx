import React, { useEffect } from 'react'
import Magnet from '../effects/Magnet'
import BlurText from '../effects/BlurText'
import { GrTechnology } from 'react-icons/gr'
import { BiCategory } from 'react-icons/bi'
// ------------Icons----------
import FigmaIcon from '../../assets/images/FigmaIcon.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import CssIcon from '../../assets/images/CssIcon.svg'
import AosIcon from '../../assets/images/AosIcon.png'

// ---------Project images 
import taskManage from '../../assets/images/TaskManageMentScroll.jpeg'
import taskManageV2 from '../../assets/images/taskManagementV2.jpeg'
import escolaEducation from '../../assets/images/EscolaEduImg.jpeg'
import safwanPortfolio from '../../assets/images/safwanPortfolioProject.jpeg'
import safwanPortfolioV2 from '../../assets/images/safwanV2Scroll.png'
import photographerPortfolio from '../../assets/images/photographerScroll.jpeg'
import canvixAgency from '../../assets/images/canvixProjectScroll.png'
import goTrip from '../../assets/images/goTripScroll.png'



import scooter from '../../assets/images/scooterHtml.png'
import furniture from '../../assets/images/furnitureHtml.png'
import planty from '../../assets/images/plantyHtml.png'
import nescafe from '../../assets/images/nescafeHtml.png'
import residential from '../../assets/images/residentialHtml.png'
import solarSystem from '../../assets/images/solarHtml.png'



const HtmlCssProjects = ({ proLength }) => {
  const htmlCssData = [
    {
      'ProjectImage': scooter,
      'ProjectName': 'E-Scooter',
      'Description': 'An impressive e-commerce landing page for futuristic e-scooters, built with HTML, CSS, and Vanilla JavaScript. It featuresclean, modern UI and uses AOS animations to create a dynamic and engaging user experience.',
      'technologies': [FigmaIcon, AosIcon, JsIcon, , HtmlIcon, CssIcon],
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
        {
          htmlCssData.map((items, i) => (
            <div key={i} id='HoverDivImg' className={`flex items-center ${items.Direction} flex-col lg:gap-20 mt-10 gap-5`}>
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
        }
      </section>
    </>
  )
}

export default HtmlCssProjects