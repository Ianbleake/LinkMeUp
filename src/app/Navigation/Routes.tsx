import { Files } from "@/Pages/Files";
import { Home } from "@/Pages/Home";
import { Import } from "@/Pages/Import";
import { Info } from "@/Pages/Info";
import { NotFound } from "@/Pages/NotFound";
import React from "react";
import { Routes, Route } from "react-router";

export const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/files" element={<Files />} />
      <Route path="/import" element={<Import/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
