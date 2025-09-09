import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8 px-4">
            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto">
                
                {/* Website Link Section */}
                <div className="text-center py-6 border-t border-gray-800">
                    <p className="text-gray-400 mb-2">Visit our website for more information</p>
                    <a
                        href="https://majesticrealties.com/"
                        className="inline-block text-gold font-semibold text-lg hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.majesticrealties.com
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center pt-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Majestic Estates. All rights reserved.
                    </p>
                </div>
            </div>

            <style jsx>{`
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .text-gold {
          color: #D4AF37;
        }
        .bg-gold {
          background-color: #D4AF37;
        }
      `}</style>
        </footer>
    );
};

export default Footer;