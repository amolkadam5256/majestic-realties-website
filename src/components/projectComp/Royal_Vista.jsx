import React, { useState } from "react";
import images from "../../assets/images/images"; // assuming it's an object with image paths
import { FaPlaneDeparture, FaChartLine, FaBuilding, FaTools } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import SubCards from "../HomeComp/SubCards";
const mountCastleImages = [
  images.Mount_Castle1,
  images.Mount_Castle2,
  images.Mount_Castle3,
  images.Mount_Castle4,
];

const Royal_Vista = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = mountCastleImages.length;

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (


    <>


      {/* Project Heading */}
      <div className="text-center mb-12 mt-5">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 uppercase tracking-wide drop-shadow">
          Royal Vista (NA Plots)
        </h1>
        <h2 className="text-xl sm:text-2xl mt-2 text-black font-semibold">
          Yawat – Malshiras Road, Near Pune – Solapur Highway
        </h2>
        {/* <span className="block mt-2 text-red-600 font-bold text-lg">Sold Out!</span> */}
      </div>




      <div className="relative w-full">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {mountCastleImages.map((src, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={src}
                className="block w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {mountCastleImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full ${i === activeIndex ? "bg-white" : "bg-gray-300"
                }`}
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/60">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/60">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Project Header Section */}


      <div className="text-black py-12 px-4 sm:px-10 rounded-lg mb-10">
        <div className="max-w-5xl mx-auto text-start">

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-black flex items-center gap-2 font-semibold">
            <FaPlaneDeparture className="text-yellow-500" size={22} />
            Land for Sale Near the Upcoming <strong>Sambhajiraje International Airport, Pune!</strong>
          </p>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-black">
            Are you looking for prime real estate near a fast-developing international airport? <strong>Now is the time to invest!</strong> With the airport infrastructure booming, demand for land in nearby zones is surging. Whether you’re an investor or planning to build a dream home or commercial venture, this is the opportunity you’ve been waiting for!
          </p>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-black font-semibold">
            Why invest near an international airport?
          </p>
          <ul className="mt-2 ml-6 space-y-2 text-lg sm:text-xl text-black list-none">
            <li className="flex items-center gap-3"><HiLocationMarker className="text-green-600" /> Proximity to major transport hubs</li>
            <li className="flex items-center gap-3"><FaChartLine className="text-blue-600" /> Rising property values</li>
            <li className="flex items-center gap-3"><FaBuilding className="text-purple-600" /> Ideal for residential, commercial, or industrial use</li>
            <li className="flex items-center gap-3"><FaTools className="text-orange-600" /> Future-ready with new infrastructure</li>
          </ul>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-black">
            <strong>Royal Vista</strong> by <strong>Majestic Realties</strong> offers NA plots near Purandar International Airport with clear titles, RERA approval, and ready possession. Located on <strong>Yawat–Malshiras Road</strong>, this gated project combines growth potential with natural beauty and accessibility.
          </p>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-black">
            Nearby essentials include <strong>schools, hospitals, markets, restaurants, and resorts</strong> — making this an ideal weekend getaway or long-term asset. With several sold-out and upcoming projects in the vicinity, Royal Vista stands out as a smart investment in a rapidly growing zone.
          </p>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-black">
            Secure your space in this high-demand area and become part of the future of Pune’s urban expansion.
          </p>

        </div>
      </div>


      {/* Projects Overview Title */}
      <div className="text-start mb-10 mt-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 uppercase tracking-wide pl-6">
          Our Real Estate Projects
        </h1>
      </div>




      <SubCards />


    </>
  );
};


export default Royal_Vista;
