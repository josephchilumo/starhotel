import React from "react";

function Dinning() {
  const restaurants = [
    {
      name: "Riverfront Restaurant",
      description:
        "Enjoy fine dining with breathtaking river views and a curated international menu.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
    },
    {
      name: "Sky Lounge",
      description:
        "Relax with cocktails and light bites in a sophisticated rooftop atmosphere.",
      image:
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187"
    },
    {
      name: "Poolside Bar",
      description:
        "Sip refreshing drinks and enjoy snacks by the pool in a relaxed setting.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO */}
      <div
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0)"
        }}
      >
        <div className="bg-black/50 p-6 rounded-xl text-center text-white">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Dining Experience
          </h1>
          <p className="mt-2 text-sm md:text-base">
            Taste the finest flavors in a luxurious setting
          </p>
        </div>
      </div>

      {/* RESTAURANTS */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {restaurants.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 space-y-3">
                <h2 className="text-xl font-semibold">{place.name}</h2>
                <p className="text-gray-600 text-sm">
                  {place.description}
                </p>

                <button className="text-sm text-emerald-600 hover:underline">
                  View Menu →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-medium mb-3">
            Reserve your table today
          </h3>
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Book a Table
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dinning;