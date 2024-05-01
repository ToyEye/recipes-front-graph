import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { navLinks } from "@/lib/navLinks";

const MobileMenu = ({ isOpen = false }: { isOpen: boolean }) => {
  const isOpenMenu = clsx({
    "left-0 ": isOpen,
  });

  return (
    <nav
      className={`space-x-4 transition-all lg:hidden absolute top-1 -left-full w-1/2 h-1/2 bg-gray-900 border border-gray-400 rounded-md flex justify-center items-center ${isOpenMenu}`}
    >
      <ul className="flex flex-col items-center gap-4">
        {navLinks.map(({ id, link, text }) => (
          <li key={id}>
            <Link className="hover:text-gray-400" href={link}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
