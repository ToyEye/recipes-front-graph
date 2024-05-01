"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import MobileMenu from "../MobileMenu/MobileMenu";

import { navLinks } from "@/lib/navLinks";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold" href="#">
          Recipe Collection
        </Link>
        <button className="lg:hidden cursor-pointer" onClick={onMenuToggle}>
          <GiHamburgerMenu />
        </button>
        <nav className="hidden lg:block space-x-4">
          <ul className="flex gap-4">
            {navLinks.map(({ id, link, text }) => (
              <li key={id}>
                <Link className="hover:text-gray-400" href={link}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu isOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default AppBar;
