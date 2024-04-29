import Link from "next/link";
import React from "react";

const AppBar = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold" href="#">
          Recipe Collection
        </Link>
        <nav className="space-x-4">
          <Link className="hover:text-gray-400" href="#">
            Recipes
          </Link>
          <Link className="hover:text-gray-400" href="#">
            Login
          </Link>
          <Link className="hover:text-gray-400" href="#">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
