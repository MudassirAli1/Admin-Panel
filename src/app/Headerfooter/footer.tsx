import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Admin Panel Heading */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Admin Panel</h2>
        </div>

        {/* Logout Button */}
        <div className="flex items-center space-x-4">
          <Link href="/logout">
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500">
              Logout
            </button>
          </Link>
        </div>
      </div>

      {/* Additional Footer Content */}
      <div className="mt-6 border-t border-gray-600 pt-4">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
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

          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Nike Store. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
