import  { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { HiSun } from "react-icons/hi";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-md relative">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <img src="/logo.jpg" alt="Logo" className="h-12 w-12 sm:h-16 sm:w-16 rounded-full" />
        <h1 className="text-white text-xl sm:text-2xl font-bold">GameHub</h1>
      </div>

      {/* Search Bar for Larger Screens */}
      <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-xs mx-4">
        <CiSearch className="text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search games..."
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {toggle ? (
          <IoMoonOutline className="text-white w-6 h-6 cursor-pointer" onClick={() => setToggle(!toggle)} />
        ) : (
          <HiSun className="text-white w-6 h-6 cursor-pointer" onClick={() => setToggle(!toggle)} />
        )}
        {/* Search Icon for Mobile */}
        <div className="md:hidden">
          <CiSearch
            className="text-white w-6 h-6 cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showSearch && (
        <div className="absolute top-16 left-0 right-0 bg-white p-4 shadow-md flex items-center z-10">
          <CiSearch className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search games..."
            className="bg-transparent outline-none ml-2 w-full"
          />
          <button
            className="text-gray-500 w-5 h-5"
            onClick={() => setShowSearch(false)}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
