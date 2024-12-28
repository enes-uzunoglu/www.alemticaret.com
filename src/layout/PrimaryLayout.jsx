import React from "react";
import { Navbar, Footer } from "../components";

export default function PrimaryLayout({ children }) {
  return (
    <div className="flex flex-col items-center gap-12">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
