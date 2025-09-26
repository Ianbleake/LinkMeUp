import React from 'react'
import { Logo } from '../Logo'

export const Footer = ():React.ReactElement => {
  return (
    <div className='bg-white min-h-16 flex flex-col items-center justify-center border-t border-gray-200 shadow'>
      <Logo className='py-5'/>
      <span className='text-gray-400 text-sm'>V.1.0.0</span>
      <div className='mb-2'>
        <p className='text-gray-500 text-sm'>© 2025 <a href='https://bleake-dev.vercel.app' target='_blank' className='hover:text-emerald-600'>BleakeDev</a>. All rights reserved.</p>
      </div>
    </div>
  )
}
