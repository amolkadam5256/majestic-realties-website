import React, { useState } from "react";
import images from "../../assets/images/images"; // assuming it's an object with image paths
import SubCards from "../HomeComp/SubCards";
import {
  FaPlaneDeparture,
  FaChartLine,
  FaBuilding,
  FaTools,
  FaTree,
  FaWater,
  FaBolt,
  FaRoad,
  FaLightbulb,
  FaBasketballBall,
  FaLandmark,
  FaHome,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

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
          Royal Vista – N.A Sanctioned <br /> Residential plots.

        </h1>
        <h2 className="text-xl sm:text-2xl mt-2 text-black font-semibold">
          Vawat Pondhe near Pune – Solapur – Hyderabad National Highway
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

          <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-600 mb-4">
            Build Your Tomorrow with a Sound Investment Today!
          </h2>

          <p className="text-lg sm:text-xl leading-relaxed text-black">
            This pivotal decision should be made wisely to secure your future with <strong>Royal Vista</strong>. Make the right investment choice and embark on a path to success.
          </p>

          <p className="mt-6 text-lg sm:text-xl font-bold flex items-center gap-2">
            <FaPlaneDeparture className="text-yellow-500" size={22} />
            NA Sanctioned Residential Plots near Pune Airport
          </p>

          {/* Infrastructure */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Infrastructure Includes:</h3>
            <ul className="ml-6 space-y-2 text-black text-lg">
              <li className="flex items-center gap-2"><FaTree className="text-green-600" /> Tree plantation</li>
              <li className="flex items-center gap-2"><FaWater className="text-blue-500" /> Water connection</li>
              <li className="flex items-center gap-2"><FaBolt className="text-yellow-500" /> Electricity supply</li>
              <li className="flex items-center gap-2"><FaTools className="text-orange-600" /> Drainage system</li>
              <li className="flex items-center gap-2"><FaLandmark className="text-purple-600" /> Name plate for each plot</li>
              <li className="flex items-center gap-2"><FaRoad className="text-gray-600" /> Internal cement roads</li>
              <li className="flex items-center gap-2"><FaWater className="text-cyan-600" /> Drip irrigation system</li>
              <li className="flex items-center gap-2"><FaLightbulb className="text-yellow-600" /> Street lights</li>
              <li className="flex items-center gap-2"><FaBuilding className="text-gray-700" /> Compound wall fencing</li>
            </ul>
          </div>

          {/* Features */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Features:</h3>
            <ul className="ml-6 space-y-2 text-black text-lg">
              <li className="flex items-center gap-2"><FaHome className="text-green-700" /> Fully developed bungalow plots starting from 1100 sq.ft</li>
              <li className="flex items-center gap-2"><FaTree className="text-green-500" /> Pollution-free picturesque surroundings</li>
              <li className="flex items-center gap-2"><FaLandmark className="text-purple-600" /> Individual 7/12 extract for every plot</li>
              <li className="flex items-center gap-2"><HiLocationMarker className="text-red-500" /> Near Pune–Solapur–Hyderabad Highway</li>
            </ul>
          </div>

          {/* Amenities */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Amenities:</h3>
            <ul className="ml-6 space-y-2 text-black text-lg">
              <li className="flex items-center gap-2"><FaLandmark className="text-yellow-700" /> Grand Entrance Gate</li>
              <li className="flex items-center gap-2"><FaBasketballBall className="text-orange-500" /> Basketball Court</li>
              <li className="flex items-center gap-2"><FaHome className="text-green-600" /> Club House</li>
              <li className="flex items-center gap-2"><FaChartLine className="text-pink-600" /> Exclusive Party Lawn</li>
              <li className="flex items-center gap-2"><FaChildren className="text-blue-600" /> Children’s Play Area</li>
            </ul>
          </div>

          {/* Highlights */}
          <div className="mt-8">
            <p className="text-lg sm:text-xl leading-relaxed text-black">
              <strong>Bungalow Plots:</strong> Starting from 1100 sq.ft
              <br />
              <strong>Location:</strong> Just 8 km from the Upcoming Sambhajiraje International Airport
              <br />
              <strong>Loan Facility:</strong> Approved by all major banks
            </p>
          </div>

          {/* Note */}
          <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-800 font-semibold">
              Lowest price ever launched in the market! This is your Now-or-Never opportunity — make the smart move!
            </p>
          </div>

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
