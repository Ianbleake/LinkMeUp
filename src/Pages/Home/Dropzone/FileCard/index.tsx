import { useFiles } from "@/hooks/useFiles";
import React, { useMemo } from "react";
import { FaFileExcel, FaFileCsv, FaFileAlt } from "react-icons/fa";


type FileCardProps = {
  file: File;
};

export const FileCard = ({ file }: FileCardProps): React.ReactElement => {
  const { removeFile } = useFiles();

  const fileIcon: React.ReactElement = useMemo(() => {
    if (
      file.type === "application/vnd.ms-excel" ||
      file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) return <FaFileExcel className="text-green-600 text-2xl" />;

    if (file.type === "text/csv" || file.name.endsWith(".csv"))
      return <FaFileCsv className="text-blue-600 text-2xl" />;

    return <FaFileAlt className="text-gray-500 text-2xl" />;
  }, [file]);

  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-lg shadow-sm p-3 my-2 bg-white">
      <div className="flex items-center gap-3">
        {fileIcon}
        <div>
          <p className="text-sm font-medium text-gray-800 truncate max-w-[200px]">
            {file.name}
          </p>
          <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
        </div>
      </div>

      <button
        className="text-red-500 hover:text-red-700 text-sm font-medium"
        onClick={() => removeFile(file.name)}
      >
        Eliminar
      </button>
    </div>
  );
};
