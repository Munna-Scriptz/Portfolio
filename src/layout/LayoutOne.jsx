import React from 'react'
import { Outlet } from 'react-router'
import { Home } from '../pages/Home'
import { Navbar } from '../components/Navbar'
import { ResNavbar } from '../components/ResNavbar'

export const LayoutOne = () => {
  return (
    <div> 
        <Navbar/>
        <ResNavbar/>
        <Outlet/>
    </div>
  )
}
