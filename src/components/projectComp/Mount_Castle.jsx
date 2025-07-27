import React, { useState } from "react";
import images from "../../assets/images/images"; // assuming it's an object with image paths

const mountCastleImages = [
  images.Mount_Castle1,
  images.Mount_Castle2,
  images.Mount_Castle3,
  images.Mount_Castle4,
];

const Mount_Castle = () => {
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
      <div className="text-center mb-12 mt-5 ">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 uppercase tracking-wide drop-shadow">
          Mount Castle (Farm House Plots)
        </h1>
        <h2 className="text-xl sm:text-2xl mt-2 text-black font-semibold">
          Royal Casa - Yavat Malshiras
          {/* <span className="line-through text-red-600">Sold Out!</span> */}
        </h2>
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
      <div className=" text-black py-12 px-4 sm:px-10 rounded-lg  mb-10">
        <div className="max-w-5xl mx-auto text-start">

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-black">
            Perched in the breathtaking locale of <strong>Ambedwet, Pirangut</strong>, Mount Castle beckons those in search of a higher standard of living.
            This project offers a blend of <strong>farm and bungalow plots</strong> on hilltop table land, promising <strong>panoramic views</strong> and serene surroundings.
          </p>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-black">
            With amenities like a <strong>grand entrance gate</strong>, <strong>clubhouse</strong>, <strong>water supply</strong>, and <strong>electricity</strong>, Mount Castle is ideal for building your dream farmhouse or bungalow.
            Discover a life of <strong>tranquility</strong> and <strong>natural beauty</strong> with <strong>Majestic Realties</strong>.
          </p>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-black">
            Surrounded by nature and close to <strong>Gohtawade Phata</strong> and <strong>Pirangut</strong>, this RERA-approved project provides clear titles and immediate 7/12 access. 
            It’s also strategically located near upcoming and sold-out projects like <strong>Royal Casa – Malshiras</strong>, and offers excellent connectivity to <strong>Kothrud</strong>, <strong>Paud Road</strong>, and <strong>Chandani Chowk</strong>.
          </p>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-black">
            Services in the nearby area include <strong>schools</strong>, <strong>hospitals</strong>, <strong>local markets</strong>, <strong>restaurants</strong>, and <strong>resort stays</strong>. 
            It’s a perfect weekend destination or long-term investment with potential returns up to <strong>₹60+ Lakhs in 3–5 years</strong>.
          </p>

         
        </div>
      </div>

    </>
  );
};

export default Mount_Castle;
