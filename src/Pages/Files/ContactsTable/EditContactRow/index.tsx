import React from 'react'
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { MdEditOff } from "react-icons/md";
import { twTheme } from '@/Utils/ThemeColors';

type EditContactRowProps = {
  contact: Contact;
  index: number;
  editState: boolean;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditContactRow = ({
  contact,
  index,
  editState,
  setEditing,
}:EditContactRowProps ):React.ReactElement => {

  const handleEdit = ()=>{
    setEditing(!editState);
  }

  return (
    <TableRow className='bg-emerald-100 hover:bg-emerald-50'>
      <TableCell className='border-r-2 border-gray-200 shadow-sm'>
        <p className='text-center text-sm text-gray-500'>
          {index + 1}
        </p>
      </TableCell>
      <TableCell className='border-r-2 border-gray-200 shadow-sm'>
        <p className='text-center text-sm text-gray-500'>
          {contact.Nombre}
        </p>
      </TableCell>
      <TableCell className='border-r-2 border-gray-200 shadow-sm'>
        <p className='text-center text-sm text-gray-500'>
          {contact.Apellido}
        </p>
      </TableCell>
      <TableCell className='border-r-2 border-gray-200 shadow-sm'>
        <p className='text-center text-sm text-gray-500'>
          {contact.Correo}
        </p>
      </TableCell>
      <TableCell className='border-r-2 border-gray-200 shadow-sm'>
        <p className='text-center text-sm text-gray-500'>
          {contact.Pais}
        </p>
      </TableCell>
      <TableCell className='border-r-2 border-gray-200 shadow-sm'>
        <p className='text-center text-sm text-gray-500'>
          {contact.Numero || "-"}
        </p>
      </TableCell>
      <TableCell>
        <p className='text-center text-sm text-gray-500'>
          {contact.Empresa || "-"}
        </p>
      </TableCell>
      <TableCell>
        <button onClick={handleEdit}>
          <MdEditOff size={25} color={twTheme.colors.emerald[600]} />
        </button>
      </TableCell>
    </TableRow>
  )
}
