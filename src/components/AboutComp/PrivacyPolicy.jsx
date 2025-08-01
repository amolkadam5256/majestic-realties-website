import React, { useEffect } from 'react';
import { FaShieldAlt, FaUser, FaDatabase, FaLock, FaMobileAlt, FaClock } from 'react-icons/fa';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { IoIosArrowRoundUp } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="bg-white text-black px-6 md:px-16 py-16">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Skip to content & Contact */}
        <div className="text-center space-y-1 text-sm" data-aos="fade-down">
          <p className="text-[#D9BD6A] font-bold">Make a call: +91 78430 77794</p>
        </div>

        {/* Header */}
        <div className="text-center space-y-4" data-aos="fade-down">
          <MdOutlinePrivacyTip className="text-5xl mx-auto text-black" />
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-700 text-sm">Last updated: May 16, 2024</p>
        </div>

        {/* Full Privacy Policy */}
        <div className="space-y-6 text-gray-800 text-sm leading-relaxed" data-aos="fade-up">
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
          <h2 className="text-lg font-semibold">Interpretation and Definitions</h2>
          <p><strong>Interpretation:</strong> Capitalized words have specific meanings under this policy whether they appear in singular or plural.</p>
          <p><strong>Definitions:</strong></p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Account</strong>: A unique account created for You to access our Service.</li>
            <li><strong>Affiliate</strong>: Any entity under common control with the Company.</li>
            <li><strong>Company</strong>: Refers to Majestic Realties, located at Bandal Spaces, Paud Road, Pune.</li>
            <li><strong>Cookies</strong>: Small files used to collect browsing information.</li>
            <li><strong>Device</strong>: Any device used to access the Service.</li>
            <li><strong>Personal Data</strong>: Information related to an identifiable individual.</li>
            <li><strong>Service</strong>: Refers to the Website.</li>
            <li><strong>Usage Data</strong>: Data collected automatically while using the Service.</li>
            <li><strong>You</strong>: The individual or entity accessing the Service.</li>
          </ul>

          <h2 className="text-lg font-semibold">Collecting and Using Your Personal Data</h2>
          <p><strong>Personal Data:</strong> We may collect your name, email, phone number, and usage data.</p>
          <p><strong>Usage Data:</strong> Includes IP address, browser type/version, time spent, device type, etc.</p>

          <h2 className="text-lg font-semibold">Tracking Technologies and Cookies</h2>
          <p>We use session and persistent cookies for essential functionality, preference saving, and analytics.</p>

          <h2 className="text-lg font-semibold">Use of Your Personal Data</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>To provide and maintain our Service</li>
            <li>To manage Your Account</li>
            <li>To contact You</li>
            <li>To offer products/services</li>
            <li>To manage requests</li>
            <li>To evaluate for business transfers</li>
          </ul>

          <h2 className="text-lg font-semibold">Retention and Transfer of Your Data</h2>
          <p>Your data is retained as needed and may be processed/stored outside your jurisdiction.</p>

          <h2 className="text-lg font-semibold">Your Rights & Deletion</h2>
          <p>You may update or delete your data. Some legal obligations may require us to retain specific data.</p>

          <h2 className="text-lg font-semibold">Disclosure and Legal Obligations</h2>
          <p>We may disclose data to comply with legal obligations or to protect rights, safety, or investigate fraud.</p>

          <h2 className="text-lg font-semibold">Security</h2>
          <p>We take reasonable security measures but cannot guarantee 100% data security over the Internet.</p>

          <h2 className="text-lg font-semibold">Children’s Privacy</h2>
          <p>We do not knowingly collect information from children under 13. Contact us if you suspect such data has been provided.</p>

          <h2 className="text-lg font-semibold">Links to Other Sites</h2>
          <p>We are not responsible for the content or privacy of external websites linked from our Service.</p>

          <h2 className="text-lg font-semibold">Policy Updates</h2>
          <p>We may update this policy and notify users by updating this page. Please review it periodically.</p>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" className="space-y-2">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>Email: <a href="mailto:zakki@majesticrealties.com" className="underline">zakki@majesticrealties.com</a></p>
          <p>Phone: <a href="tel:+917843077794" className="underline">+91 78430 77794</a></p>
          <p>Website: <a href="https://www.majesticrealties.com" className="underline" target="_blank" rel="noreferrer">www.majesticrealties.com</a></p>
        </div>

        {/* Footer Info */}
        <div className="text-center text-sm pt-6 text-gray-600 border-t">
          <p>Office: 3rd Floor, Bandal Spaces, Paud Rd., Kothrud, Pune, Maharashtra</p>
          <p>Tue - Sun 9:30 AM - 6:30 PM | Monday - CLOSED</p>
          <p>Copyright © 2025 Majestic Realties</p>
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