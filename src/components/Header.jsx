import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 w-full h-16 flex px-[3%] items-center'>
        <div > <i className="fa-solid fa-layer-group fa-2xl text-amber-400"></i></div>
        <Link className='no-underline' to={'/'}>
        <h3 className='text-gray-200  font-[orbitron] tracking-normal font-bold text-xl mx-2 my-auto ' >STACK PLAY  </h3>
        </Link>
    </div>
  )
}
