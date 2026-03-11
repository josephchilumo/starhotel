import React from "react";
import { FaBed, FaUtensils, FaSpa, FaSwimmer } from "react-icons/fa";

function CTASection() {
  const features = [
    {
      icon: <FaBed className="text-3xl text-gray-900" />,
      title: "Luxury Rooms",
      description: "Comfortable and elegant rooms designed for relaxation."
    },
    {
      icon: <FaUtensils className="text-3xl text-gray-900" />,
      title: "Fine Dining",
      description: "Gourmet meals crafted by top chefs for every palate."
    },
    {
      icon: <FaSpa className="text-3xl text-gray-900" />,
      title: "Spa & Wellness",
      description: "Indulge in rejuvenating spa treatments and wellness experiences."
    },
    {
      icon: <FaSwimmer className="text-3xl text-gray-900" />,
      title: "Infinity Pool",
      description: "Relax in our stunning pool with breathtaking views."
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* --- Features Grid --- */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 font-sans">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* --- CTA --- */}
        <div className="grid md:grid-cols-4 gap-6 items-center">
          {/* Headline */}
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-snug text-gray-900">
              Book your stay and experience the best of hospitality
            </h2>
          </div>

          {/* Primary Button */}
          <div className="md:col-span-1 flex justify-start md:justify-end">
            <button className="bg-white/20 text-gray-900 px-6 py-3 rounded-md font-sans tracking-wide hover:bg-white/40 transition duration-300 shadow-md">
              Book Now
            </button>
          </div>

          {/* Description */}
          <div className="md:col-span-4 mt-6">
            <p className="text-gray-600 text-lg font-sans">
              Discover our exclusive offers and packages for a memorable stay.
            </p>
          </div>

          {/* Secondary Button */}
          <div className="md:col-span-4 mt-4 flex justify-start md:justify-start">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-sans tracking-wide hover:bg-gray-700 transition duration-300 shadow-md">
              View Offers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;