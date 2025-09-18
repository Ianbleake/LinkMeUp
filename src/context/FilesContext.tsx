import { createContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

export type FilesContextType = {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  addFile: (file: File) => void;
  addFiles: (files: File[]) => void;
  removeFile: (fileName: string) => void;
};

/* eslint-disable react-refresh/only-export-components */
export const FilesContext = createContext<FilesContextType>({
  files: [],
  setFiles: () => {},
  addFile: () => {},
  addFiles: () => {},
  removeFile: () => {},
});

type FilesProviderProps = {
  children: ReactNode;
};

export const FilesProvider = ({ children }: FilesProviderProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const addFile = (file: File) => setFiles(prev => [...prev, file]);

  const addFiles = (newFiles: File[]) => setFiles(prev => [...prev, ...newFiles]);

  const removeFile = (fileName: string) =>
    setFiles(prev => prev.filter(f => f.name !== fileName));

  return (
    <FilesContext.Provider value={{ files, setFiles, addFile, addFiles, removeFile }}>
      {children}
    </FilesContext.Provider>
  );
};
