import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle hamburger menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white py-6">
      {/* Header Title */}
      <div className="container mx-auto flex justify-between items-center px-4 mt-4">
        <h1 className="text-3xl font-semibold text-center w-full">Welcome to Admin Panel of Nike Store</h1>
        
        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* White Line between Header and Links */}
      <div className="container mx-auto px-4 mt-4 border-b border-white"></div>

      {/* Navigation Links (Desktop & Mobile) */}
      <div className={`lg:flex lg:space-x-8 lg:justify-center mt-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <nav className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 justify-center">
          <Link href="/dashboard">
            <span className="block py-2 px-4 text-center hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              Dashboard
            </span>
          </Link>
          <Link href="/orders">
            <span className="block py-2 px-4 text-center hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              Orders
            </span>
          </Link>
          <Link href="/manageorders">
            <span className="block py-2 px-4 text-center hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              Manage Orders
            </span>
          </Link>
          <Link href="/inventory">
            <span className="block py-2 px-4 text-center hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              Inventory
            </span>
          </Link>
          <Link href="/users">
            <span className="block py-2 px-4 text-center hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              Users
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
