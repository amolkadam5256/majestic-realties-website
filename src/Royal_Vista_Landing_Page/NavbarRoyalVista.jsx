import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import images from '../assets/images/images';

const NavbarRoyalVista = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll to section
  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu
  };

  // Updated nav links for landing page
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Amenities', id: 'amenities' },
    { label: 'Location', id: 'location' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-white dark:bg-black  w-full z-50 top-0 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-1">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("home");
          }}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={images.logo} className="h-14 w-auto" alt="Logo" />
        </a>

        {/* Social Icons + Menu Toggle */}
        <div className="flex items-center md:order-2 space-x-4">
          {/* Social Media Icons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://wa.me/917843077794" className="text-[#25D366] hover:text-[#D9BD6A]" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.facebook.com/majesticrealties?mibextid=LQQJ4d" className="text-[#1877F2] hover:text-[#D9BD6A]" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/majesticrealtiespune" className="text-[#E4405F] hover:text-[#D9BD6A]" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://x.com/majesticrealti" className="text-[#1DA1F2] hover:text-[#D9BD6A]" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/majesticrealties" className="text-[#0A66C2] hover:text-[#D9BD6A]" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/channel/UCfIYfQweloVUxZikAFsQjXA" className="text-[#FF0000] hover:text-[#D9BD6A]" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black dark:text-white rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D9BD6A]"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Nav Links */}
        <div className={`${menuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300`}>
          <ul className="flex flex-col md:flex-row mt-4 md:mt-0 font-medium border border-[#BF9039] md:border-0 rounded-lg bg-white md:bg-transparent dark:bg-black md:dark:bg-transparent md:space-x-8 p-3 md:p-0">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleLinkClick(id)}
                  className="block w-full text-start py-2 px-3 rounded-md text-black dark:text-white hover:bg-[#D9BD6A] md:hover:bg-transparent md:hover:text-[#BF9039] dark:hover:bg-[#BF9039] md:dark:hover:bg-transparent transition"
                >
                  {label}
                </button>
              </li>
            ))}

            {/* Social icons in mobile menu */}
            <div className="justify-center flex md:hidden items-center space-x-6 py-10">
              <a href="https://wa.me/917843077794" className="text-[#25D366] hover:text-[#D9BD6A]" target="_blank"><FaWhatsapp /></a>
              <a href="https://www.facebook.com/majesticrealties?mibextid=LQQJ4d" className="text-[#1877F2] hover:text-[#D9BD6A]" target="_blank"><FaFacebookF /></a>
              <a href="https://www.instagram.com/majesticrealtiespune" className="text-[#E4405F] hover:text-[#D9BD6A]" target="_blank"><FaInstagram /></a>
              <a href="https://x.com/majesticrealti" className="text-[#1DA1F2] hover:text-[#D9BD6A]" target="_blank"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/majesticrealties" className="text-[#0A66C2] hover:text-[#D9BD6A]" target="_blank"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/channel/UCfIYfQweloVUxZikAFsQjXA" className="text-[#FF0000] hover:text-[#D9BD6A]" target="_blank"><FaYoutube /></a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarRoyalVista;
