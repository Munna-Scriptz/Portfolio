import React, { useState } from 'react'
import { Link } from 'react-router'
import ResLogo from "../assets/images/Logo.png"
import { MdOutlineGroup } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu"
import { IoHomeOutline } from 'react-icons/io5';
import { RiUserLine } from 'react-icons/ri';
import { TbArrowsJoin } from 'react-icons/tb';

export const ResNavbar = () => {

    const [Value , SetValue] = useState('true')

  return (
    <>
    
    <nav id='Navbar' className='py-[25px] lg:hidden relative'>
      <div id='NavRow' className='flex container items-center justify-between overflow-hidden'>
        {/* ------Logo------ */}
        <Link to={'/'} className='w-[40px] h-[40px]'><img src={ResLogo} alt="Logo" /></Link>

        {/* ------Nav Menu------ */}
    
        <button className='relative w-[32px] h-[28px] cursor-pointer' onClick={()=>SetValue(!Value)}>
            <span className={`w-[20px] h-[2px] rounded-[8px] bg-Primary absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[3px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
            <span className={`w-[20px] h-[2px] rounded-[8px] bg-Primary absolute top-[9px] right-[10px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
            <span className={`w-[20px] h-[2px] rounded-[8px] bg-Primary absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[14px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
        </button>
        {/* ------Button Menu------ */}
        <div className={`fixed top-0 left-0 w-full h-screen transition-opacity duration-300 ${Value ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'} z-[50]`}>
            {/*------------Overlay----------- */}
            <div onClick={() => SetValue(!Value)} className={`w-full h-screen fixed top-0 left-0 bg-[#00000070] transition-opacity duration-[.3s] ${Value ? 'opacity-0' : 'opacity-100'}`}
            ></div>
            <div className={`h-[90%] w-full fixed bottom-0 bg-[#E5E3DC] p-5 duration-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden transform ${Value ? 'translate-y-full' : 'translate-y-0'} z-[60]`}>
                
              {/* -------------Header------------- */}
              <div className='flex items-center justify-between absolute top-0 right-0 w-full p-5'>
                  <Link to={'/'} className='w-[40px]'><img src={ResLogo} alt="Logo" /></Link>
                  <button className='relative w-[32px] h-[28px] cursor-pointer right-0' onClick={() => SetValue(!Value)}>
                      <span className={`w-[20px] h-[2px] bg-Primary absolute right-[10px] transition-all duration-[.3s] ${Value ? 'rotate-0 top-[5px]' : 'rotate-45 top-[7px]'}`}></span>
                      <span className={`w-[20px] h-[2px] bg-Primary absolute top-[10px] right-[10px] transition-all duration-[.3s] ${Value ? 'opacity-100' : 'opacity-0'}`}></span>
                      <span className={`w-[20px] h-[2px] bg-Primary absolute right-[10px] transition-all duration-[.3s] ${Value ? 'rotate-0 top-[15px]' : '-rotate-45 top-[7px]'}`}></span>
                  </button>
              </div>
              
              {/* ------------Nav Link-------- */}
              <ul className='flex flex-col items-start gap-5 text-xl mt-25'>
                  <li><Link onClick={() => SetValue(!Value)} className='text-Primary font-manrope font-medium flex items-center gap-2' to={'/'}><IoHomeOutline/> Home</Link></li>
                  <span className='w-full h-[1px] bg-gray-400'></span>
                  <li><Link onClick={() => SetValue(!Value)} className='text-Primary font-manrope font-medium flex items-center gap-2' to={'/about'}><MdOutlineGroup/> About</Link></li>
                  <span className='w-full h-[1px] bg-gray-400'></span>
                  <li><Link onClick={() => SetValue(!Value)} className='text-Primary font-manrope font-medium flex items-center gap-2' to={'/projects'}><MdOutlineGroup/> Projects</Link></li>
                  <span className='w-full h-[1px] bg-gray-400'></span>
                  <li><Link onClick={() => SetValue(!Value)} className='text-Primary font-manrope font-medium flex items-center gap-2' to={'/contact'}><MdOutlineGroup/> Contact</Link></li>
              </ul>
            </div>
        </div>
      </div>

    </nav>
    
    </>
  )
}
