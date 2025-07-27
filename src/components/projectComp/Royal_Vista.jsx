import React, { useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from '../../assets/images/images';
import { Link } from 'react-router-dom';

const Royal_Vista = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const properties = [
    {

      imageUrl: images.view1,
      title: "Royal Vista",
      address: "Pondhe, Maharashtra",
      type: "N.A. Plots",
    },
    {
      imageUrl: images.view3,
      title: "Royal Casa (N.A. Plots)",
      address: "Gate No. 3, Yavat-Saswad Rd, Malshiras, Purandar, Pune",
      type: "N.A. Plots",
    },
  ];

  return (
    <section className="bg-gray-10 p-6">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-20" data-aos="fade-up">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium text-gray-800 mb-10 text-center md:text-left">
projects        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Since 2014, Majestic Realties has been redefining real estate excellence with a focus on
            quality, innovation, and integrity. We specialize in creating vibrant, future-ready
            communities that deliver lasting value and a superior lifestyle.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            With a decade of experience and a passionate team, we turn land into legacy. Our projects
            are designed to inspire, endure, and elevate everyday living through thoughtful
            architecture and sustainable development.
          </p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {properties.map((property, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            className="relative  overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-between p-6 text-white">
              <div>
                <p className="text-sm font-normal tracking-wide">{property.type}</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-tight mt-1 tracking-wide">
                  {property.title}<br />{property.address}
                </h2>
              </div>
              <Link to="/projects" className="flex items-center space-x-3 text-sm font-normal cursor-pointer group-hover:text-yellow-400">
                <span>Read more</span>
                <FaPlayCircle className="text-white group-hover:text-yellow-400 text-lg" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Royal_Vista;
