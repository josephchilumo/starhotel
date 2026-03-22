import React from "react";

function Dashboard() {
  return (
    <div>

      <h1 className="text-2xl mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="border p-4">
          <p className="text-gray-500 text-sm">Bookings</p>
          <h2 className="text-xl font-semibold">120</h2>
        </div>

        <div className="border p-4">
          <p className="text-gray-500 text-sm">Revenue</p>
          <h2 className="text-xl font-semibold">KES 450K</h2>
        </div>

        <div className="border p-4">
          <p className="text-gray-500 text-sm">Rooms</p>
          <h2 className="text-xl font-semibold">12</h2>
        </div>

        <div className="border p-4">
          <p className="text-gray-500 text-sm">Users</p>
          <h2 className="text-xl font-semibold">340</h2>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;