import { createContext, useState } from "react";


export type ContactsContextType = {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<never[]>>
}

type ContactsProviderProps = {
  children: React.ReactElement;
}

/* eslint-disable react-refresh/only-export-components */
export const ContactsContext = createContext<ContactsContextType>({
  contacts: [],
  setContacts: () => {},
})

export const ContactsProvider = ({
  children
}: ContactsProviderProps ) => {

  const [ contacts, setContacts ] = useState([])

  return (
    <ContactsContext.Provider value={{
      contacts,
      setContacts,
    }}>
      { children }
    </ContactsContext.Provider>
  )
}

