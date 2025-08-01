import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const officeLocations = [
  {
    country: "Kothrud Head Office",
    address: "Bandal Spaces, Paud Road, Bharti Nagar, Kothrud, Pune, Maharashtra",
    image: "https://pagedone.io/asset/uploads/1696246502.png",
  },
  {
    country: "Kondhwa Head Office",
    address: "203, B.G. Lonkar Road, Kondhwa, Pune – 411048",
    image: "https://pagedone.io/asset/uploads/1696246522.png",
  },
  {
    country: "Pirangut Head Office",
    address: "Office No. 101, Majestic Building, Gotawade Phata, Paud Road, Pirangut – 412111",
    image: "https://pagedone.io/asset/uploads/1696246551.png",
  },
];


const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Contact Info */}
        <div
          className="md:flex md:justify-between md:items-center gap-12 mb-16"
          data-aos="fade-up"
        >
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4 font-manrope">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Whether you have a question or just want to say hello, we're always happy to hear from you.
            </p>
            <button className="w-36 h-12  bg-yellow-400 hover:bg-white text-white hover:text-black hover:border-2 border-yellow-400 font-semibold transition duration-300 shadow">
              Contact Us
            </button>
          </div>

          {/* Contact Details */}
          <div className="border-l-2 md:border-yellow-400 border-white px-10 py-6">
            <div className="mb-8">
              <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Email Address</h6>
              <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">zakki@majesticrealties.com</h3>
            </div>
            <div>
              <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Phone Number</h6>
              <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">+91 78430 77794</h3>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {officeLocations.map((location, idx) => (
            <div
              key={idx}
              className="relative h-80 rounded-lg overflow-hidden shadow-lg group"
              data-aos="zoom-in-up"
              data-aos-delay={`${idx * 200}`}
            >
              <img
                src={location.image}
                alt={`${location.country} image`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div>
              <div className="absolute bottom-0 p-6 text-white">
                <h5 className="text-lg font-semibold mb-1">{location.country}</h5>
                <p className="text-sm leading-snug">{location.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
