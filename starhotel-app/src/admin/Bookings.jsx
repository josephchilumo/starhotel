import React, { useEffect, useState } from "react";
import API from "../utils/axios";

function Bookings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await API.get("/api/bookings");
      setData(res.data);
    };

    fetchBookings();
  }, []);

  return (
    <div>

      <h1 className="text-xl mb-6">Bookings</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">User</th>
              <th>Room</th>
              <th>Dates</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((b) => (
              <tr key={b._id} className="border-t">

                <td className="p-3">{b.user?.fullName}</td>
                <td>{b.room?.name}</td>
                <td>{b.checkIn} → {b.checkOut}</td>
                <td>KES {b.total}</td>
                <td>{b.status}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Bookings;