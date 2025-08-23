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
        <div className={`absolute top-0 left-0 w-full h-screen duration-[.3s]  ${Value? 'z-[-10]' : 'z-[40]'}`}>
            <div onClick={()=>SetValue(!Value)} className={`w-full h-screen duration-[.3s] absolute top-0 left-0 bg-[#00000070] ${Value? 'hidden' : 'visible'}`}></div>
            <div className={`h-screen w-[60%] absolute top-0 bg-[#E5E3DC] p-5 duration-[.8s] shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden z-50 ${Value? ' translate-x-[-520px] md:translate-x-[-740px] ' : ' translate-x-[-0px]'}`}>
                <div className='flex items-center justify-between absolute top-0 right-0 w-full p-5'>
                    <Link to={'/'} className='w-[40px]'><img src={ResLogo} alt="Logo" /></Link>
                    <button className='relative w-[32px] h-[28px] cursor-pointer right-0' onClick={()=>SetValue(!Value)}>
                        <span className={`w-[20px] h-[2px] bg-Primary absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[5px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
                        <span className={`w-[20px] h-[2px] bg-Primary absolute top-[10px] right-[10px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
                        <span className={`w-[20px] h-[2px] bg-Primary absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[15px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
                    </button>
                </div>

                <ul className='flex flex-col items-start gap-5 text-xl mt-25'>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-Primary font-manrope font-medium flex items-center gap-2' to={'/'}><IoHomeOutline/> Home</Link></li>
                    <span className='w-full h-[1px] bg-gray-400'></span>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-Primary font-manrope font-medium flex items-center gap-2' to={'/about'}><MdOutlineGroup/> About</Link></li>
                    <span className='w-full h-[1px] bg-gray-400'></span>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-Primary font-manrope font-medium flex items-center gap-2' to={'/projects'}><MdOutlineGroup/> Projects</Link></li>
                    <span className='w-full h-[1px] bg-gray-400'></span>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-Primary font-manrope font-medium flex items-center gap-2' to={'/contact'}><MdOutlineGroup/> Contact</Link></li>
                </ul>
            </div>
        </div>
      </div>

    </nav>
    
    </>
  )
}
