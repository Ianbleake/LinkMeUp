import React from 'react'
import { Navigation } from './Navigation'

export const App = ():React.ReactElement => {
  return (
    <div className='h-screen w-screen bg-gray-100'>
      <Navigation/>
    </div>
  )
}
