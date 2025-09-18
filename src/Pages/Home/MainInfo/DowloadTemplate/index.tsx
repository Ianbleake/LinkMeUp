import React from 'react'
import { Button } from '@/components/ui/button'
import { twTheme } from '@/Utils/ThemeColors';
import { FaFileDownload } from "react-icons/fa";

export const DowloadTemplate = (): React.ReactElement => {
  return (
    <Button className='bg-emerald-600' onClick={()=>console.log("Dowloading template...")}>
      Descargar plantilla
      <FaFileDownload size={30} color={twTheme.colors.white} />
    </Button>
  )
}
