import React from "react";
import { useParams } from "react-router-dom";
import roomData from "../data/roomData";

function BookingRoom() {
  const { id } = useParams();

  const selectedRoom = roomData.find(
    (room) => room.id === parseInt(id)
  );

  if (!selectedRoom) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Room not found.
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-light tracking-widest text-center mb-10">
          Complete Your Booking
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE - ROOM INFO */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <img
              src={selectedRoom.Images[0]}
              alt={selectedRoom.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-light tracking-widest mb-3">
                {selectedRoom.name}
              </h2>

              <p className="text-gray-600 mb-4">
                {selectedRoom.Description}
              </p>

              <p className="text-lg font-semibold text-emerald-500">
                KES {selectedRoom.price.toLocaleString()} / night
              </p>

            </div>
          </div>

          {/* RIGHT SIDE - BOOKING FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-xl font-medium mb-6 tracking-widest">
              Booking Details
            </h3>

            <form className="flex flex-col gap-5">

              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />

              <div className="grid grid-cols-2 gap-4">

                <input
                  type="date"
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />

                <input
                  type="number"
                  placeholder="Guests"
                  min="1"
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />

              </div>

              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg transition duration-300"
              >
                Confirm Booking
              </button>

            </form>

          </div>

        </div>
      </div>
    </div>
  );
}

export default BookingRoom;