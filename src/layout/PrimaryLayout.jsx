import React from "react";
import { Navbar, Footer } from "../components";
import { HomePage } from "../pages";

export default function PrimaryLayout() {
  return (
    <div className="flex flex-col items-center gap-12">
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
