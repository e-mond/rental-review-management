import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white text-black py-4 shadow-md w-full">
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold italic">
          Logo
        </Link>

        {/* Navigation Links - Centered */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-600">
              Home Page
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-600">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-600">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              className="hover:text-gray-600"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Login ⌵
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg py-2 w-44 border">
                <Link
                  to="/tenant-login"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Tenant Login
                </Link>
                <Link
                  to="/landlord-login"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Landlord Login
                </Link>
                <Link to="/help" className="block px-4 py-2 hover:bg-gray-100">
                  Help Centre
                </Link>
              </div>
            )}
          </div>

          {/* Sign Up Button */}
          <Link
            to="/signup"
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
