import React from 'react'
import { Button } from "@/components/ui/button";
import { RiContactsBook2Fill } from "react-icons/ri";
import { twTheme } from "@/Utils/ThemeColors";

export const ContactsExport = ():React.ReactElement => {
  return (
    <Button className="bg-emerald-600 cursor-pointer hover:bg-emerald-700">
      Importar contactos
      <RiContactsBook2Fill size={35} color={twTheme.colors.white} />
    </Button>
  )
}
