import { Button } from '@/components/ui/button';
import { twTheme } from '@/Utils/ThemeColors';
import React from 'react'
import { CiFileOff } from "react-icons/ci";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from 'react-router';

export const EmptyFiles = (): React.ReactElement => {
  
  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-1 gap-6 justify-center items-center">
      <h2 className='text-2xl font-semibold text-emerald-600'>No hay archivos cargados.</h2>
      <CiFileOff size={90} color={twTheme.colors.emerald[600]} />
      <Button className="bg-emerald-600 cursor-pointer hover:bg-emerald-700" onClick={()=>navigate('/') }>
        Cargar archivos 
        <RiArrowGoBackLine />
      </Button>
    </div>
  )
}
