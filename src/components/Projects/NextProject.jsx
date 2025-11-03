import React, { useEffect, useState } from 'react'
import Magnet from '../effects/Magnet'
import BlurText from '../effects/BlurText'
import { GrTechnology } from 'react-icons/gr'
import { BiCategory } from 'react-icons/bi'
// ------------Icons----------
import nextIcon from '../../assets/images/NextJsIcon.svg'
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
import sansaProject from '../../assets/images/sansaProject.jpg'

const NextProject = ({ proLength }) => {
    const MyProjects = [
        {
          'ProjectImage' : sansaProject,
          'ProjectName' : 'Sansa e - commerce',
          'Description' : 'Sansa is a website which provide users to order online and pick up product eastly, If you need a platform to buy products with good quality so that platform would be Sansa. Made with next js and fully responsive across all devices.',
          'technologies' : [nextIcon ,ReactIcon , TailwindCss , JsIcon , reduxIcon ,FigmaIcon , HtmlIcon , CssIcon],
          'Direction': 'lg:flex-row',
          'AosDir' : 'fade-right',
          'type' : 'E-Commerce',
          'liveLink' : 'https://sansa-commerce.vercel.app/',
          'GithubRepo' : 'https://github.com/Munna-Scriptz'
        },
        
    ]

    useEffect(() => {
        if (typeof proLength === "function") {
            proLength(MyProjects.length);
        }
    }, [proLength]);
  return (
    <>
        <section id='React-Projects' className='mt-[82px]'>
            {/* ----------------------React Projects Header------------------------- */}
            <div className='flex items-center justify-center gap-5 mb-[60px]'>
                <h2 className='text-second font-soldier lg:text-[46px] md:block hidden text-[32px] font-medium text-center' data-aos="fade-up">Next.js Projects — Passion in Every Pixel</h2> 
                <img className='w-[45px]' src={nextIcon} alt="JsIcon" />
                <h2 className='text-second font-soldier lg:text-[46px] md:hidden block text-[32px] font-medium text-center' data-aos="fade-up">Next Js Projects</h2> 
            </div>
            {/* ----------------------React Projects------------------------- */}
            <div className='flex flex-col gap-20'>
                    {
                        MyProjects.map((items, i)=>(
                            <div key={i} className={`flex items-center ${items.Direction} flex-col lg:gap-20 gap-5`}>
                                <div className='lg:w-[640px] w-full' data-aos={`${items.AosDir}`} data-aos-offset="200" data-aos-easing="ease-in-sine">
                                    <img className='rounded-xl' src={items.ProjectImage} alt="Project Image" />
                                </div>
                                <div className='lg:w-[650px] w-full'>
                                    <h2 className='font-soldier lg:text-[44px] text-[32px] text-Primary font-medium mb-4 uppercase'><BlurText text={items.ProjectName} delay={280} animateBy="words" direction="bottom"/></h2>
                                    <h2 className='font-poppins lg:text-[19px] text-[14px] text-Primary font-normal mb-4'><BlurText text={items.Description} delay={50} animateBy="words" direction="bottom"/></h2>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <p className='font-poppins lg:text-[19px] text-[13px] text-second font-medium flex items-center gap-2'><BiCategory /> Type : {items.type}</p>
                                    </div>
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
        </section>
    </>
  )
}

export default NextProject