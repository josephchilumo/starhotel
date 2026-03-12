import React from "react";
import roomImg from "../Images/roomImg.webp";
import poolImg from "../Images/poolImg.webp";
import spaImg from "../Images/spaImg.png";
import yoga from "../Images/yoga.jpg";
import spaImg1 from "../Images/spaImg1.jpeg";
import twinRoom from "../Images/twinRoom.webp";

function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: roomImg,
      title: "Luxury Suites",
      description: "Elegant rooms designed for comfort and relaxation.",
      link: "#booking",
      button: "Book a Suite"
    },
    {
      id: 2,
      src: poolImg,
      title: "Infinity Pool",
      description: "Swim while enjoying breathtaking skyline views.",
      link: "#booking",
      button: "Reserve Pool Access"
    },
    {
      id: 3,
      src: spaImg,
      title: "Spa Retreat",
      description: "Rejuvenate with our premium spa treatments.",
      link: "#booking",
      button: "Book Spa"
    },
    {
      id: 4,
      src: yoga,
      title: "Morning Yoga",
      description: "Start your day with peaceful guided yoga sessions.",
      link: "#booking",
      button: "Join Session"
    },
    {
      id: 5,
      src: spaImg1,
      title: "Wellness Therapy",
      description: "Relax your mind and body with luxury therapies.",
      link: "#booking",
      button: "Explore Wellness"
    },
    {
      id: 6,
      src: twinRoom,
      title: "Twin Rooms",
      description: "Perfect rooms for families or travel partners.",
      link: "#booking",
      button: "View Rooms"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-3 tracking-widest">
            Discover StarHotel Experiences
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-tight font-light">
            Explore the unique experiences and luxury spaces waiting for you.
          </p>
        </div>

        {/* Scroll Gallery */}
        <div className="flex gap-6 overflow-x-auto pb-4">

          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="relative min-w-[320px] h-[420px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 group"
            >
              
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">

                <h3 className="text-xl font-serif mb-2">
                  {item.title}
                </h3>

                <p className="text-sm mb-4 text-gray-200">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-600 transition w-fit"
                >
                  {item.button}
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;