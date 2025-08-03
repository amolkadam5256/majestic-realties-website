import React, { useEffect, useState, useMemo } from "react";
import { FaPlayCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from '../../assets/images/images';
import { Link } from 'react-router-dom';

const ProjectHome = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    // ✅ useMemo to prevent re-creation on every render
    const properties = useMemo(() => [
        {
            imageUrls: [
                images.RoyalVistaframe,
                images.RoyalVistaLayout_Phase_1,
                images.RoyalVistaLayout,
            ],
            title: "Royal Vista",
            address: "Pondhe, Maharashtra",
            type: "N.A. Plots",
            path: 'royal_vista',
        },
        {
            imageUrls: [
                images.view3,
                images.view4,
                images.view5,
            ],
            title: "Royal Casa (N.A. Plots)",
            address: "Gate No. 3, Yavat-Saswad Rd, Malshiras, Purandar, Pune",
            type: "N.A. Plots",
            path: 'royal_casa',
        },
    ], []);

    const [currentImageIndex, setCurrentImageIndex] = useState(
        Array(properties.length).fill(0)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prev =>
                prev.map((index, i) => (index + 1) % properties[i].imageUrls.length)
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [properties]);

    return (
        <section className="bg-gray-10 p-6">
            <div className="max-w-7xl mx-auto px-4 py-10 lg:py-20" data-aos="fade-up">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-800 mb-10 text-center md:text-left">
                    Explore Our Signature Real Estate Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Our Visionary Projects</h3>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            At Majestic Realties, every project reflects our passion for creating vibrant, sustainable communities...
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Current Developments</h3>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            We're currently developing cutting-edge residential and commercial hubs in prime locations...
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                {properties.map((property, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in-up"
                        className="relative overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={property.imageUrls[currentImageIndex[index]]}
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
                            <Link to={`/projects/${property.path}`} className="flex items-center space-x-3 text-sm font-normal cursor-pointer group-hover:text-yellow-400">
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

export default ProjectHome;
