import React from 'react';
import { FaSearch, FaUser, FaGlobe } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-red-500">ALXbnb</div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-full shadow-sm px-4 py-2">
            <input
              type="text"
              placeholder="Search destinations"
              className="outline-none flex-grow"
            />
            <FaSearch className="text-gray-500 ml-2" />
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 hover:bg-gray-100 rounded-full">
              Become a host
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaGlobe className="text-gray-700" />
            </button>
            <button className="flex items-center border border-gray-300 rounded-full px-3 py-2 space-x-2 hover:shadow-md">
              <FaUser className="text-gray-700" />
              <FaSearch className="text-gray-700 md:hidden" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
