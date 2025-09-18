import React from 'react'
import { MainInfo } from './MainInfo'
import { Dropzone } from './Dropzone'
import { FilesProvider } from '@/context/FilesContext'

export const Home = ():React.ReactElement => {
  return (
    <div className='h-full flex flex-raw'>

      <div className='w-1/2 p-6'>
        <MainInfo/>
      </div>

      <div className='w-1/2 flex flex-col items-center gap-4 p-6'>
        <h2 className='text-3xl font-semibold text-emerald-600 mt-4'>Carga aqui tu archivo:</h2>
        <FilesProvider>
          <Dropzone/>
        </FilesProvider>

      </div>

    </div>
  )
}
