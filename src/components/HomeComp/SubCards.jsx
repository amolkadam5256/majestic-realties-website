import React, { useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from '../../assets/images/images';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SubCards = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once:false, });
    }, []);

    const properties = [
        {
            imageUrl: images.view1,
            title: "Royal Vista",
            address: "Pondhe, Maharashtra",
            type: "N.A. Plots",
            path: 'royal_vista',
        },
        {
            imageUrl: images.view2,
            title: "Mount Castle ",
            address: "Ambedwet, Pirangut",
            type: "Farm House Plots",
            path: 'mount_castle',
        },
        {
            imageUrl: images.view5,
            title: "Royal Casa (N.A. Plots)",
            address: "Gate No. 3, Yavat-Saswad Rd, Malshiras, Purandar, Pune",
            type: "N.A. Plots",
            path: 'royal_casa',
        },
        {
            imageUrl: images.view7,
            title: "Royal Vista",
            address: "Pondhe, Maharashtra",
            type: "N.A. Plots",
            path: 'royal_vista',
        },
    ];

    return (
        <section className="bg-gray-10 p-6">
            {/* Header */}


            {/* Cards */}
            <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
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
                                <h2 className="text-xl sm:text-1xl md:text-1xl font-light leading-tight mt-1 tracking-wide">
                                    {property.title}<br />{property.address}
                                </h2>
                            </div>

                            <Link to={`/projects/${property.path}`} className="group">
                                <div className="flex items-center space-x-3 text-sm font-normal cursor-pointer group-hover:text-yellow-400">
                                    <span>Read more</span>
                                    <FaPlayCircle className="text-white group-hover:text-yellow-400 text-lg" />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Read More Button */}
            <div className="text-center my-12" data-aos="fade-up">
                <Link to="/projects" className="group">
                    <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold  shadow-md transition-transform hover:scale-105">
                        View All Properties
                    </button>
                </Link>

            </div>
        </section>
    );
};

export default SubCards;
