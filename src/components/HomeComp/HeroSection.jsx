import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';


const HeroSection = () => {
    return (
        <section className="relative overflow-hidden group min-h-[92vh] flex items-center px-4 md:px-16">
            {/* Background Image */}
            <div className="absolute inset-0 bgHero bg-cover bg-center transform transition-transform duration-1000 ease-in-out scale-100 group-hover:scale-140 z-0" />

            {/* Text Content */}
            <div className="relative z-10 w-full lg:w-1/2 text-left text-white space-y-6 bg-transparent backdrop-blur-[1.1px]">
                <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 drop-shadow-lg leading-tight">
                    "The best investment on earth is earth"
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold">
                    Welcome to <span className="text-yellow-300">Majestic Realties</span>
                </h1>
                <p className="text-md md:text-lg text-gray-200 ">
                    Where we turn dreams into reality. As passionate land developers, we craft spaces that inspire,
                    innovate, and endure. With a legacy of excellence and a future-focused approach,{' '}
                    <span className="text-yellow-300 font-bold">Majestic Realties</span> is poised to redefine your perception of
                    what’s possible.
                </p>

                <Link
                    to="/contact"
                    className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 transition-transform hover:scale-105 shadow-md"
                >
                    General Enquiry
                    <IoMdAddCircle className="ml-2 text-xl" />
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
