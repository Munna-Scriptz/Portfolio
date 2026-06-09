import React, { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { LayoutOne } from './layout/LayoutOne'
import { RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify'
import ScrollProgress from './components/effects/ScrollProgress'
import SmoothScroll from './components/utils/SmoothScroll'
import PreloaderWrapper from './components/utils/PreloaderWrapper'

export const App = () => {
  // ---------------Routing 
  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne />}>
        <Route index element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Route>
    </Route>
  ))


  return (
    <>
      <SmoothScroll>
        <PreloaderWrapper>
          <RouterProvider router={MyRoute} />
        </PreloaderWrapper>

        <ScrollProgress />
        <Analytics />
        <ToastContainer />

      </SmoothScroll>
    </>
  )
}

export default App