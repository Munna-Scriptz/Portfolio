import React from 'react'
import { BiBarChartAlt2 } from 'react-icons/bi'
import { FaRegStar } from 'react-icons/fa'
import { GoRocket } from 'react-icons/go'
import { MdWorkOutline } from 'react-icons/md'

// ------------Icons----------
import ReactIcon from '../../assets/images/react.svg'
import FigmaIcon from '../../assets/images/FigmaIcon.svg'
import TailwindCss from '../../assets/images/TailwindCssIcon.svg'
import reduxIcon from '../../assets/images/ReduxIcon.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import CssIcon from '../../assets/images/CssIcon.svg'
import Bootstrap from '../../assets/images/BootStrapIcon.svg'
const AllProjects = () => {
  return (
    <>
        <section className='my-[112px] '>
            <div className="container">
                <div id="Projects-Header-Row">
                    {/* -------------Header-------------- */}
                    <div>
                        <h2 className='text-second font-soldier lg:text-[46px] md:block hidden text-[32px] font-medium text-center' data-aos="fade-up">A Collection of Work — Built with Passion</h2> 
                        <h2 className='text-second font-soldier lg:text-[46px] md:hidden block text-[32px] font-medium text-center' data-aos="fade-up">Crafting Projects Across Every Stack</h2> 
                    </div>
                    <div data-aos="fade-up" className='flex items-center justify-center'>
                        <div className='mt-[40px] flex flex-wrap items-center gap-[16px]'>
                            <button className='bg-coffee py-[12px] px-[16px] shadow-lg duration-[.3s] text-white flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-sm font-semibold cursor-pointer'>
                                <FaRegStar />
                                <span>All Projects</span>
                            </button>
                            <button className='bg-[#EFF2FC] active:bg-coffee active:scale-[1.1] active:text-white text-gray800 py-[12px] px-[16px] shadow-lg duration-[.3s] flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-sm font-semibold cursor-pointer'>
                                <img className='w-[20px]' src={ReactIcon} alt="React" />
                                <span>React Projects</span>
                            </button>
                            <button className='bg-[#EFF2FC] active:bg-coffee active:scale-[1.1] active:text-white text-gray800 py-[12px] px-[16px] shadow-lg duration-[.3s] flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-sm font-semibold cursor-pointer'>
                                <img className='w-[20px]' src={JsIcon} alt="React" />
                                <span>JavaScript Projects</span>
                            </button>
                            <button className='bg-[#EFF2FC] active:bg-coffee active:scale-[1.1] active:text-white text-gray800 py-[12px] px-[16px] shadow-lg duration-[.3s] flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-sm font-semibold cursor-pointer'>
                                <img className='w-[20px]' src={HtmlIcon} alt="React" />
                                <span>Html-Css Projects</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {/* -------------Projects Card-------------- */}
                </div>
            </div>
        </section>
    </>
  )
}

export default AllProjects