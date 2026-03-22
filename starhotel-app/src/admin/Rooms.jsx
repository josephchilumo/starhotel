import React, { useEffect, useState } from "react";
import axios from "axios";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(()=> {
    const fetchRooms = async ()=> {
      try {
        const res = await axios.get("http://localhost:5000/api/accomodation");
        setRooms(res.data);
      } catch (err){
        console.log(err);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div>

      <h1 className="text-xl mb-6">Rooms</h1>

      <div className="grid md:grid-cols-3 gap-4">

        {rooms.map((room) => (
          <div key={room._id} className="border p-4">

            <img src={room.images[0]} className="h-32 w-full object-cover" />

            <h2 className="mt-2">{room.name}</h2>
            <p className="text-sm text-gray-500">KES {room.price}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Rooms;