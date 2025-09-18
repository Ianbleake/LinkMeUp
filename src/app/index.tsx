import React from 'react'
import { Navigation } from './Navigation'
import { FilesProvider } from '@/context/FilesContext'

export const App = ():React.ReactElement => {
  return (
    <div className='min-h-screen w-screen flex flex-col bg-gray-50'>
      <FilesProvider>
        <Navigation/>
      </FilesProvider>
    </div>
  )
}
