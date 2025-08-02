import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { FaBuilding, FaRegSmile, FaHandshake, FaHeadset } from 'react-icons/fa';

const BottomSection = () => {
    const [countVisible, setCountVisible] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });

        // Delay setting visibility slightly to ensure DOM is ready
        const timeout = setTimeout(() => setCountVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    const stats = [
        { icon: <FaBuilding />, label: "Projects Delivered", value: 7, suffix: "+" },
        { icon: <FaRegSmile />, label: "Happy Clients", value: 324, suffix: "+" },
        { icon: <FaHandshake />, label: "Property Deals", value: 120, suffix: "+" },
        { icon: <FaHeadset />, label: "24/7 Support", value: 365, suffix: " Days" },
    ];

    return (
        <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center px-4 py-0 bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 bgHero2 bg-cover bg-center opacity-70 z-0 transition-transform duration-[4000ms] group-hover:scale-105" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 z-10" />

            {/* Main Content */}
            <div className="relative z-20 w-full max-w-7xl text-center px-4 md:px-12 py-10 md:py-20 space-y-8 rounded-xl shadow-2xl" data-aos="zoom-in">
                <p className="text-yellow-400 text-sm md:text-base uppercase tracking-wider" data-aos="fade-down">
                    Since 2014
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white" data-aos="fade-right">
                    11+ Years of Real Estate Excellence
                </h2>
                <p className="max-w-2xl mx-auto text-gray-200" data-aos="fade-left">
                    Providing modern villas, luxury flats, farmhouses, and commercial spaces with unmatched dedication and client satisfaction.
                </p>

                {/* Stats Section */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-aos="fade-up" data-aos-delay="600">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center transition-transform duration-500 hover:scale-110"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <div className="text-3xl text-yellow-400 mb-2">{item.icon}</div>
                            <p className="text-2xl font-bold text-white">
                                {countVisible && (
                                    <CountUp
                                        start={0}
                                        end={item.value}
                                        duration={3}
                                        suffix={item.suffix}
                                        separator=","
                                        enableScrollSpy={true}
                                        scrollSpyOnce={false}
                                    />
                                )}
                            </p>
                            <span className="text-gray-300 text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BottomSection;
    