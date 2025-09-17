import React from "react";
import { BrowserRouter } from "react-router";
import { Router } from "./Routes";
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const Navigation = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Header/>
      <Router />
      <Footer/>
    </BrowserRouter>
  );
};
