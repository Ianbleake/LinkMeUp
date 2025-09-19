import React from 'react'
import { Button } from '@/components/ui/button'
import { twTheme } from '@/Utils/ThemeColors';
import { FaFileDownload } from "react-icons/fa";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const DowloadTemplate = (): React.ReactElement => {
  const handleDownload = () => {
    
    const data = [
      ["Nombre", "Apellido", "Pais", "Numero", "Correo", "Empresa",] //* encabezados
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Plantilla");

    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([wbout], { type: "application/octet-stream" }), "LinkMeUp Template.xlsx");
  };

  return (
    <Button 
      className='bg-emerald-600 cursor-pointer hover:bg-emerald-700' 
      onClick={handleDownload}
    >
      Descargar plantilla
      <FaFileDownload size={30} color={twTheme.colors.white} />
    </Button>
  )
}
