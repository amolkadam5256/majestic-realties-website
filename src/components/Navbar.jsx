import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import images from '../assets/images/images'; // Your logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white dark:bg-black fixed w-full z-50 top-0 ">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-1">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={images.logo} className="h-16 w-auto" alt="Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
            Majestic Realties
          </span> */}
        </Link>

        {/* Social Icons + Menu Toggle */}
        <div className="flex items-center md:order-2 space-x-4">
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/917843077794"  // WhatsApp with country code
              className="text-[#25D366] hover:text-[#D9BD6A] transition"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.facebook.com/majesticrealties?mibextid=LQQJ4d"  // Replace with actual Facebook page
              className="text-[#1877F2] hover:text-[#D9BD6A] transition"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/majesticrealtiespune?igshid=MzRlODBiNWFlZA%3D%3D"  // Replace with actual Instagram
              className="text-[#E4405F] hover:text-[#D9BD6A] transition"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/majesticrealti"  // Replace with actual Twitter handle
              className="text-[#1DA1F2] hover:text-[#D9BD6A] transition"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/company/majesticrealties/?originalSubdomain=in"  // Replace with LinkedIn company page
              className="text-[#0A66C2] hover:text-[#D9BD6A] transition"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com/channel/UCfIYfQweloVUxZikAFsQjXA"  // Replace with YouTube channel
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:text-[#D9BD6A] transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>


          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black dark:text-white rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D9BD6A]"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`${menuOpen ? 'block' : 'hidden'
            } items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row mt-4 md:mt-0 font-medium border border-[#BF9039] md:border-0 rounded-lg bg-white md:bg-transparent dark:bg-black md:dark:bg-transparent md:space-x-8 p-4 md:p-0">
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block py-2 px-3 rounded-md transition duration-300
                    ${location.pathname === path
                      ? 'text-white bg-[#BF9039] md:bg-transparent md:text-[#BF9039] dark:md:text-[#D9BD6A]'
                      : 'text-black hover:bg-[#D9BD6A] md:hover:bg-transparent md:hover:text-[#BF9039] dark:text-white dark:hover:bg-[#BF9039] md:dark:hover:bg-transparent'
                    }
                  `}
                  aria-current={location.pathname === path ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
            <div className="justify-center flex  md:hidden items-center space-x-6 py-10">
              <a href="#" className="text-[#25D366] hover:text-[#D9BD6A] transition">
                <FaWhatsapp />
              </a>
              <a href="#" className="text-[#1877F2] hover:text-[#D9BD6A] transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-[#E4405F] hover:text-[#D9BD6A] transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-[#1DA1F2] hover:text-[#D9BD6A] transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#0A66C2] hover:text-[#D9BD6A] transition">
                <FaLinkedinIn />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
