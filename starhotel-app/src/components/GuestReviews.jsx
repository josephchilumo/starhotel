import React from "react";

function GuestReviews() {

  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "London, UK",
      review:
        "Elegant rooms, relaxing spa, and incredible service. One of the best stays I've had.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
      name: "Daniel Mwangi",
      location: "Nairobi, Kenya",
      review:
        "The infinity pool at sunset was unforgettable. I would absolutely stay here again.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=12"
    },
    {
      name: "Maria Lopez",
      location: "Madrid, Spain",
      review:
        "Beautiful atmosphere and peaceful rooms. Everything felt luxurious and calm.",
      rating: 4,
      avatar: "https://i.pravatar.cc/100?img=32"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 tracking-wide">
            What Our Guests Say
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Genuine experiences shared by travelers who have enjoyed their stay with us.
          </p>
        </div>

        {/* Reviews */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 no-scrollbar">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="min-w-[270px] md:min-w-0 bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 flex-shrink-0"
            >

              {/* Stars */}
              <div className="flex mb-4 text-yellow-400 text-lg">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 font-light leading-relaxed mb-6 italic text-xs md:text-base line-clamp-4">
                "{review.review}"
              </p>

              {/* Guest */}
              <div className="flex items-center gap-3 border-t pt-4">

                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-gray-900 font-semibold text-sm md:text-base">
                    {review.name}
                  </h4>

                  <p className="text-gray-500 text-xs md:text-sm">
                    {review.location}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default GuestReviews;