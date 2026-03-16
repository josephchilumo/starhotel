import React, { useRef } from "react";
import roomData from "../data/roomData";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function RoomView() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">

      <h1 className="text-center text-3xl sm:text-5xl lg:text-7xl font-extralight tracking-widest text-gray-600 mb-6">
        Accommodation
      </h1>

      <p className="text-center mb-8 text-gray-400 text-sm sm:text-base">
        View our available accommodation
      </p>

      {/* Carousel Wrapper */}
      <div className="relative">

        {/* Mobile Arrows */}
        <div className="absolute top-2 right-2 flex gap-2 sm:hidden z-10">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-white border border-emerald-400 shadow hover:bg-emerald-400 hover:text-white transition"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-white border border-emerald-400 shadow hover:bg-emerald-400 hover:text-white transition"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory
                     sm:grid sm:grid-cols-2 lg:grid-cols-3
                     sm:overflow-visible
                     bg-emerald-50 p-4 sm:p-8 rounded-2xl"
        >
          {roomData.map((room) => (
            <div
              key={room.id}
              className="min-w-[280px] snap-start sm:min-w-0
                         bg-white rounded-lg border border-emerald-700
                         shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={room.Images[0]}
                alt={room.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-light tracking-widest mb-2">
                  {room.name}
                </h2>

                <p className="text-gray-500 text-sm mb-2">
                  {room.occuppancy}
                </p>

                <p className="font-semibold text-emerald-500 mb-4">
                  KES {room.price.toLocaleString()}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={`/booking/${room.id}`} className="w-full">
                    <button className="w-full bg-emerald-400 hover:bg-emerald-500 text-white py-2 rounded-md">
                      Book Now
                    </button>
                  </Link>

                  <Link to={`/room/${room.id}`} className="w-full">
                    <button className="w-full border border-emerald-400 hover:border-emerald-500 py-2 rounded-md">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default RoomView;