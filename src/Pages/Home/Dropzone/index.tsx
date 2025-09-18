import React, { useState } from "react";
import type { DragEvent, ChangeEvent } from "react";
import { FileCard } from "./FileCard";
import { useFiles } from "@/hooks/useFiles";
import { merge } from "@/Utils/mergeStyles";
import { GoFileSymlinkFile } from "react-icons/go";
import { twTheme } from "@/Utils/ThemeColors";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";


export const Dropzone = (): React.ReactElement => {

  const navigate = useNavigate();

  const { files, addFiles } = useFiles();
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const allowedTypes = [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
  ];

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const validFiles: File[] = [];
    const invalidFiles: string[] = [];

    Array.from(newFiles).forEach(file => {
      if (allowedTypes.includes(file.type) || file.name.endsWith(".csv")) {
        validFiles.push(file);
      } else {
        invalidFiles.push(file.name);
      }
    });

    if (invalidFiles.length > 0) setError(`Formato no permitido: ${invalidFiles.join(", ")}`);
    else setError(null);

    if (validFiles.length > 0) addFiles(validFiles); // añade todos los archivos válidos juntos
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
    e.dataTransfer.clearData();
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  return (
    <div className="w-full px-4 flex flex-col gap-2">

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={ merge(' h-60 border-3 border-dotted rounded-lg p-6 text-center cursor-pointer transition shadow', isDragging ? "border-emerald-600 bg-green-50" : "border-gray-400" )}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <input
          id="fileInput"
          type="file"
          accept=".xls,.xlsx,.csv"
          multiple
          className="hidden"
          onChange={handleFileSelect}
        />
        <div className="flex flex-col items-center justify-center gap-4 h-full">
          <p className="text-gray-400 font-normal text-xl">
            {isDragging
              ? "Suelta el archivo aquí"
              : "Arrastra o haz click para subir un archivo (.xls, .xlsx, .csv)"}
          </p>
          <GoFileSymlinkFile size={40} color={twTheme.colors.gray[400]} />
        </div>

      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {files.length > 0 && (
        <div className="mt-4 overflow-auto h-60 flex flex-col gap-4">
          {files.map((file, idx) => (
            <FileCard key={idx} file={file} />
          ))}
          <Button className="bg-emerald-600 cursor-pointer w-fit mx-auto hover:bg-emerald-700 " onClick={()=>navigate('/files')}>
            Procesar Archivos
          </Button>
        </div>
      )}
    </div>
  );
};
