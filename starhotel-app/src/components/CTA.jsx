import React from "react";
import { FaBed, FaUtensils, FaSpa, FaSwimmer } from "react-icons/fa";
import starhotelhero from "../Images/starhotelhero.png";

function CTASection() {
  const features = [
    {
      icon: <FaBed />,
      title: "Luxury Rooms",
      description: "Comfortable and elegant rooms designed for relaxation."
    },
    {
      icon: <FaUtensils />,
      title: "Fine Dining",
      description: "Gourmet meals crafted by top chefs for every palate."
    },
    {
      icon: <FaSpa />,
      title: "Spa & Wellness",
      description:
        "Indulge in rejuvenating spa treatments and wellness experiences."
    },
    {
      icon: <FaSwimmer />,
      title: "Infinity Pool",
      description: "Relax in our stunning pool with breathtaking views."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* --- Features Heading --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-3">
            Our Amenities
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Experience world-class comfort and facilities designed for
            unforgettable stays.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <div className="text-emerald-500 text-2xl md:text-3xl mb-2 md:mb-4">
                {feature.icon}
              </div>

              <h3 className="text-sm md:text-xl font-serif text-gray-900 mb-1 md:mb-2">
                {feature.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed hidden md:block">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- Call to Action --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center pt-16 border-t border-gray-300">

          {/* Text Side */}
          <div className="max-w-lg">
            <h2 className="text-4xl font-serif mb-6 text-gray-900">
              Experience Unmatched Luxury
            </h2>

            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Discover the perfect blend of elegance and comfort at StarHotel.
              Book your stay today and indulge in a world of refined
              hospitality.
            </p>

            <a
              href="#booking"
              className="inline-block bg-emerald-500 text-white tracking-widest px-8 py-3 rounded-lg shadow-md hover:bg-emerald-600 transition duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Images Side */}
          <div className="grid grid-cols-2 gap-6 relative">

            {/* Soft glow background */}
            <div className="absolute -inset-6 bg-emerald-100 blur-3xl opacity-40"></div>

            <div className="relative translate-y-10">
              <img
                src={starhotelhero}
                alt="Luxury Hotel Room"
                className="w-full h-[380px] object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
              />
            </div>

            <div className="relative -translate-y-10">
              <img
                src={starhotelhero}
                alt="Hotel Interior"
                className="w-full h-[420px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CTASection;