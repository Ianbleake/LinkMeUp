import React, { useState } from "react";
import type { DragEvent, ChangeEvent } from "react";
import { FileCard } from "./FileCard";

export const Dropzone = (): React.ReactElement => {
  
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
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

    Array.from(newFiles).forEach((file) => {
      if (allowedTypes.includes(file.type) || file.name.endsWith(".csv")) {
        validFiles.push(file);
      } else {
        invalidFiles.push(file.name);
      }
    });

    if (invalidFiles.length > 0) {
      setError(`Formato no permitido: ${invalidFiles.join(", ")}`);
    } else {
      setError(null);
    }

    if (validFiles.length > 0) {
      setFiles(validFiles);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

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
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-400"
        }`}
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
        <p className="text-gray-600">
          {isDragging
            ? "Suelta el archivo aquí"
            : "Arrastra o haz click para subir un archivo (.xls, .xlsx, .csv)"}
        </p>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {files.length > 0 && (
        <div className="mt-4 overflow-auto h-60">
          {files.map((file, idx) => (
            <FileCard key={idx} file={file} />
          ))}
        </div>
      )}
    </div>
  );
};
