import React from 'react'
import { Link } from 'react-router'

export const NotFound = (): React.ReactElement => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center gap-4'>
      <h2 className='text-3xl text-emerald-600 font-semibold'>Nada por aqui...</h2>
      <p className='text-lg'>Nada por alla...Creo que lo que buscas esta en otro lado, por que no <Link to="/" className='text-emerald-600 hover:underline' >volvemos al inicio?</Link></p>
    </div>
  )
}
