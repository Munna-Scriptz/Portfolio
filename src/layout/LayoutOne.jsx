import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Cursor from '../components/Cursor'
import { ResNavbar } from '../components/common/ResNavbar';
import Footer from '../components/common/Footer';
// --------Aos Imp 
import Aos from 'aos'
import "aos/dist/aos.css";
import { Navbar } from '../components/common/Navbar';

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
