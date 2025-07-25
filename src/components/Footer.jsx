import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold text-[#D9BD6A] mb-4">About Us</h3>
          <p className="text-gray-300 leading-relaxed">
            Since 2014, Majestic Realties has been shaping exceptional living spaces. Explore our portfolio and let's build your vision together.
          </p>
          <p className="mt-4 text-yellow-400">Tue - Sun: 9:30 AM - 6:30 PM</p>
          <p className="text-yellow-500">Monday - CLOSED</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#D9BD6A] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Projects</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Testimonials</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-[#D9BD6A] mb-4">Our Office</h3>
          <p className="text-gray-300">3rd Floor, Bandal Spaces, Paud Rd., Kothrud, Pune</p>
          <p className="mt-2 text-gray-300">📞 +91 78430 77794</p>
          <p className="text-gray-300">📧 zakki@majesticrealties.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-[#D9BD6A] mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="text-[#25D366] hover:text-[#D9BD6A] transition" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="#" className="text-[#1877F2] hover:text-[#D9BD6A] transition" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="text-[#E4405F] hover:text-[#D9BD6A] transition" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="text-[#1DA1F2] hover:text-[#D9BD6A] transition" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="text-[#0A66C2] hover:text-[#D9BD6A] transition" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/@YourChannel" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:text-[#D9BD6A] transition" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; 2025 <span className="text-[#D9BD6A] font-semibold">Majestic Realties</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
