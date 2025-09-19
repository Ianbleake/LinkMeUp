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
    <div className="px-4" >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Apellido</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Pais</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Empresa</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{contact.Nombre}</TableCell>
              <TableCell>{contact.Apellido}</TableCell>
              <TableCell>{contact.Correo}</TableCell>
              <TableCell>{contact.Pais}</TableCell>
              <TableCell>{contact.Numero || "-"}</TableCell>
              <TableCell>{contact.Empresa || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
