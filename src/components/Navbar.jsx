import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AlignJustify,
  AlignRight,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50  min-w-[280px] md:max-w-[480px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-2 py-2">
        {/* Logo */}
        <h1 className="h3 font-semibold text-blue-600">Alem Ticaret</h1>
        {/* Icons and Hamburger Menu */}
        <div className="flex items-center gap-2">
          <Link to="/user" className="text-gray-600 hover:text-blue-600">
            <UserRound size={16} />
          </Link>
          <Search className="text-gray-600 hover:text-blue-600" size={16} />
          <ShoppingCart
            className="text-gray-600 hover:text-blue-600"
            size={16}
          />
          <button
            className="text-gray-600 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AlignRight size={16} /> : <AlignJustify size={16} />}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex md:min-w-[480px] md:mx-auto justify-center`}
      >
        <NavigationMenu className="px-4 md:px-0">
          <NavigationMenuList className="flex flex-col md:flex-row items-center gap-3 py-2 md:py-0 text-sm">
            <Link
              to="/products"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Anasayfa
            </Link>

            <Link
              to="/products"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Hakkımızda
            </Link>

            <Link
              to="/products"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Ürünler
            </Link>

            <Link
              to="/products"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              İletişim
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
