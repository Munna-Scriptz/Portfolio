import React from 'react'
import DecayCard from './common/DecayCard';
import ReactImg from '../assets/images/react.svg'
import JsIcon from '../assets/images/JsIcon.jpg'
import VsCodeIcon from '../assets/images/Vscodeicon.jpg'
import { VscVscode } from "react-icons/vsc";
import { LuFigma } from "react-icons/lu";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

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
                        <div id='MotherSkillBox' className='flex flex-col items-start gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C]'>
                                <img src={ReactImg} alt="React" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>React</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-start gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C]'>
                                <img src={JsIcon} alt="React" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>JavaScript</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-start gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C]'>
                                <img src={ReactImg} alt="React" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>Tailwind Css</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-start gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C] flex items-center justify-center'>
                                <FaBootstrap className='text-[36px] text-white'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>Bootstrap</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-start gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C]'>
                                <img src={ReactImg} alt="React" className='w-full'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>Gsap</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-start gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C] flex items-center justify-center'>
                                <FaCss3 className='text-[36px] text-white'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>CSS</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-start gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C] flex items-center justify-center'>
                                <FaHtml5 className='text-[36px] text-white'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>HTML</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-start gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C] flex items-center justify-center'>
                                <LuFigma className='text-[36px] text-white'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>Figma</p>
                            </div>
                        </div>
                    </DecayCard>
                    <DecayCard width={120} height={100}>
                        <div id='MotherSkillBox' className='flex flex-col items-start gap-3'>
                            <div id='skillBox' className='h-[80px] w-[80px] border p-5 bg-[#2C2C2C] flex items-center justify-center'>
                                <VscVscode className='text-[36px] text-white'/>
                            </div>
                            <div>
                                <p className='flex items-center justify-center font-poppins text-Primary font-medium text-[20px]'>Vs code</p>
                            </div>
                        </div>
                    </DecayCard>
                </div>
            </div>
        </section>
    </>
  )
}
