import React, { useState } from "react";
import images from "../../assets/images/images"; // assuming it's an object with image paths
import SubCards from "../HomeComp/SubCards";
import RoyalCasaProjectShowcase from "./RoyalCasaProjectShowcase";

const RoyalCasaImages = [
  images.RoyalCasa1,
  images.RoyalCasa2,
  images.RoyalCasa3,
  images.RoyalCasa4
];

const Royal_Casa = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = RoyalCasaImages.length;

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
      <div className="text-center mb-12 mt-5 pt-18">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 uppercase tracking-wide drop-shadow">
          Royal Casa (N.A. Plots)
        </h1>
        <h2 className="text-xl sm:text-2xl mt-2 text-black font-semibold">
          A Premium Gated Plotting Project in Yavat – Malshiras
          {/* <span className="line-through text-red-600">Sold Out!</span> */}
        </h2>
      </div>



      <div className="relative w-full">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {RoyalCasaImages.map((src, index) => (
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
          {RoyalCasaImages.map((_, i) => (
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

     <RoyalCasaProjectShowcase/>


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


export default Royal_Casa; 