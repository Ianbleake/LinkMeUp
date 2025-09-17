import React from 'react'
import { Link } from 'react-router'
import { VscGithub } from "react-icons/vsc";
import { twTheme } from '@/Utils/ThemeColors';

export const Navbar = ():React.ReactElement => {
  return (
    <div className='flex items-center gap-4 px-4'>
      <Link to="/info" className='text-lg font-semibold text-emerald-600'>Informacion</Link>
      <a href='https://github.com/Ianbleake' target='_blank'>
        <VscGithub size={35} color={twTheme.colors.emerald[600]} />
      </a>
    </div>
  )
}
