import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const AboutMajestic = () => {
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);

    useEffect(() => {
        const animateCount = (setter, max, speed) => {
            let count = 0;
            const interval = setInterval(() => {
                count++;
                setter(count);
                if (count >= max) clearInterval(interval);
            }, speed);
        };

        animateCount(setExperience, 11, 100);
        animateCount(setProjects, 7, 150);
        animateCount(setSatisfaction, 100, 50);
    }, []);

    return (
        <>
            <div>
                {/* Section 1 */}
                <section className="py-10 relative bg-white">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                            <div
                                className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex"
                                data-aos="fade-up"
                            >
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Pioneering Excellence in Real Estate Since 2014
                                    </h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Founded in 2014, Majestic Realties is a dynamic real estate company committed to crafting exceptional living spaces that inspire and endure. Our journey began with a vision about redefining the concept of living, and over the years, we’ve translated dreams into reality.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Every project at Majestic Realties is a testament to our unwavering commitment to excellence. We meticulously plan, design, and execute each endeavor to ensure it not only meets but exceeds expectations. It’s all about delivering quality and innovation in every project we undertake.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Beyond just properties, we build communities. Our focus on sustainability and green practices is ingrained in our ethos. We believe in creating spaces that not only cater to the present but also contribute to a better future.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        At Majestic Realties, we are dedicated to transforming visions into reality with our commitment to excellence, innovation, and integrity. Whether residential, commercial, or mixed-use projects, we create spaces that elevate lifestyles and foster thriving communities. Discover the future of living with us.
                                    </p>
                                </div>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3  transition-transform hover:scale-105 shadow-md"
                                >
                                    General Enquiry
                                    <IoMdAddCircle className="ml-2 text-xl" />
                                </Link>
                            </div>

                            <img
                                className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                                src="https://pagedone.io/asset/uploads/1717751272.png"
                                alt="Majestic Realties Project Image"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            />
                        </div>
                    </div>
                </section>

                {/* About Stats */}
                <section className="py-24 relative bg-white">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                            {/* Images */}
                            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last" data-aos="fade-right">
                                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                    <img
                                        className="rounded-xl object-cover"
                                        src="https://pagedone.io/asset/uploads/1717741205.png"
                                        alt="Majestic Realty Project"
                                    />
                                </div>
                                <img
                                    className="sm:ml-0 ml-auto rounded-xl object-cover"
                                    src="https://pagedone.io/asset/uploads/1717741215.png"
                                    alt="Majestic Realty Project"
                                />
                            </div>

                            {/* Text & Counters */}
                            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex" data-aos="fade-left">
                                <div className="w-full flex-col justify-center items-start gap-8 flex">
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            Crafting Inspired Environments Since 2014
                                        </h2>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                            Since 2014, Majestic Realties has been dedicated to transforming aspirations into reality through visionary land development.
                                            We don’t just build structures — we design enduring experiences rooted in innovation, environmental consciousness, and a deep sense of community.
                                        </p>
                                    </div>

                                    {/* Counter Section */}
                                    <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                        <div className="flex-col justify-start items-start inline-flex" data-aos="zoom-in">
                                            <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">{experience}+</h3>
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                                Years of Transforming Ideas into Reality
                                            </h6>
                                        </div>
                                        <div className="flex-col justify-start items-start inline-flex" data-aos="zoom-in" data-aos-delay="150">
                                            <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">{projects}+</h4>
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                                Landmark Projects Delivered with Excellence
                                            </h6>
                                        </div>
                                        <div className="flex-col justify-start items-start inline-flex" data-aos="zoom-in" data-aos-delay="300">
                                            <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">{satisfaction}%</h4>
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                                Satisfaction Across Every Client Engagement
                                            </h6>
                                        </div>
                                    </div>
                                </div>


                                <Link
                                    to="/contact"
                                    className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3  transition-transform hover:scale-105 shadow-md justify-center w-full sm:w-fit"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <span className="text-sm">Get In Touch</span>
                                    <IoMdAddCircle className="ml-2 text-xl" />
                                </Link>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutMajestic;
