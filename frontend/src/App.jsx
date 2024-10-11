import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'

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

])
function App() {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#f1f1f1]'>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App