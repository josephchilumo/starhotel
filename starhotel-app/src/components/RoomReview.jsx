import React, { useRef } from "react";
import bedroomimage from "../Images/bedroomimage.png";
import roomImg from "../Images/roomImg.webp";
import twinRoom from "../Images/twinRoom.webp";
import roomImg2 from "../Images/roomImg2.webp";

function RoomReview() {

  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300;

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const rooms = [
    { name: "Deluxe Suite", price: "$350/night", occupants: "2 Adults", src: bedroomimage },
    { name: "Executive Room", price: "$250/night", occupants: "2 Adults", src: roomImg },
    { name: "Standard Room", price: "$150/night", occupants: "2 Adults", src: twinRoom },
    { name: "Family Room", price: "$400/night", occupants: "2 Adults + 2 Children", src: roomImg2 }
  ];

  return (
    <section className="py-10 px-4 sm:px-6 bg-emerald-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10 text-center sm:text-left">
          <p className="text-gray-500 tracking-widest uppercase text-xs sm:text-sm">
            Get the Star Treatment
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mt-2">
            Our Rooms & Suites
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="relative sm:hidden">

          {/* Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
          >
            →
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {rooms.map((room, index) => (
              <div
                key={index}
                className="min-w-[260px] bg-white rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={room.src}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold">{room.name}</h3>

                  <p className="text-emerald-700 font-medium mt-1">
                    {room.price}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    {room.occupants}
                  </p>

                  <div className="flex justify-between mt-4">
                    <button className="text-emerald-700 font-medium hover:underline">
                      View Details
                    </button>

                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">

          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={room.src}
                alt={room.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-light">{room.name}</h3>

                <p className="text-emerald-500 font-extralight mt-1">
                  {room.price}
                </p>

                <p className="text-gray-500 font-extralight text-sm mt-1">
                  {room.occupants}
                </p>

                <div className="flex justify-between mt-4">
                  <button className="text-emerald-500 tracking-widest font-medium hover:underline">
                    View Details
                  </button>

                  <button className="bg-emerald-500 tracking-widest text-white px-4 py-2 rounded-md hover:bg-emerald-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default RoomReview;