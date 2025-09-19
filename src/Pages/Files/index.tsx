import React, { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { useFiles } from "@/hooks/useFiles";

import * as XLSX from "xlsx";
import { EmptyFiles } from "./EmptyFiles";
import { ContactsTable } from "./ContactsTable";
import { ContactsExport } from "./ContactsExport";

export const Files = (): React.ReactElement => {

  const { files } = useFiles();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);

  const fileNames = files?.map(file => file.name).join(", ") || "";
  const fileCount = files?.length || 0;

  useEffect(() => {
    if (!files || files.length === 0) return;
  
    setLoading(true);
  
    const parseFile = (file: File): Promise<Contact[]> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          try {
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
  
            resolve(formatted as Contact[]);
          } catch (err) {
            reject(err);
          }
        };
  
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    };
  
    Promise.all(files.map(parseFile))
      .then((results) => {
        // results es un array de arrays => lo aplanamos
        const allContacts = results.flat();
        setContacts(allContacts);
      })
      .catch((err) => {
        console.error("Error parsing files:", err);
      })
      .finally(() => setLoading(false));
  }, [files]);
  

  if (loading) return <Loader />;

  if(fileCount === 0) return <EmptyFiles />;

  return (
    <div className="flex-1 flex flex-col p-8">

      <div className="flex flex-col items-center justify-between gap-5 pb-4 px-2 border-b border-gray-200 md:flex-row">

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-emerald-600 text-center  md:text-left">Contactos importados</h2>
          <p className="text-sm text-gray-500 text-center md:text-left hidden md:block" >{ fileCount > 1 ? `Archivos (${fileCount}):` : 'Archivo:'} {fileNames}</p>
        </div>
      
        <ContactsExport contacts={contacts}/>

      </div>

      <ContactsTable contacts={contacts} />

    </div>
  );
};
