import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import roomData from "../data/roomData";

function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const room = roomData.find(
    (item) => item.id === parseInt(id)
  );

  // 🛑 If room not found
  if (!room) {
    return (
      <div className="text-center mt-20 text-red-500">
        Room not found.
      </div>
    );
  }

  // 🧠 Safe fallback handling
  const images = room.images || [];
  const facilities = room.facilities || [];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Back Button */}
        <div className="p-4">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-600 hover:text-black"
          >
            ← Back
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">

          {/* 🖼 Image Section */}
          <div>
            <img
              src={
                images[currentImage] ||
                "https://via.placeholder.com/600x400"
              }
              alt={room.name}
              className="w-full h-80 object-cover rounded-xl"
            />

            <div className="flex gap-2 mt-3">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setCurrentImage(index)}
                  className={`w-20 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                    currentImage === index
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  alt="thumb"
                />
              ))}
            </div>
          </div>

          {/* 📄 Details */}
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">{room.name}</h1>

            <p className="text-gray-600">{room.description}</p>

            <p className="text-sm text-gray-500">
              Occupancy: {room.occupancy}
            </p>

            {/* Facilities */}
            <div>
              <h3 className="font-medium mb-2">Facilities</h3>
              <div className="flex flex-wrap gap-2">
                {facilities.map((f, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* 💰 Price */}
            <div className="pt-4 border-t">
              <p className="text-2xl font-bold text-emerald-600">
                KES {room.price.toLocaleString()}
              </p>

              <button
                onClick={() =>
                  navigate("/booking", { state: { room } })
                }
                className="mt-4 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
              >
                Book Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RoomDetails;