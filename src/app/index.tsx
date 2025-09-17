import React from 'react'
import { Navigation } from './Navigation'

export const App = ():React.ReactElement => {
  return (
    <div className='min-h-screen w-screen flex flex-col bg-gray-50'>
       <Navigation/>
    </div>
  )
}
