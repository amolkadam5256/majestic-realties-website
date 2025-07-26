import React from "react";
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id="call-to-action" className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Ready to Find Your Dream Property?
        </h3>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Explore our exclusive listings of premium flats, luxurious bungalows, modern farmhouses, and more.
          Whether you want to buy or rent - we’ve got your next home waiting.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            to="/contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3  transition-transform transform hover:scale-105 shadow-md"
          >
            Buy Property
          </Link>
          {/* <a
            href="#rent"
            className="bg-white border-2 border-yellow-400 hover:bg-yellow-100 text-yellow-700 font-semibold px-8 py-3 rounded-full transition-transform transform hover:scale-105 shadow-sm"
          >
            Rent Property
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
