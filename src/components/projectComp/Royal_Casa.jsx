import React, { useState } from "react";
import images from "../../assets/images/images"; // assuming it's an object with image paths
import SubCards from "../HomeComp/SubCards";

const mountCastleImages = [
  images.Mount_Castle1,
  images.Mount_Castle2,
  images.Mount_Castle3,
  images.Mount_Castle4,
];

const Royal_Casa = () => {
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

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-black">
            Nestled in the serene surroundings of <strong>Yavat–Malshiras</strong>, <strong>Royal Casa</strong> is more than just a land development-it’s an invitation to embrace a lifestyle of comfort, tranquility, and refined living. This Collector-sanctioned <strong>Residential N.A. plot project</strong> is designed for those who value both nature and modern infrastructure.
          </p>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-black">
            Spread across a well-planned, secure gated community, Royal Casa offers features like <strong>well-laid internal roads</strong>, <strong>clear plot demarcations</strong>, <strong>lush plantations</strong>, and <strong>exclusive amenities</strong> such as a clubhouse, party lawn, children’s play area, and basketball court—making it the perfect space to create your dream villa or weekend retreat.
          </p>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-black">
            Each plot includes <strong>individual 7/12 ownership</strong> and comes with water connectivity and the option of an individual boundary wall. The project is located close to the <strong>Pune–Solapur Highway</strong>, ensuring excellent access while allowing you to stay away from the chaos of city life.
          </p>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-black">
            Surrounded by peaceful, pollution-free landscapes, Royal Casa gives you access to essential facilities like <strong>schools</strong>, <strong>local markets</strong>, <strong>hospitals</strong>, and <strong>resorts</strong>. Whether you're looking to build your forever home or a peaceful getaway, this location delivers on all fronts.
          </p>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-black">
            With secure infrastructure, community-driven design, and natural surroundings, <strong>Royal Casa is where dreams truly find their address</strong>.
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


export default Royal_Casa; 