import React from "react";
import { Navbar, Footer } from "../components";
import { HomePage } from "../pages";

export default function PrimaryLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
