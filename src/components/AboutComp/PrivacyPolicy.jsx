import React, { useEffect } from 'react';
import { FaShieldAlt, FaUser, FaDatabase, FaLock, FaMobileAlt, FaClock } from 'react-icons/fa';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { IoIosArrowRoundUp } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white text-black px-6 md:px-16 py-16">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center space-y-4" data-aos="fade-down">
          <MdOutlinePrivacyTip className="text-5xl mx-auto text-black" />
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-700 text-sm">Last updated: May 16, 2024</p>
        </div>

        {/* Intro */}
        <div className="space-y-4 text-gray-800" data-aos="fade-up">
          <p>
            At <strong>Majestic Realties</strong>, your privacy is a top priority. This policy outlines how we collect,
            use, and protect your personal data when you access our services.
          </p>
          <p>
            By using our services, you consent to the practices outlined in this Privacy Policy. This page is
            continually updated in line with legal and service changes.
          </p>
        </div>

        {/* Key Definitions */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaShieldAlt className="text-xl" /> Key Definitions
          </h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li><strong>Account</strong>: Your personal login created to access our services.</li>
            <li><strong>Personal Data</strong>: Information that identifies or can be used to identify you.</li>
            <li><strong>Usage Data</strong>: Automatically collected data during service use (e.g., browser, IP).</li>
          </ul>
        </div>

        {/* Data Collection */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUser className="text-xl" /> Data We Collect
          </h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>Name, email, and phone number</li>
            <li>Device type, browser, and location info</li>
            <li>Usage activity and interaction on our website</li>
          </ul>
        </div>

        {/* Use of Data */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaDatabase className="text-xl" /> How We Use Your Data
          </h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>To provide and improve our services</li>
            <li>To personalize user experience</li>
            <li>To contact you with updates or marketing offers</li>
          </ul>
        </div>

        {/* Security */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaLock className="text-xl" /> Data Protection
          </h2>
          <p className="text-gray-800">
            We implement robust security protocols to protect your data. However, no internet transmission is 100% secure, and we recommend caution when sharing sensitive information.
          </p>
        </div>

        {/* Mobile & Cookies */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaMobileAlt className="text-xl" /> Mobile Access & Cookies
          </h2>
          <p className="text-gray-800">
            Our services may collect mobile-specific identifiers. Cookies are used to enhance your browsing experience. You can disable them through your browser settings.
          </p>
        </div>

        {/* Retention & Deletion */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaClock className="text-xl" /> Data Retention & Deletion
          </h2>
          <p className="text-gray-800">
            We retain your data only as long as necessary. You can request data deletion anytime by contacting us.
          </p>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" className="space-y-2">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p>Email: <a href="mailto:zakki@majesticrealties.com" className="underline">zakki@majesticrealties.com</a></p>
          <p>Phone: <a href="tel:+917843077794" className="underline">+91 78430 77794</a></p>
          <p>Website: <a href="https://www.majesticrealties.com" className="underline" target="_blank" rel="noreferrer">www.majesticrealties.com</a></p>
        </div>

        {/* Back to Top */}
        <div className="text-center pt-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition-transform"
          >
            <IoIosArrowRoundUp className="mr-2 text-xl" /> Back to Top
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
