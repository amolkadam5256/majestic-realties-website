import React from "react";
import images from "../assets/images/images";

const RoyalVistaCallToAction = () => {
  return (
    <section id="call-to-action" className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Ready to Secure Your Investment at Royal Vista?
        </h3>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Explore our exclusive NA-sanctioned residential plots at Yavat Pondhe near Pune-Solapur-Hyderabad Highway.
          This is your now-or-never opportunity to build your tomorrow with a sound investment today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3  transition-transform transform hover:scale-105 shadow-md"
          >
            Book Your Plot Now
          </a>
         <a
            href={images.Royal_vista}
            download="Royal-Vista-Brochure.pdf"
            className="bg-white border-2 border-yellow-400 hover:bg-yellow-100 text-yellow-700 font-semibold px-8 py-3 transition-transform transform hover:scale-105 shadow-sm"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoyalVistaCallToAction;