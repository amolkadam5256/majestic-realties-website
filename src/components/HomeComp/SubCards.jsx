import React, { useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from '../../assets/images/images';
import { Link } from 'react-router-dom';

const SubCards = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const properties = [
        {
            imageUrls: [
                images.view2,
                images.view3
            ],
            title: "Mount Castle ",
            address: "Ambedwet, Pirangut",
            type: "Farm House Plots",
            path: 'mount_castle',
        },
        {
            imageUrls: [
                images.RoyalVistaLayout_Phase_1,
                images.RoyalVistaframe,
                images.RoyalVistaLayout,
            ],
            title: "Royal Vista",
            address: "Pondhe, Maharashtra",
            type: "N.A. Plots",
            path: 'royal_vista',
        },
        {
            imageUrls: [
                images.view5,
                images.view6
            ],
            title: "Royal Casa (N.A. Plots)",
            address: "Gate No. 3, Yavat-Saswad Rd, Malshiras, Purandar, Pune",
            type: "N.A. Plots",
            path: 'royal_casa',
        },
    ];

    return (
        <section className="bg-gray-10 p-6">
            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {properties.map((property, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in-up"
                        className="relative overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Multiple Images - transition on hover */}
                        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                            {property.imageUrls.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`${property.title}-${i}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                />
                            ))}
                        </div>

                        {/* Content Overlay */}
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
                    <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-md transition-transform hover:scale-105">
                        View All Properties
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default SubCards;
