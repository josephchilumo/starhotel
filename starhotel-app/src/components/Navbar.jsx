import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🔥 Get user
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 bg-emerald-400 border-b">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LEFT NAV */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/rooms" className="nav-link">Accommodation</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/dining" className="nav-link">Dining</Link>
          <Link to="/facilities" className="nav-link">Facilities</Link>
        </nav>

        {/* LOGO */}
        <Link to="/" className="text-xl tracking-widest font-light text-gray-900">
          Star<span className="font-semibold">Hotel</span>
        </Link>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center space-x-6">

          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>

          {/* 👇 AUTH LOGIC */}
          {!user ? (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          ) : (
            <>
              {/* Admin link */}
              {user.role === "admin" && (
                <Link to="/admin" className="nav-link text-emerald-900">
                  Admin
                </Link>
              )}

              <button
                onClick={logout}
                className="text-sm uppercase tracking-widest font-light text-gray-900 hover:text-red-600"
              >
                Logout
              </button>
            </>
          )}

          {/* BOOK NOW */}
          <Link to="/rooms">
            <button className="bg-white/20 text-gray-700 px-6 py-3 border border-emerald-600 text-sm hover:bg-emerald-600 hover:text-white transition">
              Book Now
            </button>
          </Link>

        </div>

        {/* MOBILE BUTTON */}
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

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t px-6 py-6 space-y-4 bg-white text-sm">

          <Link to="/rooms" className="block">Accommodation</Link>
          <Link to="/dining" className="block">Dining</Link>
          <Link to="/facilities" className="block">Facilities</Link>
          <Link to="/gallery" className="block">Gallery</Link>

          {!user ? (
            <>
              <Link to="/login" className="block">Login</Link>
              <Link to="/register" className="block">Register</Link>
            </>
          ) : (
            <>
              {user.role === "admin" && (
                <Link to="/admin" className="block">Admin</Link>
              )}

              <button
                onClick={logout}
                className="block text-left text-red-500"
              >
                Logout
              </button>
            </>
          )}

          <Link to="/rooms">
            <button className="w-full bg-gray-900 text-white py-3 mt-4">
              Book Now
            </button>
          </Link>

        </div>
      )}

      {/* 🔥 REUSABLE STYLE */}
      <style>
        {`
          .nav-link {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            font-weight: 300;
            color: #1f2937;
          }

          .nav-link:hover {
            color: #6b7280;
            border-bottom: 1px solid #6b7280;
          }
        `}
      </style>

    </header>
  );
};

export default Navbar;