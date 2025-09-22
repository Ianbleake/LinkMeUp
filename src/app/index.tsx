import React from 'react'
import { Navigation } from './Navigation'
import { FilesProvider } from '@/context/FilesContext'
import { ContactsProvider } from '@/context/ContactsContext'

export const App = ():React.ReactElement => {
  return (
    <div className='min-h-screen w-screen flex flex-col bg-gray-50'>
      <FilesProvider>
        <ContactsProvider>
          <Navigation/>
        </ContactsProvider>
      </FilesProvider>
    </div>
  )
}
