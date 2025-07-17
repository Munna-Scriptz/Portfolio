import React from 'react'
import DecayCard from './common/DecayCard';
import JsIcon from '../assets/images/JsIcon.jpg'
import { LuFigma } from "react-icons/lu";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

// ----------Ions
import ReactImg from '../assets/images/react.svg'
import TailwindCssIcon from '../assets/images/TailwindCssIcon.svg'
import BootstrapIcon from '../assets/images/BootStrapIcon.svg'
import GsapIcon from '../assets/images/GsapIcon.png'
import CssIcon from '../assets/images/CssIcon.svg'
import HtmlIcon from '../assets/images/HtmlIcon.svg'
import FigmaIcon from '../assets/images/FigmaIcon.svg'
import VsCodeIcon from '../assets/images/VsCodeICon.svg'
import GithubIcon from '../assets/images/GithubIcon.svg'



export const Skills = () => {



  return (
    <>
        <section className='pt-20'>
            <div className="container">
                <div className="header">
                    <p className='flex items-center justify-center font-poppins text-Primary font-medium text-2xl'>MY SKILLS</p>
                    <h2 className='flex items-center justify-center font-soldier text-Primary font-medium text-4xl tracking-[5px] mt-5'>TECHNOLOGIES & EXPERTISE</h2>
                </div>
                {/* -----Skill Show Case------ */}
                <div id='SkillItems' className='mt-20'>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-center gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C]'>
                                <img src={ReactImg} alt="React" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>React</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-center gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C]'>
                                <img src={JsIcon} alt="React" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>JavaScript</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={150} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-center gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C]'>
                                <img src={TailwindCssIcon} alt="Tailwind" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>Tailwind Css</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-center gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C]'>
                                <img src={BootstrapIcon} alt="Tailwind" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>Bootstrap</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-center gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-2 bg-[#2C2C2C]'>
                                <img src={GsapIcon} alt="React" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>Gsap</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-center gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C]'>
                                <img src={CssIcon} alt="Tailwind" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>CSS</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-center gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-4 bg-[#2C2C2C] flex items-center justify-center'>
                                <img src={HtmlIcon} alt="Tailwind" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>HTML</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-center gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-4 bg-[#2C2C2C] flex items-center justify-center'>
                                <img src={FigmaIcon} alt="Tailwind" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>Figma</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-center gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-4 bg-[#2C2C2C] flex items-center justify-center'>
                                <img src={VsCodeIcon} alt="Vs Code" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>Vs code</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-center gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-4 bg-[#2C2C2C] flex items-center justify-center'>
                                <img src={GithubIcon} alt="Vs Code" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>Github</p>
                            </div>
                        </div>
                    </DecayCard>
                </div>
            </div>
        </section>
    </>
  )
}
