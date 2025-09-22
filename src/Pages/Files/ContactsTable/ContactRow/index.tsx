import React from 'react'
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { EditContactRow } from '../EditContactRow';
import { useContacts } from '@/hooks/useContacts';
import { MdModeEditOutline } from "react-icons/md";
import { twTheme } from '@/Utils/ThemeColors';

type ContactRowProps = {
  contact: Contact;
  index: number;
}

export const ContactRow = ({
  contact,
  index,
}:ContactRowProps ):React.ReactElement => {

  const { isEditing, setEditing } = useContacts();

  const handleEdit = ()=>{
    setEditing(!isEditing);
  }

  if(isEditing){
    return(
      <EditContactRow contact={contact} index={index} />
    )
  }

  return (
    <TableRow>
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
        <MdModeEditOutline size={25} color={twTheme.colors.emerald[600]} />
        </button>
      </TableCell>
    </TableRow>
  )
}
