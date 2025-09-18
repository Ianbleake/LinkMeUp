import React, { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { useFiles } from "@/hooks/useFiles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import * as XLSX from "xlsx";
import { Button } from "@/components/ui/button";
import { RiContactsBook2Fill } from "react-icons/ri";
import { twTheme } from "@/Utils/ThemeColors";
import { EmptyFiles } from "./EmptyFiles";

type Contact = {
  Nombre: string;
  Apellido: string;
  Pais: string;
  Numero: string;
  Correo: string;
  Empresa: string;
};

export const Files = (): React.ReactElement => {
  const { files } = useFiles();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);

  const fileNames = files?.map(file => file.name).join(", ") || "";
  const fileCount = files?.length || 0;

  useEffect(() => {
    if (!files || files.length === 0) return;

    setLoading(true);
    setContacts([]);

    let processed = 0;
    const total = files.length;

    for (const file of files) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet, {
          header: 1,
          defval: "",
        });

        const [headers, ...rows] = jsonData as string[][];
        const cleanHeaders = headers.map((h) => h.trim());
        const formatted = rows.map((row) =>
          Object.fromEntries(row.map((cell, i) => [cleanHeaders[i], cell]))
        );

        setContacts((prev) => [...prev, ...(formatted as Contact[])]);

        processed++;
        if (processed === total) {
          setLoading(false);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  }, [files]);

  if (loading) return <Loader />;

  if(fileCount === 0) return <EmptyFiles />;

  return (
    <div className="flex-1 flex flex-col p-8">

      <div className="flex flex-row items-center justify-between pb-4 px-2 border-b border-gray-200">

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-emerald-600">Contactos importados</h2>
          <p className="text-sm text-gray-500" >{ fileCount > 1 ? `Archivos (${fileCount}):` : 'Archivo:'} {fileNames}</p>
        </div>
      
        <Button className="bg-emerald-600 cursor-pointer hover:bg-emerald-700">
          Importar contactos
          <RiContactsBook2Fill size={35} color={twTheme.colors.white} />
        </Button>

      </div>

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
  );
};
