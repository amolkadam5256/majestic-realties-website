import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import images from "../../assets/images/images";

const FounderCard = () => (
  <article
    className="flex flex-col sm:flex-row items-center bg-white dark:bg-gray-900 rounded-2xl md:shadow-xl overflow-hidden gap-6 p-6 sm:p-8 mx-0 sm:mx-12"
    itemScope
    itemType="https://schema.org/Person"
  >
    {/* Image Section */}
    <div className="w-full sm:w-1/3 h-64 sm:h-auto rounded-lg overflow-hidden">
      <img
        src={images.zakki_khan2}
        alt="Zakki Khan - Founder & Director"
        className="w-full h-full object-cover"
        itemProp="image"
      />
    </div>

    {/* Text Section */}
    <div className="w-full sm:w-2/3 space-y-4 text-center sm:text-left">
      <header>
        <h1
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
          itemProp="name"
        >
          Zakki Khan
        </h1>
        <p
          className="text-sm font-medium text-blue-600 dark:text-blue-400"
          itemProp="jobTitle"
        >
          Director at Majestic Realties & Webmarkx LLC (Dubai)
        </p>
        <a
          href="https://www.majesticrealties.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:underline"
          itemProp="url"
        >
          www.majesticrealties.com
        </a>
      </header>

      <section
        className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
        itemProp="description"
      >
        <p className="mb-2">
          <strong className="text-lg text-[#D9BD6A]">Zakki Khan</strong>, Founder of <strong>Majestic Realties</strong>, brings 11+ years of real estate and digital expertise, guiding hundreds toward smart property investments across Pune.
        </p>
        <p className="mb-2">
          Under his leadership, Majestic Realties is known for trust, transparency, and high-return properties from plots to second homes.
        </p>
        <p>
          His vision: turn every land deal into a legacy for your future.
        </p>
      </section>






      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-4 text-xl text-gray-500 dark:text-gray-400">
        <a href="https://www.linkedin.com/in/zakkikhan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="hover:text-blue-700 transition" />
        </a>
      </div>
    </div>
  </article>
);

export default FounderCard;
