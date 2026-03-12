import React from "react";
import { motion } from "framer-motion";
import roomImg from "../Images/roomImg.webp";
import poolImg from "../Images/poolImg.webp";
import spaImg from "../Images/spaImg.png";
import yoga from "../Images/yoga.jpg";

function Offering() {
  const offerings = [
    {
      title: "Luxurious Rooms",
      description:
        "Experience unparalleled comfort and elegance in our meticulously designed rooms.",
      image: roomImg,
    },
    {
      title: "Infinity Pool",
      description:
        "Dive into serenity with our stunning infinity pool and breathtaking views.",
      image: poolImg,
    },
    {
      title: "Spa & Wellness",
      description:
        "Indulge in rejuvenating spa treatments and relaxing wellness experiences.",
      image: spaImg,
    },
    {
      title: "Yoga & Meditation",
      description:
        "Start your day with peaceful yoga sessions in our serene environment.",
      image: yoga,
    },
  ];

  return (
    <section className="py-16 px-4 bg-emerald-500">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-serif tracking-widest text-gray-100 mb-3">
            Our Offerings
          </h2>
          <p className="text-gray-100 text-sm md:text-base font-light leading-tight max-w-xl mx-auto">
            Discover the unique experiences that await you at our hotel.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-2xl hover:shadow-xs transition-shadow "
            >
              <img
                src={offering.image}
                alt={offering.title}
                className="w-full h-32 md:h-48 object-cover mb-3 md:mb-4 rounded-lg "
              />

              <h3 className="text-sm md:text-xl font-serif text-gray-900 mb-1 md:mb-2">
                {offering.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offering;