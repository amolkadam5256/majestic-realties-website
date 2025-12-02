import React, { useState } from "react";
import images from "../../assets/images/images"; // assuming it's an object with image paths
import SubCards from "../HomeComp/SubCards";
import RoyalCasaProjectShowcase from "./RoyalCasaProjectShowcase";
import { Helmet } from "react-helmet";

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

      <Helmet>
        {/* Title */}
        <title>Royal Casa (N.A. Plots) – Premium Gated Plotting Project in Yavat–Malshiras | Majestic Realties</title>

        {/* Description */}
        <meta
          name="description"
          content="Royal Casa by Majestic Realties is a premium gated N.A. residential plotting project in Yavat–Malshiras near Pune–Solapur Highway. Collector-sanctioned plots with top-tier infrastructure, amenities, lush plantations, internal roads, water & electricity connection, street lighting, and spacious layout. Ideal for peaceful living or a weekend home. Loan facility available."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Royal Casa NA plots, Royal Casa Yavat Malshiras, NA plots near Pune, Royal Casa project details, residential plotting near Pune Solapur Highway, Majestic Realties projects"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.majesticrealties.com/projects/royal-casa" />

        {/* OG Meta Tags */}
        <meta property="og:title" content="Royal Casa (N.A. Plots) – Premium Gated Plotting Project in Yavat–Malshiras" />
        <meta
          property="og:description"
          content="Premium N.A. residential plotting project near Pune–Solapur Highway. Collector-sanctioned plots, modern infrastructure, club house, children’s play area, basketball court, party lawn, and peaceful surroundings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.majesticrealties.com/projects/royal-casa" />
        <meta property="og:site_name" content="Majestic Realties" />
        <meta
          property="og:image"
          content="https://www.majesticrealties.com/assets/royal-casa-banner.jpg"
        />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Royal Casa (N.A. Plots) – Premium Gated Plotting Project | Majestic Realties" />
        <meta
          name="twitter:description"
          content="Explore Royal Casa, a collector-sanctioned residential N.A. plot project in Yavat–Malshiras with modern amenities and excellent connectivity."
        />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Residence",
        "name": "Royal Casa (N.A. Plots)",
        "url": "https://www.majesticrealties.com/projects/royal-casa",
        "description": "Premium collector-sanctioned N.A. residential plotting project in Yavat–Malshiras by Majestic Realties with amenities including club house, children's play area, basketball court, street lighting, individual name plates, internal roads, drainage system, water connection, and electricity-ready plots.",
        "image": "https://www.majesticrealties.com/assets/royal-casa-banner.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gate No. 3, Yavat-Saswad Road, Malshiras, Purandar",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "India"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.4050",
          "longitude": "74.1100"
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Club House" },
          { "@type": "LocationFeatureSpecification", "name": "Party Lawn" },
          { "@type": "LocationFeatureSpecification", "name": "Children’s Play Area" },
          { "@type": "LocationFeatureSpecification", "name": "Basketball Court" },
          { "@type": "LocationFeatureSpecification", "name": "Gated Secure Layout" },
          { "@type": "LocationFeatureSpecification", "name": "Street Lighting" },
          { "@type": "LocationFeatureSpecification", "name": "Water Connection to Every Plot" },
          { "@type": "LocationFeatureSpecification", "name": "Electricity Ready Plots" },
          { "@type": "LocationFeatureSpecification", "name": "Modern Drainage System" }
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

      <RoyalCasaProjectShowcase />


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