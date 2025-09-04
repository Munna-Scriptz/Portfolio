import React, { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { LayoutOne } from './layout/LayoutOne'
import { Home } from './pages/Home'
import { RouterProvider } from 'react-router'
import Loader from './components/Loader'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


export const App = () => {
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

// Sync scrollTarget when user drags scrollbar
window.addEventListener('scroll', () => {
  if (!isTicking) {
    scrollTarget = window.scrollY;
    currentScroll = window.scrollY;
  }
});

function smoothScroll() {
  const distance = scrollTarget - currentScroll;
  const delta = distance * 0.1; // easing factor

  currentScroll += delta;

  if (Math.abs(distance) < 0.5) {
    currentScroll = scrollTarget;
    isTicking = false;
  } else {
    requestAnimationFrame(smoothScroll);
  }

  window.scrollTo(0, currentScroll);
}

// ------------------PreLoader 
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => setLoading(false), 6100);
      setTimeout(() => setShowContent(true), 4500);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);
// ---------------Routing 
  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Route>
    </Route>
  ))


  return (
    <>
      {
        loading && <Loader />
      }
      {
        showContent && <RouterProvider router={MyRoute} />
      }
    </>
  )
}

export default App