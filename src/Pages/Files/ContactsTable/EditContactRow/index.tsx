import React, { useEffect } from "react";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { MdEditOff } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { useContacts } from "@/hooks/useContacts";
import { useForm } from "react-hook-form";
import { twTheme } from "@/Utils/ThemeColors";

type EditContactRowProps = {
  contact: Contact;
  index: number;
  editState: boolean;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditContactRow = ({
  contact,
  index,
  editState,
  setEditing,
}: EditContactRowProps): React.ReactElement => {
  const { updateContact } = useContacts();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>({
    defaultValues: contact,
  });

  useEffect(() => {
    reset(contact);
  }, [contact, reset]);

  const onSubmit = (data: Contact) => {
    updateContact(data);
    setEditing(false);
  };

  const handleEdit = () => setEditing(!editState);

  return (
    <TableRow>
      <TableCell className="border-r-2 border-gray-200 shadow-sm">
        <p className="text-center text-sm text-gray-500">{index + 1}</p>
      </TableCell>

      <TableCell className="max-w-12 border-r-2 border-gray-200 shadow-sm px-4">
        <input
          {...register("Nombre", { required: true })}
          className="h-9 w-full shadow-sm shadow-emerald-600 bg-white rounded-sm text-center"
        />
        {errors.Nombre && (
          <p className="text-xs text-red-500 text-center">Requerido</p>
        )}
      </TableCell>

      <TableCell className="max-w-12 border-r-2 border-gray-200 shadow-sm">
        <input
          {...register("Apellido")}
          className="h-9 w-full shadow-sm shadow-emerald-600 bg-white rounded-sm text-center"
        />
      </TableCell>

      <TableCell className="max-w-12 border-r-2 border-gray-200 shadow-sm">
        <input
          {...register("Correo", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className="h-9 w-full shadow-sm shadow-emerald-600 bg-white rounded-sm text-center"
        />
        {errors.Correo && (
          <p className="text-xs text-red-500 text-center">Correo inválido</p>
        )}
      </TableCell>

      <TableCell className="max-w-12 border-r-2 border-gray-200 shadow-sm">
        <input
          {...register("Pais")}
          className="h-9 w-full shadow-sm shadow-emerald-600 bg-white rounded-sm text-center"
        />
      </TableCell>

      <TableCell className="max-w-12 border-r-2 border-gray-200 shadow-sm">
        <input
          {...register("Numero")}
          className="h-9 w-full shadow-sm shadow-emerald-600 bg-white rounded-sm text-center"
        />
      </TableCell>

      <TableCell className="max-w-12 border-r-2 border-gray-200 shadow-sm">
        <input
          {...register("Empresa")}
          className="h-9 w-full shadow-sm shadow-emerald-600 bg-white rounded-sm text-center"
        />
      </TableCell>

      <TableCell className="flex flex-row gap-3 items-center justify-center px-4">
        <button onClick={handleSubmit(onSubmit)} className="cursor-pointer">
          <GrDocumentUpdate
            size={23}
            color={twTheme.colors.emerald[600]}
          />
        </button>
        <button onClick={handleEdit} className=" cursor-pointer">
          <MdEditOff size={25} color={twTheme.colors.emerald[600]} />
        </button>
      </TableCell>
    </TableRow>
  );
};
