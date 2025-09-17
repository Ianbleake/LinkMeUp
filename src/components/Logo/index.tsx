import React from "react";
import { twTheme } from "@/Utils/ThemeColors";
import { MdConnectWithoutContact } from "react-icons/md";
import { Link } from "react-router";

export const Logo = (): React.ReactElement => {
  return (
    <Link to="/" className="flex justify-center items-center gap-3 px-6">
      <h1 className="text-emerald-600 font-semibold text-xl italic">LinkMeUp</h1>
      <MdConnectWithoutContact size={30} color={twTheme.colors.emerald[600]} />
    </Link>
  );
};
