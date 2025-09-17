import React from "react";
import { twTheme } from "@/Utils/ThemeColors";
import { MdConnectWithoutContact } from "react-icons/md";
import { Link } from "react-router";
import { merge } from "@/Utils/mergeStyles";

type LogoProps = {
  className?: string;
};

export const Logo = ({
  className,
}:LogoProps ): React.ReactElement => {

  return (
    <Link to="/" className={merge('flex justify-center items-center gap-3 px-6',className)}>
      <h1 className="text-emerald-600 font-semibold text-xl italic">LinkMeUp</h1>
      <MdConnectWithoutContact size={30} color={twTheme.colors.emerald[600]} />
    </Link>
  );
  
};
