import { FilesContext, type FilesContextType } from "@/context/FilesContext";
import { useContext } from "react";


export const useFiles = (): FilesContextType => {
  const context = useContext(FilesContext);
  if (!context) {
    throw new Error("useFiles debe usarse dentro de un FilesProvider");
  }
  return context;
};
