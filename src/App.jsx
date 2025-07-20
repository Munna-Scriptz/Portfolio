import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { LayoutOne } from './layout/LayoutOne'
import { Home } from './pages/Home'
import { RouterProvider } from 'react-router'
import Loader from './components/Loader'
import Cursor from './components/Cursor'

export const App = () => {
  

  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}></Route>
      </Route>
    </Route>
  ))


  return (

    <>
    <Cursor/>
    <Loader/>
      <RouterProvider router={MyRoute}></RouterProvider>
    </>
  )
}

export default App