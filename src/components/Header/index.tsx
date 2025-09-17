
import React from 'react'
import { Logo } from '../Logo'
import { Navbar } from './Navbar'



export const Header = ():React.ReactElement => {
  return (
    <div className='bg-white h-16 border-b border-gray-200 shadow flex justify-between'>
      <Logo/>
      <Navbar/>
    </div>
  )
}
