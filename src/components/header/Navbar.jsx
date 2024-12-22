import {
  AlignJustify,
  AlignRight,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-primaryTextColor px-12">
      <div className="grid grid-cols-10">
        <h1 className="h1 col-span-5 justify-self-start">Alem Ticaret</h1>
        <div className="col-start-7 col-span-4 flex justify-end items-center gap-4 text-primaryTextColor">
          <Link to="/login">
            <UserRound />
          </Link>
          <Search />
          <ShoppingCart />
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AlignRight /> : <AlignJustify />}
          </button>
        </div>
      </div>
      <div
        className={`text-secondaryTextColor justify-center gap-2 md:flex md:gap-6  ${
          isOpen ? "grid" : "hidden"
        } mt-4 md:mt-0`}
      >
        <h2 className="h2">Anasayfa</h2>
        <h2 className="h2">Hakkımızda</h2>
        <h2 className="h2">Ürünler</h2>
        <h2 className="h2">İletişim</h2>
      </div>
    </nav>
  );
}
