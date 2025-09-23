import { createContext, useState } from "react";


export type ContactsContextType = {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  updateContact: (contact: Contact)=>void;
}

type ContactsProviderProps = {
  children: React.ReactElement;
}

/* eslint-disable react-refresh/only-export-components */
export const ContactsContext = createContext<ContactsContextType>({
  contacts: [],
  setContacts: () => {},
  updateContact: () => {},
})

export const ContactsProvider = ({
  children
}: ContactsProviderProps ) => {

  const [ contacts, setContacts ] = useState<Contact[]>([])

  const updateContact = (contact: Contact) => {
    setContacts(prev =>
      prev.map(c =>
        c.id === contact.id ? { ...c, ...contact } : c
      )
    );
  };
  

  return (
    <ContactsContext.Provider value={{
      contacts,
      setContacts,
      updateContact,
    }}>
      { children }
    </ContactsContext.Provider>
  )
}

