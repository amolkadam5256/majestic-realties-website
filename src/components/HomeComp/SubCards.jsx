import React, { useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from '../../assets/images/images';
import { FaArrowRight } from "react-icons/fa";


const SubCards = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const properties = [
        {
            imageUrl: images.view1,
            title: "3710 Meier St",
            address: "Los Angeles, CA 90066",
            type: "Residential",
        },
        {
            imageUrl: images.view2,
            title: "212 S Saltair Ave",
            address: "Los Angeles, CA 90049",
            type: "Residential",
        },
        {
            imageUrl: images.view3,
            title: "800 Wilshire Blvd",
            address: "Los Angeles, CA 90017",
            type: "Commercial",
        },
        {
            imageUrl: images.view5,
            title: "1234 Beverly Hills Dr",
            address: "Los Angeles, CA 90210",
            type: "Luxury",
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
                                <h2 className="text-xl sm:text-1xl md:text-2xl font-light leading-tight mt-1 tracking-wide">
                                    {property.title}<br />{property.address}
                                </h2>
                            </div>
                            <div className="flex items-center space-x-3 text-sm font-normal cursor-pointer group-hover:text-yellow-400">
                                <span>Read more</span>
                                <FaPlayCircle className="text-white group-hover:text-yellow-400 text-lg" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Read More Button */}
            <div className="text-center my-12" data-aos="fade-up">
                <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold  shadow-md transition-transform hover:scale-105">
                    <a href=""> View All Properties </a>
                </button>

            </div>
        </section>
    );
};

export default SubCards;
