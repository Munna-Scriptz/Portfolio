import React, { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { LayoutOne } from './layout/LayoutOne'
import { Home } from './pages/Home'
import { RouterProvider } from 'react-router'
import Loader from './components/Loader'


export const App = () => {
  // --------Smooth Scroll------------
let scrollTarget = window.scrollY;
let currentScroll = window.scrollY;
let isTicking = false;

window.addEventListener('wheel', (e) => {
  e.preventDefault();

  scrollTarget += e.deltaY;
  scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));

  if (!isTicking) {
    isTicking = true;
    requestAnimationFrame(smoothScroll);
  }
}, { passive: false });

function smoothScroll() {
  const distance = scrollTarget - currentScroll;
  const delta = distance * 0.1; // easing factor, smaller is smoother/slower

  currentScroll += delta;

  if (Math.abs(distance) < 0.5) {
    currentScroll = scrollTarget; // snap to target when close enough
    isTicking = false;
  } else {
    requestAnimationFrame(smoothScroll);
  }

  window.scrollTo(0, currentScroll);
}

// ------------------PreLoader 
const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // 2 seconds

    return () => clearTimeout(timer);
  }, []);
// ---------------Routing 
  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}></Route>
      </Route>
    </Route>
  ))


  return (
    <>
    {
      loading? (
        <Loader/>
      )
      :
      (
        <RouterProvider router={MyRoute}></RouterProvider>
      )
      
    }
    </>
  )
}

export default App