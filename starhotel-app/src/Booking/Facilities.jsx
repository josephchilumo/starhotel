import React from "react";

function Facilities() {
  const facilities = [
    {
      title: "Swimming Pool",
      description:
        "Relax and unwind in our luxurious outdoor pool with stunning views.",
      icon: "🏊‍♂️"
    },
    {
      title: "Spa & Wellness",
      description:
        "Rejuvenate your body and mind with our world-class spa treatments.",
      icon: "💆‍♀️"
    },
    {
      title: "Fitness Center",
      description:
        "Stay active with modern gym equipment and a comfortable workout space.",
      icon: "🏋️‍♂️"
    },
    {
      title: "Free Wi-Fi",
      description:
        "Enjoy high-speed internet access throughout the hotel.",
      icon: "📶"
    },
    {
      title: "Airport Shuttle",
      description:
        "Convenient and reliable transport services to and from the airport.",
      icon: "🚐"
    },
    {
      title: "24/7 Room Service",
      description:
        "Delicious meals and services delivered right to your room anytime.",
      icon: "🛎️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO */}
      <div className="bg-black text-white py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Our Facilities
        </h1>
        <p className="mt-3 text-gray-300">
          Experience comfort, convenience, and luxury at every step
        </p>
      </div>

      {/* FACILITIES GRID */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h2 className="text-xl font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-medium mb-3">
            Ready to experience it all?
          </h3>
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Book Your Stay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Facilities;