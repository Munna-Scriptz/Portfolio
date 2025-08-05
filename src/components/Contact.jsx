import React from 'react'
import { MdOutlineArrowBack } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Magnet from './common/Magnet';
import { Link } from 'react-router';
import ScrollFloat from './common/ScrollFloat';

const Contact = () => {
  return (
    <>
      <section id='Contact' className='mt-[80px]'>
        <div className="container">
          <div className="header mb-20">
            <div className='flex items-center justify-center font-poppins text-Primary font-medium lg:text-2xl text-lg'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>CONTACT ME</ScrollFloat></div>
            <div className='flex items-center justify-center font-soldier text-Primary font-medium lg:text-4xl text-2xl tracking-[5px] lg:mt-5 mt-3'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=70%' scrollEnd='bottom bottom-=40%' stagger={0.03}>NO NEED TO BE SHY</ScrollFloat></div>
          </div>
          <div id="MotherDiv" className='flex items-start gap-10'>
            {/* -----------Left Side-------------- */}
            <div id="LeftSide" className='w-[700px] flex flex-col gap-[20px]'>
              <div className='border-1 border-borderCol p-[20px] rounded-xl'>
                <div className='flex items-center gap-[24px]'>
                  <p className='text-second'>01</p>
                  <h2 className='text-second text-[26px] font-poppins font-medium'>What's your name? *</h2>
                </div>
                <input type="user" className='w-full py-[15px] text-[24px] text-borderCol pl-[40px] outline-none' placeholder='John Smith'/>
              </div>
              <div className='border-1 border-borderCol p-[20px] rounded-xl'>
                <div className='flex items-center gap-[24px]'>
                  <p className='text-second'>02</p>
                  <h2 className='text-second text-[26px] font-poppins font-medium'>What's your Email? *</h2>
                </div>
                <input type="user" className='w-full py-[15px] text-[24px] text-borderCol pl-[40px] outline-none' placeholder='Eren@gmail.com'/>
              </div>
              <div className='border-1 border-borderCol p-[20px] rounded-xl'>
                <div className='flex items-center gap-[24px]'>
                  <p className='text-second'>03</p>
                  <h2 className='text-second text-[26px] font-poppins font-medium'>What would you like to talk about? *</h2>
                </div>
                <input type="user" className='w-full py-[15px] text-[24px] text-borderCol pl-[40px] outline-none' placeholder='Web Application build'/>
              </div>
              <div className='border-1 border-borderCol p-[20px] rounded-xl'>
                <div className='flex items-center gap-[24px]'>
                  <p className='text-second'>04</p>
                  <h2 className='text-second text-[26px] font-poppins font-medium'>Your message *</h2>
                </div>
                <textarea name="TextArea" cols={40} rows={5} maxLength={2000} className='w-full pt-[15px] text-[24px] text-borderCol pl-[40px] outline-none' placeholder='Hello, How can u help me with...'></textarea>
              </div>
              <div>
                <button className='bg-coffee text-white font-medium font-poppins py-[12px] px-[28px] rounded-full cursor-pointer border-3 border-white outline-4 outline-coffee duration-[.3s] hover:scale-[1.05] hover:bg-Primary hover:outline-Primary hover:outline-6'>Send Message</button>
              </div>
            </div>
            {/* -----------Left Side-------------- */}
            <div id="RightSide" className='relative'>
              <MdOutlineArrowBack className='text-[300px] rotate-[-45deg] text-borderCol absolute left-[-80px] top-[-80px]'/>
              <div className='mt-[180px]'>
                <p className='font-poppins text-borderCol text-[18px] font-medium opacity-[0.5] uppercase'>Let's Talk</p>
                <h2 className='font-poppins text-second font-medium text-[19px] w-[500px] mt-6'>You're just one step away from elevating your brand or product to the next level. Simply fill out the form below to share the details of your project—we’re ready to bring your vision to life.</h2>
              </div>
              <div className='mt-10 opacity-[0.9]'>
                <p className='font-poppins text-borderCol text-[18px] font-medium opacity-[0.5] uppercase'>Details</p>
                <div className='font-poppins text-second font-medium text-[19px] w-[500px] mt-6 uppercase flex items-center gap-5'>
                  <FaLocationDot />
                  <p>Dhaka, bangladesh</p>
                </div>
                <div className='font-poppins text-second font-medium text-[19px] w-[500px] mt-6 uppercase flex items-center gap-5'>
                  <IoCall />
                  <p>+(880) 190 8905 391</p>
                </div>
                <div className='font-poppins text-second font-medium text-[19px] w-[500px] mt-6 flex items-center gap-5'>
                  <MdEmail />
                  <p>munnascriptz@gmail.com</p>
                </div>
              </div>
              <div className='mt-10'>
                <p className='font-poppins text-borderCol text-[18px] font-medium opacity-[0.5] uppercase'>Socials</p>
                <div className='mt-7 flex items-center gap-7'>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <Link><FaFacebookF className='text-[18px] hover-brown'/></Link>
                  </Magnet>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <Link><FaInstagram className='text-[18px] hover-brown'/></Link>
                  </Magnet>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <Link><FaXTwitter className='text-[18px] hover-brown'/></Link>
                  </Magnet>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <Link><FaGithub className='text-[18px] hover-brown'/></Link>
                  </Magnet>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <Link><FaLinkedinIn className='text-[18px] hover-brown'/></Link>
                  </Magnet>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact