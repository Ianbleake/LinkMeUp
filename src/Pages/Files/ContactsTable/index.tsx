import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ContactsTableProps = {
  contacts: Contact[];
}

export const ContactsTable = ({
  contacts,
}: ContactsTableProps ):React.ReactElement => {
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact, index) => (
              <TableRow key={index}>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
