import { FilesContext } from "@/context/FilesContext";
import type { FilesContextType } from "@/context/FilesContext";
import { useContext } from "react";


export const useFiles = (): FilesContextType => {

  const context = useContext(FilesContext);

  return context;
};
