import React from 'react'
import { Outlet } from 'react-router'
import { Home } from '../pages/Home'
import { Navbar } from '../components/Navbar'

export const LayoutOne = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
