import React, { useEffect } from 'react'
// ------------Icons----------
import nextIcon from '../../assets/images/NextJsIcon.svg'

// ---------Project images 
import sansaProject from '../../assets/images/sansaProject.jpg'
import ProjectCard from './ProjectCard'

const NextProject = ({ proLength }) => {
    const MyProjects = [
        {
          'ProjectImage' : sansaProject,
          'ProjectName' : 'Sansa e - commerce',
          'Description' : 'Sansa is a website which provide users to order online and pick up product eastly, If you need a platform to buy products with good quality so that platform would be Sansa. Made with next js and fully responsive across all devices.',
          'technologies' : ["nextjs" ,"react" , "tailwind" , "javascript" , "redux" ,"figma" , "html" , "css"],
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
            <div className='flex flex-col gap-10'>
                    {
                        MyProjects.map((items, i)=>(
                            <ProjectCard key={items.ProjectName} project={items} index={i} />
                        ))
                    }
            </div>
        </section>
    </>
  )
}

export default NextProject
