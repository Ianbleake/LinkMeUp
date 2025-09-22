import { createContext, useState } from "react";


export type ContactsContextType = {
  isEditing: boolean;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<never[]>>
}

type ContactsProviderProps = {
  children: React.ReactElement;
}

/* eslint-disable react-refresh/only-export-components */
export const ContactsContext = createContext<ContactsContextType>({
  isEditing: false,
  setEditing: () => {},
  contacts: [],
  setContacts: () => {},
})

export const ContactsProvider = ({
  children
}: ContactsProviderProps ) => {

  const [ isEditing, setEditing ] = useState(false);
  const [ contacts, setContacts ] = useState([])

  return (
    <ContactsContext.Provider value={{
      isEditing,
      setEditing,
      contacts,
      setContacts,
    }}>
      { children }
    </ContactsContext.Provider>
  )
}

