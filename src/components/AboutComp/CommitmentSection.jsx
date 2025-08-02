import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  IoMdAddCircle,
  IoMdLeaf,
  IoMdTime,
  IoMdRocket,
  IoMdConstruct,
} from 'react-icons/io';
import { Link } from 'react-router-dom';

const CommitmentSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const cards = [
    {
      title: 'Elevated Standards',
      icon: <IoMdConstruct className="text-yellow-400 text-4xl mb-3" />,
      delay: 300,
      desc: 'Upholding the highest levels of quality and safety in construction.',
    },
    {
      title: 'A Greener Tomorrow',
      icon: <IoMdLeaf className="text-yellow-400 text-4xl mb-3" />,
      delay: 400,
      desc: 'Integrating eco-conscious materials and sustainable designs.',
    },
    {
      title: 'Punctuality is Our Hallmark',
      icon: <IoMdTime className="text-yellow-400 text-4xl mb-3" />,
      delay: 500,
      desc: 'We honor timelines with precision and professional commitment.',
    },
    {
      title: 'Innovation at Every Turn',
      icon: <IoMdRocket className="text-yellow-400 text-4xl mb-3" />,
      delay: 600,
      desc: 'Pioneering modern and smart real estate solutions.',
    },
  ];

  return (
    <section className="py-20 px-4 text-black" id="sustainability">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
            Our Commitment to a Sustainable Future
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto text-lg leading-relaxed">
            At Majestic Realties, our commitment goes beyond buildings — we’re shaping a greener, safer, and healthier tomorrow through mindful construction and innovation.
          </p>
        </div>

        {/* Subheading */}
        <div data-aos="fade-up" data-aos-delay="200" className="text-center">
          <h3 className="text-2xl font-semibold text-black mb-2">We do things the right way.</h3>
          <p className="text-gray-900 max-w-xl mx-auto text-md">
            From initial blueprints to final handover, we integrate integrity, creativity, and sustainability into every stage of our process.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white text-black rounded-2xl shadow-md hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div data-aos="fade-up" data-aos-delay="300" className="text-center">
          <Link to="/contact">
            <button className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 transition-transform hover:scale-105 shadow-md rounded">
              Get In Touch
              {/* <IoMdAddCircle className="ml-2 text-xl" /> */}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
