import { Home } from "@/Pages/Home";
import { Info } from "@/Pages/Info";
import { NotFound } from "@/Pages/NotFound";
import React from "react";
import { Routes, Route } from "react-router";

export const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
