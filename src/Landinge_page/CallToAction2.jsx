import React from "react";
import images from "../assets/images/images";

const CallToAction = () => {
  return (
    <section id="call-to-action" className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Ready to Secure Your Investment at Mount Castle?
        </h3>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Discover exclusive farmhouse plots nestled in nature's lap at Mount Castle.
          Secure your legacy today with a smart investment that offers both luxurious living and financial growth.        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3  transition-transform transform hover:scale-105 shadow-md"
          >
            Book Your Plot Now
          </a>
          <a
            href={images.Mount_Castle_Brochure_1}
            download="Mount-Castle-Brochure.pdf"
            className="bg-white border-2 border-yellow-400 hover:bg-yellow-100 text-yellow-700 font-semibold px-8 py-3 transition-transform transform hover:scale-105 shadow-sm"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
