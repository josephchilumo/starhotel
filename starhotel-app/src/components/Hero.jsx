import React from "react";
import bedroomimage from "../Images/bedroomimage.png";

const Hero = () => {
  return (
    <section className="relative h-[650px] flex flex-col items-center justify-center text-center overflow-hidden border-b">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-[slowZoom_20s_linear_infinite]"
        style={{ backgroundImage: `url(${bedroomimage})` }}
      ></div>

      {/* Gradient Overlay for luxury feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-6 text-white animate-fadeIn">
        
        {/* Small text */}
        <p className="text-sm tracking-[0.3em] uppercase text-gray-200 mb-4 font-sans">
          Est. 1998 • 25 Years of Hospitality
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
          Where Every Stay Becomes a Story
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl mt-4 text-gray-200 font-sans">
          From candlelit dinners to peaceful mornings, StarHotel has welcomed travelers for over two decades with comfort, elegance, and unforgettable experiences.
        </p>
        <button className="mt-10 text-gray-100 border-t border-white py-3 px-6 hover:border-b  transition hover:text-gray-300">
          Explore Our Rooms
        </button>

      </div>
    </section>
  );
};

export default Hero;