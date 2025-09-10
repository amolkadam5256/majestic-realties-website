import React from "react";
import images from "../assets/images/images";

const RoyalCasaCallToAction = () => {
    return (
        <section id="call-to-action" className="py-0 ">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                    Own Your Dream Plot at Royal Casa (N.A. Plots)
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                    Discover our premium collector-sanctioned residential N.A. plots at Yavat-Malshiras near the Pune–Solapur Highway.
                    Royal Casa offers a secure gated layout with clear demarcations, modern infrastructure,
                    water and electricity connections to every plot, street lighting, and exclusive amenities like a club house, party lawn, children’s play area, and more.
                    It’s your chance to enjoy peaceful yet connected living - a lifestyle approved by all major banks.
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
                        download="Royal-Casa-Brochure.pdf"
                        className="bg-white border-2 border-yellow-400 hover:bg-yellow-100 text-yellow-700 font-semibold px-8 py-3 transition-transform transform hover:scale-105 shadow-sm"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RoyalCasaCallToAction;