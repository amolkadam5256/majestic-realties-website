import React, { useState } from 'react';
import {
    FaBed,
    FaBath,
    FaRulerCombined,
    FaMapMarkerAlt,
    FaPhone,
    FaWhatsapp,
    FaEnvelope,
    FaSwimmingPool,
    FaTree,
    FaShieldAlt,
    FaParking,
    FaWifi,
    FaDumbbell,
    FaCheckCircle,
    FaArrowRight,
    FaChevronRight,
    FaTint,
} from 'react-icons/fa';
import images from '../assets/images/images';

const AboutRoyalVista = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Project data
    const projectData = {
        // Property types
        propertyTypes: [
            {
                type: "NA Plots",
                sizes: ["1000 sq.ft", "1500 sq.ft", "2000 sq.ft"],
                price: "Lowest price ever launched!",
                features: ["NA Sanctioned", "Clear Title", "Easy Payment Plans"],
                availability: "Limited"
            }
        ],

        // Land details
        landDetails: {
            totalArea: "12 Acres – Expansive Development",
            totalPlots: "200 Premium Plots",
            plotSizes: "Starting from 1,000 sq.ft and above",
            zoning: "NA Plots",
            topography: "Picturesque Surroundings"
        },

        // Location advantages
        locationAdvantages: [
            "Near Pune–Solapur–Hyderabad Highway (NH 65)",
            "Close to Pune Airport",
            "Pollution-free environment",
            "Easy access to major transportation routes",
            "Approved by all major banks for loans"
        ],

        // Amenities
        amenities: [
            "Grand Entrance Gate",
            "Tree plantation",
            "Water connection",
            "Electricity supply",
            "Drainage system",
            "Name plate for each plot",
            "Internal cement roads",
            "Drip irrigation system",
            "Street lights",
            "Compound wall fencing",
            "Basketball Court",
            "Club House",
            "Exclusive Party Lawn"
        ],

    };

    // Icons for amenities
    const amenitiesIcons = {
        "Grand Entrance Gate": <FaMapMarkerAlt />,
        "Tree plantation": <FaTree />,
        "Water connection": <FaTint />,
        "Electricity supply": <FaWifi />,
        "Drainage system": <FaShieldAlt />,
        "Name plate for each plot": <FaRulerCombined />,
        "Internal cement roads": <FaRulerCombined />,
        "Drip irrigation system": <FaTint />,
        "Street lights": <FaWifi />,
        "Compound wall fencing": <FaShieldAlt />,
        "Basketball Court": <FaDumbbell />,
        "Club House": <FaSwimmingPool />,
        "Exclusive Party Lawn": <FaTree />
    };

    return (
        <div className="font-sans text-gray-800  " id='about'>


            {/* Project Details Section */}
            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Tabs Navigation */}
                <div className="flex flex-wrap border-b border-yellow-200 mb-8 bg-white rounded-t-lg overflow-hidden shadow-sm">
                    {['overview', 'properties', 'location', 'amenities'].map((tab) => (
                        <button
                            key={tab}
                            className={`py-4 px-6 text-lg font-medium capitalize transition-all duration-300 ${activeTab === tab ?
                                'text-yellow-700 border-b-2 border-yellow-700 bg-yellow-50' :
                                'text-gray-500 hover:text-yellow-600 hover:bg-yellow-50'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mb-0">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-3 h-7 bg-yellow-700 mr-2 rounded"></span>
                                    Project Overview
                                </h2>
                                <div className="bg-white rounded-xl shadow-md p-6 mb-6 border-l-4 border-yellow-700">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                        <FaRulerCombined className="text-yellow-700 mr-2" />
                                        Land Details
                                    </h3>
                                    <div className="space-y-4">
                                        {Object.entries(projectData.landDetails).map(([key, value]) => (
                                            <div key={key} className="flex justify-between border-b border-gray-100 pb-3 last:border-b-0">
                                                <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                                <span className="font-semibold text-yellow-700">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center">
                                    <span className="w-3 h-7 bg-yellow-700 mr-2 rounded"></span>
                                    About the Project
                                </h3>
                                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-700">
                                    <p className="text-gray-700 mb-4">
                                        Royal Vista is a premium NA-sanctioned residential plots development offering
                                        fully developed bungalow plots starting from 1000 sq.ft in the picturesque
                                        surroundings of Yavat Pondhe near Pune–Solapur–Hyderabad National Highway.
                                    </p>
                                    <p className="text-gray-700">
                                        The development boasts robust infrastructure with tree plantations, water connections,
                                        electricity supply, drainage systems, internal cement roads, and compound wall fencing.
                                        With a focus on quality living, the project offers premium amenities and is approved by
                                        all major banks for home loans.
                                    </p>
                                    <a href={images.Royal_vista} download>
                                        <button className="mt-6 flex items-center text-yellow-700 font-semibold hover:text-yellow-800 transition-colors">
                                            Download Brochure
                                            <FaArrowRight className="ml-2" />
                                        </button>
                                    </a>

                                </div>
                            </div>
                        </div>
                    )}

                    {/* Properties Tab */}
                    {activeTab === 'properties' && (
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                <span className="w-3 h-7 bg-yellow-700 mr-2 rounded"></span>
                                Available Properties
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projectData.propertyTypes.map((property, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-700 transition-colors">{property.type}</h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${property.availability === 'Available' ? 'bg-green-100 text-green-800' :
                                                    property.availability === 'Limited' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                                    {property.availability}
                                                </span>
                                            </div>

                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-gray-600 mb-2">SIZES</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {property.sizes.map((size, i) => (
                                                        <span key={i} className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm border border-yellow-200">
                                                            {size}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-gray-600 mb-1">PRICE</h4>
                                                <p className="text-lg font-bold text-yellow-700">{property.price}</p>
                                            </div>

                                            <div className="mb-6">
                                                <h4 className="text-sm font-semibold text-gray-600 mb-2">KEY FEATURES</h4>
                                                <ul className="space-y-2">
                                                    {property.features.map((feature, i) => (
                                                        <li key={i} className="flex items-center text-gray-700">
                                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <a href="#home">
                                                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center group-hover:shadow-md">
                                                    Enquire Now
                                                    <FaChevronRight className="ml-2 text-sm" />
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Location Tab */}
                    {activeTab === 'location' && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-3 h-7 bg-yellow-700 mr-2 rounded"></span>
                                    Location Advantages
                                </h2>
                                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-700">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                        <FaMapMarkerAlt className="text-yellow-700 mr-2" />
                                        Key Location Benefits
                                    </h3>
                                    <ul className="space-y-4">
                                        {projectData.locationAdvantages.map((advantage, index) => (
                                            <li key={index} className="flex items-start p-3 rounded-lg hover:bg-yellow-50 transition-colors">
                                                <div className="flex-shrink-0 mt-1">
                                                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                                                        <FaCheckCircle className="text-yellow-700 text-sm" />
                                                    </div>
                                                </div>
                                                <span className="text-gray-700 ml-3">{advantage}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center">
                                    <span className="w-3 h-7 bg-yellow-700 mr-2 rounded"></span>
                                    Map Location
                                </h3>
                                <div className="rounded-xl overflow-hidden shadow-md border-2 border-yellow-100">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789!2d73.7500000!3d18.5204000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf123456789%3A0xabcdef123456789!2sYavat%20Pondhe%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693216543210!5m2!1sen!2sin"
                                        width="100%"
                                        height="300"
                                        allowFullScreen=""
                                        loading="lazy"
                                        className="rounded-xl"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                    <h4 className="font-semibold text-yellow-800 mb-2">Visit Our Sales Office</h4>
                                    <p className="text-gray-700">Near Pune–Solapur–Hyderabad National Highway (NH 65)</p>
                                    <p className="text-gray-700">Yavat Pondhe, Pune District, Maharashtra</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Amenities Tab */}
                    {activeTab === 'amenities' && (
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
                                <span className="w-3 h-7 bg-yellow-700 mr-2 rounded"></span>
                                Premium Amenities & Features
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projectData.amenities.map((amenity, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white hover:bg-yellow-50 rounded-xl shadow-md hover:shadow-lg p-6 flex items-center gap-4 transition-all duration-300 border border-gray-100 hover:border-yellow-200"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                                            {amenitiesIcons[amenity] ? (
                                                React.cloneElement(amenitiesIcons[amenity], {
                                                    className: "text-yellow-700 text-xl",
                                                })
                                            ) : (
                                                <FaCheckCircle className="text-yellow-700 text-xl" />
                                            )}
                                        </div>
                                        <span className="text-gray-700 font-medium text-lg group-hover:text-yellow-800 transition-colors duration-300">
                                            {amenity}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl p-8 text-center text-white">
                                <h3 className="text-2xl font-bold mb-4">Build Your Tomorrow with a Sound Investment Today!</h3>
                                <p className="mb-6 max-w-2xl mx-auto">This pivotal decision should be made wisely to secure your future with Royal Vista. Make the right investment choice and embark on a path to success.</p>
                                <button className="bg-white text-yellow-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-md">
                                    <a href="#contact">
                                        Book a Site Tour
                                    </a>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default AboutRoyalVista;