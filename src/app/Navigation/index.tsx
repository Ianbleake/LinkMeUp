import React from "react";
import { BrowserRouter } from "react-router-dom"; // usa react-router-dom
import { Router } from "./Routes";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Navigation = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="h-screen">
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
