
import React from 'react'
import { DowloadTemplate } from './DowloadTemplate'


export const MainInfo = ():React.ReactElement => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-4 px-12 '>
      <h2 className=' text-3xl font-semibold text-emerald-600 self-start'>Muchos contactos que registrar?</h2>
      <p className=' text-justify text-lg font-normal text-gray-600'>
        LinkMeUp es una herramienta que te ayudara a registrar en tu dispositivo largas listas de contactos de forma agil y rapida.<br/>
        Solo baja nuestra plantilla y una vez llena, solo tienes que cargarla aqui y descargar la Vcard en tu dispositivo para añadir todos los contactos de una vez.
      </p>

      <DowloadTemplate/>
    </div>
  )
}
