import React from "react";

function Newsletter() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center text-gray-800 tracking-widest">

        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Stay Updated
        </h2>

        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter and receive exclusive offers, travel inspiration,
          and special discounts for your next stay.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email address"
            className="px-5 py-3 rounded-md text-gray-800 w-full sm:w-80 focus:outline-none border border-gray-300 focus:border-emerald-500 transition"
            required
          />

          <button
            type="submit"
            className="bg-emerald-500 text-white  px-6 py-3 rounded-md hover:bg-emerald-600 font-extralight tracking-wider transition"
          >
            Subscribe
          </button>

        </form>

      </div>
    </section>
  );
}

export default Newsletter;