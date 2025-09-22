import { ContactsContext, type ContactsContextType } from "@/context/ContactsContext";
import { useContext } from "react";

export const useContacts = ():ContactsContextType => {
  const context  = useContext(ContactsContext);
  if(!context){
    throw new Error("useFiles debe usarse dentro de un ContactsProvider");
  }
  return context;
}