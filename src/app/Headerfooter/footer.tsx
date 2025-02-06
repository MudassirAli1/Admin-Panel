import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      setIsLoggingOut(false);
      // Here, you could navigate to another page if needed, e.g., after the logout process.
      // For now, it's just simulating a logout process.
    }, 2000); // Simulate a delay of 2 seconds
  };

  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Admin Panel Heading */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Admin Panel</h2>
        </div>

        {/* Logout Button */}
        <div className="flex items-center space-x-4">
          {isLoggingOut ? (
            <div className="loader border-t-4 border-b-4 border-red-600 border-solid w-8 h-8 rounded-full animate-spin"></div>
          ) : (
            <Link href="/admin" >
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500"
            >
              Logout
            </button></Link>
          )}
        </div>
      </div>

      {/* Additional Footer Content */}
      <div className="mt-6 border-t border-gray-600 pt-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            {/* Social Media Links */}
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Instagram
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p>&copy; {new Date().getFullYear()} Nike Store. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
