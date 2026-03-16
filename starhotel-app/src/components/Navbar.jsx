import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-emerald-400 backdrop-blur-md border-b">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Left Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/rooms"
            className="text-sm uppercase tracking-widest font-light text-gray-900 hover:border-b hover:text-gray-500"
          >
            Accommodation
          </Link>

          <Link
            to="/events"
            className="text-sm uppercase tracking-widest font-light text-gray-900 hover:border-b hover:text-gray-500"
          >
            Events & Occasions
          </Link>

          <Link
            to="/dining"
            className="text-sm uppercase tracking-widest font-light text-gray-900 hover:border-b hover:text-gray-500"
          >
            Dining
          </Link>

          <Link
            to="/facilities"
            className="text-sm uppercase tracking-widest font-light text-gray-900 hover:border-b hover:text-gray-500"
          >
            Facilities
          </Link>
        </nav>

        {/* Logo */}
        <Link to="/" className="text-xl tracking-widest font-light text-gray-900">
          Star<span className="font-semibold">Hotel</span>
        </Link>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/gallery"
            className="text-sm uppercase tracking-tight font-light text-gray-900 hover:text-gray-900 hover:border-b hover:border-gray-500"
          >
            Gallery
          </Link>

          <Link to="/booking">
            <button className="bg-white/20 text-gray-600 px-6 py-3 border border-emerald-500 text-sm tracking-tight hover:bg-emerald-500 hover:text-white transition duration-300 font-sans">
              Book Now
            </button>
          </Link>
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

          <Link to="/rooms" className="block text-gray-700">
            Accommodation
          </Link>

          <Link to="/dining" className="block text-gray-700">
            Dining
          </Link>

          <Link to="/activities" className="block text-gray-700">
            Activities
          </Link>

          <Link to="/contact" className="block text-gray-700">
            Contact
          </Link>

          <Link to="/booking">
            <button className="w-full bg-gray-900 text-white py-3 rounded-md">
              Book Now
            </button>
          </Link>

        </div>
      )}
    </header>
  );
};

export default Navbar;