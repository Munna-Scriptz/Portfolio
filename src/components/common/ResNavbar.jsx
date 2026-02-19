import React, { useState } from 'react'
import { Link } from 'react-router'
import ResLogo from "../../assets/images/Logo.png"
import { IoHomeOutline } from 'react-icons/io5';
import { GrContact, GrContactInfo, GrProjects } from 'react-icons/gr';

export const ResNavbar = () => {

  const [Value , SetValue] = useState('true')

  return (
  <>
    <nav id='Navbar' className='py-[25px] lg:hidden relative'>
      <div id='NavRow' className='flex container items-center justify-between overflow-hidden'>
        {/* ------Logo------ */}
        <Link data-aos="fade-down" data-aos-duration="1500" data-aos-delay="800" data-aos-easing="ease-in-sine" to={'/'} className='w-[40px] h-[40px] z-50 transition-trigger transition-link'><img src={ResLogo} alt="Logo" /></Link>
        {/* ------Nav Menu------ */}
        <div onClick={()=>SetValue(!Value)} className='font-soldier select-none cursor-pointer flex duration-[.3s] items-center gap-3 text-xl text-Primary z-50' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1200" data-aos-easing="ease-in-sine">
          <p>{Value? 'MENU' : 'CLOSE'}</p>
          <button className='relative w-[32px] h-[19px] cursor-pointer' aria-label="Open menu">
            <span className={`w-[20px] h-[2px] rounded-[8px] bg-Primary absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[3px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
            <span className={`w-[20px] h-[2px] rounded-[8px] bg-Primary absolute top-[9px] right-[10px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
            <span className={`w-[20px] h-[2px] rounded-[8px] bg-Primary absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[14px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
          </button>
        </div>
        {/* ------Button Menu------ */}
        <div className={`fixed top-0 left-0 w-full h-screen transition-opacity duration-[.8s] ${Value ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'} z-[40]`}>
          {/*------------Overlay----------- */}
          <div onClick={() => SetValue(!Value)} className={`w-full h-screen fixed top-0 left-0 bg-[#00000070] transition-opacity duration-300 ${Value ? 'opacity-0' : 'opacity-100'}`}></div>

          {/* ------------Drawer----------- */}
          <div className={`h-full w-full fixed bottom-0 bg-[#E5E3DC] p-5 duration-[.4s] shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden transform ${Value ? 'translate-y-full' : 'translate-y-0'} z-[60]`}>
            {/* ------------Nav Links-------- */}
            <ul className={`flex flex-col items-center gap-8 text-3xl font-soldier mt-32 transition-all duration-[.4s] ${Value ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}>
              <li className={`transition-all duration-[.4s] delay-200 ${Value ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
                <Link onClick={() => SetValue(!Value)} className='text-Primary font-manrope font-medium flex items-center gap-2 transition-trigger transition-link' to={'/'}><IoHomeOutline/> Home</Link>
              </li>
              <li className={`transition-all duration-[.4s] delay-300 ${Value ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
                <Link onClick={() => SetValue(!Value)} className='text-Primary font-manrope font-medium flex items-center gap-2 transition-trigger transition-link' to={'/about'}><GrContactInfo /> About me</Link>
              </li>
              <li className={`transition-all duration-[.4s] delay-400 ${Value ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
                <Link onClick={() => SetValue(!Value)} className='text-Primary font-manrope font-medium flex items-center gap-2 transition-trigger transition-link' to={'/projects'}><GrProjects className='text-xl'/> Projects</Link>
              </li>
              <li className={`transition-all duration-[.4s] delay-500 ${Value ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
                <Link onClick={() => SetValue(!Value)} className='text-Primary font-manrope font-medium flex items-center gap-2 transition-trigger transition-link' to={'/contact'}><GrContact className='text-[22px]' /> Contact</Link>
              </li>
            </ul>
          </div>
      </div>
    </div>

  </nav>
    
  </>
  )
}
