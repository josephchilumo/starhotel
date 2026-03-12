import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-emerald-600 text-white ">

      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-serif mb-3 tracking-widest">Star<span className="tracking-tighter">Hotel</span></h2>
          <p className="text-sm text-emerald-100 tracking-widest">
            Experience luxury, comfort, and world-class hospitality.
            Your perfect stay begins here.
          </p>
        </div>

        {/* Quick Links */}
        <div className=" tracking-widest">
          <h3 className=" mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-emerald-100">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Rooms</li>
            <li className="hover:text-white cursor-pointer">Amenities</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className=" tracking-widest">
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-emerald-100">
            <li>+254 700 000 000</li>
            <li>info@starhotel.com</li>
            <li>Mombasa, Kenya</li>
          </ul>
        </div>

        {/* Social */}
        <div className="tracking-widest">
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <FaFacebook className="cursor-pointer hover:text-emerald-300" />
            <FaInstagram className="cursor-pointer hover:text-emerald-300" />
            <FaTwitter className="cursor-pointer hover:text-emerald-300" />
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-emerald-700 py-4 text-center text-sm text-emerald-200 tracking-widest">
        &copy; {new Date().getFullYear()} StarHotel. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;