import React from 'react'
import { MainInfo } from './MainInfo'
import { Dropzone } from './Dropzone'

export const Home = (): React.ReactElement => {
  return (
    <div className="h-full flex flex-col md:flex-row">

      <div className="w-full p-6 md:w-1/2">
        <MainInfo />
      </div>

      <div className="w-full flex flex-col items-center gap-4 p-6 md:w-1/2">
        <h2 className="text-3xl font-semibold text-emerald-600 mt-4">
          Carga aquí tu archivo:
        </h2>
        <Dropzone />
      </div>

    </div>
  )
}
