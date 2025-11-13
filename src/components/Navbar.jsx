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
  FaChevronDown,
} from 'react-icons/fa';
import images from '../assets/images/images'; // Your logo image
import ConnectScrollBanner from './ConnectScrollBanner';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expoOpen, setExpoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
    setExpoOpen(false); // Close expo dropdown on route change
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Team', path: '/our-team' },
    { label: 'Projects', path: '/projects' },
    { 
      label: 'Expo', 
      submenu: [
        { label: 'Legal Expo', path: '/expo-legal' },
        { label: 'Financial Expo', path: '/expo-financial' },
        { label: 'Analytical Expo', path: '/expo-analytical' },
      ]
    },
    { label: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const isExpoActive = () => {
    return navLinks.find(item => item.submenu)?.submenu.some(item => isActivePath(item.path));
  };

  return (
    <>
      <nav className="bg-white dark:bg-black fixed w-full z-50 top-0 ">
        <ConnectScrollBanner />
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-1">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse h-auto">
            <img src={images.logo} className="h-14  w-auto" alt="Logo" />
          </Link>

          {/* Social Icons + Menu Toggle */}
          <div className="flex items-center md:order-2 space-x-4">
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://wa.me/917843077794"
                className="text-[#25D366] hover:text-[#D9BD6A] transition"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.facebook.com/majesticrealties?mibextid=LQQJ4d"
                className="text-[#1877F2] hover:text-[#D9BD6A] transition"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/majesticrealtiespune?igshid=MzRlODBiNWFlZA%3D%3D"
                className="text-[#E4405F] hover:text-[#D9BD6A] transition"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/majesticrealti"
                className="text-[#1DA1F2] hover:text-[#D9BD6A] transition"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.linkedin.com/company/majesticrealties/?originalSubdomain=in"
                className="text-[#0A66C2] hover:text-[#D9BD6A] transition"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.youtube.com/channel/UCfIYfQweloVUxZikAFsQjXA"
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
              {navLinks.map((item) => (
                <li key={item.path || item.label} className="relative">
                  {item.submenu ? (
                    /* Expo Dropdown Menu */
                    <>
                      {/* Desktop Dropdown */}
                      <div 
                        className="hidden md:block"
                        onMouseEnter={() => setExpoOpen(true)}
                        onMouseLeave={() => setExpoOpen(false)}
                      >
                        <button
                          className={`flex items-center py-2 px-3 rounded-md transition duration-300
                            ${isExpoActive()
                              ? 'text-white bg-[#BF9039] md:bg-transparent md:text-[#BF9039] dark:md:text-[#D9BD6A]'
                              : 'text-black hover:bg-[#D9BD6A] md:hover:bg-transparent md:hover:text-[#BF9039] dark:text-white dark:hover:bg-[#BF9039] md:dark:hover:bg-transparent'
                            }
                          `}
                        >
                          {item.label}
                          <FaChevronDown className={`ml-1 transition-transform ${expoOpen ? 'rotate-180' : ''}`} size={12} />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {expoOpen && (
                          <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-black border border-[#BF9039]  shadow-lg z-50">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className={`block py-2 px-4 transition duration-600
                                  ${isActivePath(subItem.path)
                                    ? 'text-white bg-[#BF9039]'
                                    : 'text-black hover:bg-[#D9BD6A] dark:text-white dark:hover:bg-[#BF9039]'
                                  }
                                `}
                                onClick={() => setExpoOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Mobile Dropdown */}
                      <div className="md:hidden">
                        <button
                          onClick={() => setExpoOpen(!expoOpen)}
                          className={`flex items-center justify-between w-full py-2 px-3 rounded-md transition duration-300
                            ${isExpoActive()
                              ? 'text-white bg-[#BF9039]'
                              : 'text-black hover:bg-[#D9BD6A] dark:text-white dark:hover:bg-[#BF9039]'
                            }
                          `}
                        >
                          {item.label}
                          <FaChevronDown className={`transition-transform ${expoOpen ? 'rotate-180' : ''}`} size={12} />
                        </button>
                        
                        {/* Mobile Dropdown Menu */}
                        {expoOpen && (
                          <div className="ml-4 mt-2 border-l-2 border-[#BF9039]">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className={`block py-2 px-3 transition duration-300
                                  ${isActivePath(subItem.path)
                                    ? 'text-white bg-[#BF9039]'
                                    : 'text-black hover:bg-[#D9BD6A] dark:text-white dark:hover:bg-[#BF9039]'
                                  }
                                `}
                                onClick={() => {
                                  setExpoOpen(false);
                                  setMenuOpen(false);
                                }}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    /* Regular Nav Link */
                    <Link
                      to={item.path}
                      className={`block py-2 px-3 rounded-md transition duration-300
                        ${isActivePath(item.path)
                          ? 'text-white bg-[#BF9039] md:bg-transparent md:text-[#BF9039] dark:md:text-[#D9BD6A]'
                          : 'text-black hover:bg-[#D9BD6A] md:hover:bg-transparent md:hover:text-[#BF9039] dark:text-white dark:hover:bg-[#BF9039] md:dark:hover:bg-transparent'
                        }
                      `}
                      aria-current={isActivePath(item.path) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="justify-center flex md:hidden items-center space-x-6 py-10">
                <a
                  href="https://wa.me/917843077794"
                  className="text-[#25D366] hover:text-[#D9BD6A] transition"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://www.facebook.com/majesticrealties?mibextid=LQQJ4d"
                  className="text-[#1877F2] hover:text-[#D9BD6A] transition"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/majesticrealtiespune?igshid=MzRlODBiNWFlZA%3D%3D"
                  className="text-[#E4405F] hover:text-[#D9BD6A] transition"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://x.com/majesticrealti"
                  className="text-[#1DA1F2] hover:text-[#D9BD6A] transition"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://www.linkedin.com/company/majesticrealties/?originalSubdomain=in"
                  className="text-[#0A66C2] hover:text-[#D9BD6A] transition"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCfIYfQweloVUxZikAFsQjXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF0000] hover:text-[#D9BD6A] transition"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;