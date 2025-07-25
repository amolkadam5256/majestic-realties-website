import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBuilding, FaRegSmile, FaHandshake, FaHeadset } from 'react-icons/fa';

const BottomSection = () => {
    useEffect(() => {
        AOS.init({ duration: 500, once: false });
    }, []);

    return (
        <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center px-4 py-0 bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 bgHero2 bg-cover bg-center opacity-70 scale-100 transition-transform duration-1000 group-hover:scale-105 z-0" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 z-10" />

            {/* Main Content */}
            <div
                className="relative z-20 w-full max-w-7xl text-center px-4 md:px-12 py-10 md:py-20 space-y-8  rounded-xl shadow-2xl"
                data-aos="zoom-in"
            >
                <p className="text-yellow-400 text-sm md:text-base uppercase tracking-wider" data-aos="fade-down">
                    Since 2014
                </p>
                <h2
                    className="text-3xl md:text-4xl font-bold text-white"
                    data-aos="fade-right"
                >
                    9+ Years of Real Estate Excellence
                </h2>
                <p
                    className="max-w-2xl mx-auto text-gray-200"
                    data-aos="fade-left"
                >
                    Providing modern villas, luxury flats, farmhouses, and commercial spaces with unmatched dedication and client satisfaction.
                </p>

                {/* Stats Section */}
                <div
                    className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    {[
                        { icon: <FaBuilding />, label: "Projects Delivered", value: "65+" },
                        { icon: <FaRegSmile />, label: "Happy Clients", value: "23k+" },
                        { icon: <FaHandshake />, label: "Property Deals", value: "120+" },
                        { icon: <FaHeadset />, label: "24/7 Support", value: "365 Days" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110"
                        >
                            <div className="text-3xl text-yellow-400 mb-2">{item.icon}</div>
                            <p className="text-2xl font-bold text-white">{item.value}</p>
                            <span className="text-gray-300 text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BottomSection;
