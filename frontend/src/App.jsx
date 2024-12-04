import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Profile from './components/Profile'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element :<Home/>
  },
  
  {
    path:'/login',
    element :<Login/>
  },
  {
    path:'/signup',
    element :<Signup/>
  },
  // {
  //   path:'/jobs',
  //   element :<Jobs/>
  // },
  // {
  //   path:'/browse',
  //   element :<Browse/>
  // },
  {
    path:'/profile',
    element :<Profile/>
  },

])

function App() {
  return (
    <div className='w-[100v  bg-[#f1f1f1] '>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App