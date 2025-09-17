
import React from 'react'
import { Logo } from '../Logo'



export const Header = ():React.ReactElement => {
  return (
    <div className='h-16 border-b border-gray-200 shadow flex justify-between'>
      <Logo/>
    </div>
  )
}
