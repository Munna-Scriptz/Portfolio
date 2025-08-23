import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Home } from '../pages/Home'
import { Navbar } from '../components/Navbar'
import { ResNavbar } from '../components/ResNavbar'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'
// --------Aos Imp 
import Aos from 'aos'
import "aos/dist/aos.css";

export const LayoutOne = () => {
  const location = useLocation()
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
    const handleEvents = () => Aos.refresh();
    window.addEventListener("load", handleEvents);
    window.addEventListener("scroll", handleEvents);

    return () => {
      window.removeEventListener("load", handleEvents);
      window.removeEventListener("scroll", handleEvents);
    };
  }, [location]);
  return (
    <> 
      <Cursor/>
      <Navbar/>
      <ResNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
