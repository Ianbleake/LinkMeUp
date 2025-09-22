import React from 'react'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ContactRow } from './ContactRow';
import { useContacts } from '@/hooks/useContacts';

export const ContactsTable = ():React.ReactElement => {

  const { contacts } = useContacts();

  return (
    <div className="px-1 md:px-14 mt-4">
      <div className="rounded-md border-2 border-gray-200 shadow-sm overflow-hidden">
        <Table>
          
          <TableHeader>
            <TableRow>
              <TableHead className='border-r-2 border-gray-200 shadow-sm'>
                <p className='text-center text-md text-gray-900'>
                  No.
                </p>
              </TableHead>
              <TableHead className='border-r-2 border-gray-200 shadow-sm'>
                <p className='text-center text-md text-gray-900'>
                  Nombre
                </p>
              </TableHead>
              <TableHead className='border-r-2 border-gray-200 shadow-sm'>
                <p className='text-center text-md text-gray-900'>
                  Apellido
                </p>
              </TableHead>
              <TableHead className='border-r-2 border-gray-200 shadow-sm'>
                <p className='text-center text-md text-gray-900'>
                  Email
                </p>
              </TableHead>
              <TableHead className='border-r-2 border-gray-200 shadow-sm'>
                <p className='text-center text-md text-gray-900'>
                  Pais
                </p>
              </TableHead>
              <TableHead className='border-r-2 border-gray-200 shadow-sm'>
                <p className='text-center text-md text-gray-900'>
                  Teléfono
                </p>
              </TableHead>
              <TableHead >
                <p className='text-center text-md text-gray-900'>
                  Empresa
                </p>
              </TableHead>
              <TableHead>

              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {contacts.map((contact, index) => (
                <ContactRow contact={contact} index={index} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
