import React, { useState } from "react";
import images from "../../assets/images/images"; // assuming it's an object with image paths
import SubCards from "../HomeComp/SubCards";
import MountCastleShowcase from "./MountCastleShowcase";
import { Helmet } from "react-helmet";

const mountCastleImages = [
  images.Mount_Castle1,
  images.Mount_Castle2,
  images.Mount_Castle3,
  images.Mount_Castle4,
  images.Mount_Castle5,
  images.Mount_Castle6,
  images.Mount_Castle7,
  images.Mount_Castle8,
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
      <Helmet>
        {/* Title */}
        <title>Mount Castle – Premium Residential Project Near Pune | Majestic Realties</title>

        {/* Description */}
        <meta
          name="description"
          content="Discover Mount Castle by Majestic Realties — a premium residential project near Pune offering NA-approved farmhouse & bungalow plots on a scenic hilltop tableland. Enjoy modern infrastructure, panoramic views, clean surroundings, and excellent connectivity to Pirangut, Kothrud, and Chandani Chowk."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Mount Castle Pune, Majestic Realties Mount Castle, Mount Castle project details, farmhouse plots near Pune, bungalow plots Pirangut, NA plots Ambedwet"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.majesticrealties.com/projects/mount-castle" />

        {/* OG Meta Tags */}
        <meta
          property="og:title"
          content="Mount Castle – Premium Farmhouse & Bungalow Plots Near Pune | Majestic Realties"
        />
        <meta
          property="og:description"
          content="Premium NA-approved farmhouse & bungalow plots in Ambedwet, Pirangut. Scenic hilltop views, greenery, internal roads, water & electricity, children’s play area, club house, and peaceful surroundings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.majesticrealties.com/projects/mount-castle" />
        <meta
          property="og:site_name"
          content="Majestic Realties"
        />
        <meta
          property="og:image"
          content="https://www.majesticrealties.com/assets/mount-castle-banner.jpg"
        />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mount Castle – Premium Residential Project Near Pune | Majestic Realties"
        />
        <meta
          name="twitter:description"
          content="Explore Mount Castle — NA-approved farmhouse and bungalow plots in Ambedwet, Pirangut with stunning views and modern infrastructure."
        />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      "name": "Mount Castle (Farmhouse & Bungalow Plots)",
      "url": "https://www.majesticrealties.com/projects/mount-castle",
      "description": "Premium NA-approved farmhouse & bungalow plots in Ambedwet, Pirangut by Majestic Realties. Scenic hilltop tableland with amenities like a club house, children's play area, internal roads, drainage system, water connection, electricity supply, and street lighting.",
      "image": "https://www.majesticrealties.com/assets/mount-castle-banner.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ambedwet, Pirangut",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5195",
        "longitude": "73.6980"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Grand Entrance Gate" },
        { "@type": "LocationFeatureSpecification", "name": "Children’s Play Area" },
        { "@type": "LocationFeatureSpecification", "name": "Club House" },
        { "@type": "LocationFeatureSpecification", "name": "Panoramic Nature Views" },
        { "@type": "LocationFeatureSpecification", "name": "Street Lighting" },
        { "@type": "LocationFeatureSpecification", "name": "Water Connection" },
        { "@type": "LocationFeatureSpecification", "name": "Electricity Supply" },
        { "@type": "LocationFeatureSpecification", "name": "Drainage System" },
        { "@type": "LocationFeatureSpecification", "name": "Internal Roads" }
      ],
      "provider": {
        "@type": "Organization",
        "name": "Majestic Realties",
        "url": "https://www.majesticrealties.com",
        "logo": "https://www.majesticrealties.com/assets/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 78430 77794",
          "email": "zakki@majesticrealties.com",
          "contactType": "customer service"
        }
      }
    }
  `}
        </script>
      </Helmet>


      {/* Project Heading */}
      <div className="text-center mb-12 mt-5 pt-18">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 uppercase tracking-wide drop-shadow">
          Mount Castle (Farm House Plots)
        </h1>
        <h2 className="text-xl sm:text-2xl mt-2 text-black font-semibold">
          Premium Farmhouse & Bungalow Plots – Ambedwet, Pirangut, Pune
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
      <MountCastleShowcase />

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

export default Mount_Castle;
