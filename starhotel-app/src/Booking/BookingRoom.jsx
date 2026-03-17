import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import roomData from "../data/roomData";
import { Link } from "react-router-dom";

function BookingRoom() {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedRoom = roomData.find(
    (room) => room.id === parseInt(id)
  );

  const otherRooms = roomData.filter(
    (room) => room.id !== parseInt(id)
  );

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const [addons, setAddons] = useState({
    breakfast: false,
    airport: false,
    extraBed: false,
  });

  const addonOptions = {
    breakfast: { label: "Breakfast", price: 1500, type: "perNight" },
    airport: { label: "Airport Pickup", price: 3000, type: "oneTime" },
    extraBed: { label: "Extra Bed", price: 2000, type: "perNight" },
  };

  const handleAddonChange = (name) => {
    setAddons((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = getNights();

  if (!selectedRoom) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Room not found.
      </div>
    );
  }

  const roomTotal = nights * selectedRoom.price;

  const addonTotal = Object.keys(addons).reduce((sum, key) => {
    if (!addons[key]) return sum;

    const option = addonOptions[key];

    if (option.type === "perNight") {
      return sum + option.price * nights;
    } else {
      return sum + option.price;
    }
  }, 0);

  const total = roomTotal + addonTotal;

  return (
    <div className="min-h-screen bg-white py-6 px-3 md:py-10 md:px-4 font-sans">

      <div className="max-w-5xl mx-auto">

        {/* BACK */}
        <button
          onClick={() => navigate("/rooms")}
          className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 hover:text-emerald-600 transition"
        >
          ← Back
        </button>

        <h1 className="text-2xl md:text-4xl font-light text-gray-800 mb-6 md:mb-10">
          Complete Your Booking
        </h1>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* ROOM DETAILS */}
          <div>

            <img
              src={selectedRoom.images[0]}
              alt={selectedRoom.name}
              className="w-full h-40 md:h-52 object-cover border border-gray-200"
            />

            <div className="p-4 md:p-5 space-y-3 border border-gray-200 border-t-0">

              <h2 className="text-base md:text-lg text-gray-800">
                {selectedRoom.name}
              </h2>

              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                {selectedRoom.Description}
              </p>

              <p className="text-sm text-emerald-600">
                KES {selectedRoom.price.toLocaleString()} / night
              </p>

              {/* ADD-ONS */}
              <div className="pt-3 border-t space-y-2 text-xs md:text-sm">

                <p className="text-gray-700">Add Extras</p>

                {Object.keys(addonOptions).map((key) => {
                  const option = addonOptions[key];

                  return (
                    <label
                      key={key}
                      className="flex justify-between items-center text-gray-600"
                    >
                      <div className="flex flex-col">
                        <span>{option.label}</span>
                        <span className="text-[10px] md:text-xs text-gray-400">
                          KES {option.price.toLocaleString()}{" "}
                          {option.type === "perNight"
                            ? "/ night"
                            : "(once)"}
                        </span>
                      </div>

                      <input
                        type="checkbox"
                        onChange={() => handleAddonChange(key)}
                      />
                    </label>
                  );
                })}
              </div>

            </div>
          </div>

          {/* BOOKING FORM */}
          <div className="border border-gray-200 p-4 md:p-6 space-y-4 md:space-y-6">

            <h3 className="text-base md:text-lg text-gray-700 border-b pb-2">
              Booking Details
            </h3>

            <form className="space-y-3 md:space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2.5 md:p-3 text-sm"
                required
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border p-2.5 md:p-3 text-sm"
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2.5 md:p-3 text-sm"
                required
              />

              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="border p-2.5 md:p-3 text-sm"
                />

                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="border p-2.5 md:p-3 text-sm"
                />
              </div>

              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                className="w-full border p-2.5 md:p-3 text-sm"
              />

            </form>

            {/* SUMMARY */}
            <div className="border-t pt-3 text-xs md:text-sm space-y-2">

              <div className="flex justify-between">
                <span>Room ({nights} nights)</span>
                <span>KES {roomTotal.toLocaleString()}</span>
              </div>

              {addonTotal > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>Extras</span>
                  <span>KES {addonTotal.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between font-medium pt-2 border-t">
                <span>Total</span>
                <span>KES {total.toLocaleString()}</span>
              </div>

            </div>

            <button onClick={()=>
              navigate("/payment",{
                state: {
                  room:selectedRoom,
                  nights,
                  total,
                  checkIn,
                  checkOut,
                  guests,
                  addons,
                },
              })
            } className="w-full border border-emerald-600 text-emerald-600 py-2.5 md:py-3 text-sm hover:bg-emerald-600 hover:text-white transition">
              Confirm Booking
            </button>

          </div>

        </div>

        {/* OTHER ROOMS */}
        <div className="mt-10 md:mt-16">

          <h3 className="text-lg md:text-xl text-gray-800 mb-4 md:mb-6">
            Other Rooms
          </h3>

          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible">

            {otherRooms.slice(0, 3).map((room) => (
              <div
                key={room.id}
                onClick={() => navigate(`/booking/${room.id}`)}
                className="min-w-[200px] md:min-w-0 cursor-pointer border border-gray-200"
              >
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-32 md:h-40 object-cover"
                />

                <div className="p-2 md:p-3 text-xs md:text-sm">
                  <p className="text-gray-800">{room.name}</p>
                  <p className="text-emerald-600">
                    KES {room.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default BookingRoom;