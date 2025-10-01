import React, { useState } from 'react'
import { FaRegStar } from 'react-icons/fa'
// ------------Icons----------
import nextIcon from '../../assets/images/NextJsIcon.svg'
import ReactIcon from '../../assets/images/react.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import JsProjects from './JsProjects'
import ReactProjects from './ReactProjects'
import HtmlCssProjects from './HtmlCssProjects'
import NextProject from './NextProject'
import { useInView } from 'react-intersection-observer';
import SkeletonLoader from '../effects/SkeletonLoader'


const AllProjects = () => {

    // -------------------------Projects Choose--------------------------------
    const [selected, setSelected] = useState("all")

    const selectProjectBtn = [
        { id: "all", label: "All Projects", icon: <FaRegStar /> },
        { id: "next", label: "Next Projects", icon: <img className="w-[20px]" src={nextIcon} alt="Next js" /> },
        { id: "react", label: "React Projects", icon: <img className="w-[20px]" src={ReactIcon} alt="React" /> },
        { id: "js", label: "JavaScript Projects", icon: <img className="w-[20px]" src={JsIcon} alt="JS" /> },
        { id: "html", label: "Html-Css Projects", icon: <img className="w-[20px]" src={HtmlIcon} alt="HTML" /> },
    ]

    // -------------------------- Rendering -------------------
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <>
        <section className='my-[112px] overflow-hidden'>
            <div className="container">
                {/* --------------------------------Header------------------------------- */}
                <div id="Projects-Header-Row">
                    <div>
                        <h2 className='text-second font-soldier lg:text-[46px] md:block hidden text-[32px] font-medium text-center' data-aos="fade-up">A Collection of Work — Built with Passion</h2> 
                        <h2 className='text-second font-soldier lg:text-[46px] md:hidden block text-[32px] font-medium text-center' data-aos="fade-up">Crafting Projects Across Every Stack</h2> 
                    </div>
                    <div data-aos="fade-up" className='flex items-center justify-center'>
                        <div className="mt-[40px] flex flex-wrap items-center gap-[16px]">
                            {selectProjectBtn.map((btn) => (
                                <button key={btn.id} onClick={() => setSelected(btn.id)} className={`py-[12px] px-[16px] shadow-lg duration-[.3s] flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-xs font-semibold cursor-pointer
                                    ${
                                    selected === btn.id
                                        ? "bg-coffee text-white scale-[1.05]"
                                        : "bg-[#EFF2FC] text-gray800"
                                    }`}
                                >
                                {btn.icon}
                                <span>{btn.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --------------------------All Projects-------------------------- */}
                <div id='Projects-Cards-Row' className={`mt-[80px] ${selected === "all" ? "block" : "hidden"}`}>
                    <NextProject />
                    {/* ==========================Border Start================================ */}
                        <div className='lg:w-[673px] h-[3px] bg-[#051036] mt-20 rounded-[5px]'></div>
                    {/* ==========================Border End================================ */}
                        <ReactProjects/>
                    
                    {/* ==========================Border Start================================ */}
                        <div className='lg:w-[673px] h-[3px] bg-[#051036] mt-20 rounded-[5px]'></div>
                    {/* ==========================Border End================================ */}

                    <div ref={ref}>
                        {inView ?
                                <JsProjects/>
                            : (
                                <SkeletonLoader />
                            )}
                    </div>

                    {/* ==========================Border Start================================ */}
                        <div className='lg:w-[673px] h-[3px] bg-[#051036] mt-20 rounded-[5px]'></div>
                    {/* ==========================Border End================================ */}
                    
                    <div ref={ref}>
                        {inView ?
                            <HtmlCssProjects/>
                            : (
                                <SkeletonLoader />
                            )}
                    </div>

                </div>

                {/* -------------------------React Projects-------------------------- */}
                <div className={`${selected === 'next'? 'block' : 'hidden' }`}>
                    <NextProject/>
                </div>
                {/* -------------------------React Projects-------------------------- */}
                <div className={`${selected === 'react'? 'block' : 'hidden' }`}>
                    <ReactProjects/>
                </div>

                {/* ----------------------JavaScript Projects------------------------ */}
                <div className={`${selected === 'js'? 'block' : 'hidden' }`}>
                    <JsProjects/>
                </div>

                {/* ----------------------JavaScript Projects------------------------ */}
                <div className={`${selected === 'html'? 'block' : 'hidden' }`}>
                    <HtmlCssProjects/>
                </div>
            </div>
        </section>
    </>
  )
}

export default AllProjects