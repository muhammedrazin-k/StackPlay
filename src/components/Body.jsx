import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const Body = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'>
      <Header/>
      <Outlet/>
      <Footer/>  
    </div>
  )
}
