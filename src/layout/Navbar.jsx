import {
  AlignJustify,
  AlignRight,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-primaryTextColor p-4">
      <div className="grid grid-cols-10">
        <h1 className="col-span-4 justify-self-start">Alem Ticaret</h1>
        <div className="col-start-7 col-span-4 flex justify-end items-center space-x-4">
          <UserRound />
          <Search />
          <ShoppingCart />
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AlignRight /> : <AlignJustify />}
          </button>
        </div>
      </div>
      <div
        className={`md:grid md:grid-cols-4 ${
          isOpen ? "grid" : "hidden"
        } mt-4 md:mt-0`}
      >
        <a href="#home" className="px-4 py-2">
          Home
        </a>
        <a href="#product" className="px-4 py-2">
          Product
        </a>
        <a href="#pricing" className="px-4 py-2">
          Pricing
        </a>
        <a href="#contact" className="px-4 py-2">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
