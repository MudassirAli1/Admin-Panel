import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white py-6">
      {/* Header Title */}
      <div className="container mx-auto flex justify-between items-center px-4 mt-4">
        <div className="text-3xl font-semibold text-center w-full">
          <h1>Welcome to Admin Panel of Nike Store</h1>
        </div>
      </div>

      {/* White Line between Header and Links */}
      <div className="container mx-auto px-4 mt-4 border-b border-white"></div>

      {/* Navigation Links */}
      <div className="container mx-auto flex justify-between items-center px-4 mt-4">
        <nav className="flex space-x-8 justify-center w-full">
          <Link href="/admin/dashboard">
            <span className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              Dashboard
            </span>
          </Link>
          <Link href="/orders">
            <span className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              Orders
            </span>
          </Link>
          <Link href="manageorders">
            <span className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              Manage Orders
            </span>
          </Link>
          <Link href="/inventory">
            <span className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              Inventory
            </span>
          </Link>
          <Link href="/users">
            <span className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              Users
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
