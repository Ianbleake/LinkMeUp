import React from 'react'
import { Button } from "@/components/ui/button";
import { RiContactsBook2Fill } from "react-icons/ri";
import { twTheme } from "@/Utils/ThemeColors";
import { saveAs } from "file-saver";

type ContactsExportProps = {
  contacts: Contact[];
}

export const ContactsExport = ({
  contacts,
}:ContactsExportProps ):React.ReactElement => {
  
  const handleExport = () => {

    const vcfContent = contacts.map(c => {
      const phone = c.Numero ? `+${c.Pais}${c.Numero}` : "";
    
      return [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${c.Apellido || ""};${c.Nombre || ""};;;`,
        `FN:${c.Nombre || ""} ${c.Apellido || ""}`.trim(),
        phone ? `TEL;TYPE=CELL:${phone}` : "",
        c.Correo ? `EMAIL;TYPE=INTERNET:${c.Correo}` : "",
        c.Empresa ? `ORG:${c.Empresa}` : "",
        // Si quieres guardar el país textual en ADR
        typeof c.Pais === "string" ? `ADR;TYPE=home:;;${c.Pais}` : "",
        "END:VCARD"
      ]
        .filter(Boolean)
        .join("\n");
    }).join("\n");
    
    

    const blob = new Blob([vcfContent], { type: "text/vcard;charset=utf-8" });
    saveAs(blob, "contactos.vcf");
  };

  return (
    <Button 
      className="bg-emerald-600 cursor-pointer hover:bg-emerald-700"
      onClick={handleExport}
    >
      Importar contactos
      <RiContactsBook2Fill size={35} color={twTheme.colors.white} />
    </Button>
  )
}
