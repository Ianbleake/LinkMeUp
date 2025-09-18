import React from 'react'

export const Loader = (): React.ReactElement => {
  return (
    <div className="flex flex-col flex-1 gap-4 justify-center items-center">
      <h2 className='text-lg font-semibold text-gray-400'>Cargando contactos...</h2>
      <div className="w-12 h-12 border-4 border-t-emerald-600 border-gray-200 rounded-full animate-spin"></div>
    </div>
  )
}
