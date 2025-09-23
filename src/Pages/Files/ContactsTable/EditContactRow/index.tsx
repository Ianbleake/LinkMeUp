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

  const updateContact = () => {

  }

  return (
      <TableRow>
        <TableCell className='border-r-2 border-gray-200 shadow-sm'>
          <p className='text-center text-sm text-gray-500'>
            {index + 1}
          </p>
        </TableCell>
        <TableCell className=' max-w-12 border-r-2 border-gray-200 shadow-sm px-4'>
          <input type='text' value={contact.Nombre} className='h-9 w-full shadow-sm shadow-emerald-600 bg-white rounded-sm text-center ' />
        </TableCell>
        <TableCell className='max-w-12 border-r-2 border-gray-200 shadow-sm'>
          <input type='text' value={contact.Apellido} className='h-9 w-full shadow-sm shadow-emerald-600 bg-white rounded-sm text-center' />
        </TableCell>
        <TableCell className='max-w-12 border-r-2 border-gray-200 shadow-sm'>
          <input type='text' value={contact.Correo} className='h-9 w-full shadow-sm shadow-emerald-600 bg-white rounded-sm text-center' />
        </TableCell>
        <TableCell className='max-w-12 border-r-2 border-gray-200 shadow-sm'>
          <input type='text' value={contact.Pais} className='h-9 w-full shadow-sm shadow-emerald-600 bg-white rounded-sm text-center' />
        </TableCell>
        <TableCell className='max-w-12 border-r-2 border-gray-200 shadow-sm'>
          <input type='text' value={contact.Numero} className='h-9 w-full shadow-sm shadow-emerald-600 bg-white rounded-sm text-center' />
        </TableCell>
        <TableCell className='max-w-12 border-r-2 border-gray-200 shadow-sm'>
          <input type='text' value={contact.Empresa} className='h-9 w-full shadow-sm shadow-emerald-600 bg-white rounded-sm text-center' />
        </TableCell>
        <TableCell className='flex flex-row gap-4 items-center justify-center'>
          <button onClick={updateContact}>
            X
          </button>
          <button onClick={handleEdit}>
            <MdEditOff size={25} color={twTheme.colors.emerald[600]} />
          </button>
        </TableCell>
      </TableRow>
  )
}
