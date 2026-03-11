import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-emerald-400 backdrop-blur-md border-b">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Left Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a className="text-sm uppercase tracking-widest font-light text-gray-900 hover:border-b hover:text-gray-500 cursor-pointer">
            Accommodation
          </a>
          <a className="text-sm uppercase tracking-widest font-light text-gray-900 hover:border-b hover:text-gray-500 cursor-pointer">
            Dining
          </a>
          <a className="text-sm uppercase tracking-widest font-light text-gray-900 hover:border-b hover:text-gray-500 cursor-pointer">
            Activities
          </a>
        </nav>

        {/* Logo */}
        <h1 className="text-xl tracking-widest font-light text-gray-900">
          Star<span className="font-semibold">Hotel</span>
        </h1>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-6">
          <a className="text-sm uppercase tracking-tight font-light text-gray-900 hover:text-gray-900 cursor-pointer">
            Contact
          </a>

          <button className="bg-white/20 text-gray-600 px-6 py-3 border border-emerald-500 text-sm tracking-tight hover:bg-emerald-500 hover:text-white transition duration-300 font-sans">
            Book Now
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-gray-700"></span>
            <span className="block w-6 h-[2px] bg-gray-700"></span>
            <span className="block w-6 h-[2px] bg-gray-700"></span>
          </div>
        </button>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t px-6 py-6 space-y-4 bg-white">

          <a className="block text-gray-700">Accommodation</a>
          <a className="block text-gray-700">Dining</a>
          <a className="block text-gray-700">Activities</a>
          <a className="block text-gray-700">Contact</a>

          <button className="w-full bg-gray-900 text-white py-3 rounded-md">
            Book Now
          </button>

        </div>
      )}
    </header>
  );
};

export default Navbar;