import React from "react";
import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r p-6 space-y-6 hidden md:block">

        <h1 className="text-xl tracking-widest font-light">
          Admin Panel
        </h1>

        <nav className="flex flex-col gap-4 text-sm">

          <Link to="/admin" className="hover:text-emerald-600">Dashboard</Link>
          <Link to="/admin/bookings">Bookings</Link>
          <Link to="/admin/rooms">Rooms</Link>
          <Link to="/admin/payments">Payments</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/gallery">Gallery</Link>
          <Link to="/admin/facilities">Facilities</Link>

        </nav>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-4 md:p-8">
        <Outlet />
      </div>

    </div>
  );
}

export default AdminLayout;