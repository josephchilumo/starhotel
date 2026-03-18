import React from "react";

function Events() {
  const events = [
    {
      title: "Weddings",
      description:
        "Celebrate your special day in a breathtaking setting with elegant décor and world-class service.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552"
    },
    {
      title: "Corporate Events",
      description:
        "Host meetings, conferences, and business events with modern facilities and seamless support.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
    },
    {
      title: "Private Parties",
      description:
        "From birthdays to anniversaries, enjoy unforgettable moments in a luxurious atmosphere.",
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold">Events & Celebrations</h1>
          <p className="text-gray-600 mt-2">
            Create unforgettable experiences in our elegant spaces.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 space-y-3">
                <h2 className="text-xl font-semibold">{event.title}</h2>
                <p className="text-gray-600 text-sm">
                  {event.description}
                </p>

                <button className="mt-2 text-sm text-emerald-600 hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-medium mb-3">
            Ready to plan your event?
          </h3>
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
}

export default Events;