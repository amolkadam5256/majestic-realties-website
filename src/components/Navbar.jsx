import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import images from '../assets/images/images';
import ConnectScrollBanner from './ConnectScrollBanner';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [expertTalkOpen, setExpertTalkOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
    setAboutOpen(false);
    setProjectsOpen(false);
    setExpertTalkOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    {
      label: 'About',
      submenu: [
        { label: 'Our Company', path: '/about' },
        { label: 'Our Team', path: '/our-team' },
        { label: 'Career', path: '/career' },
      ]
    },
    {
      label: 'Projects',
      path: '/projects',
      submenu: [
        { label: 'All Projects', path: '/projects' },
        { label: 'Royal Vista', path: '/projects/royal_vista' },
        { label: 'Royal Casa', path: '/projects/royal_casa' },
        { label: 'Mount Castle', path: '/projects/mount_castle' },
      ]
    },
    {
      label: 'Expert talk',
      submenu: [
        { label: 'Real Estate Talks', path: 'https://majesticrealties.com/plots_near_pune/' },
        { label: 'Legal Experts', path: '/legal-expert' },
        { label: 'Financial Experts', path: '/financial-expert' },
        { label: 'Architectural Experts', path: '/architectural-expert' },
        { label: 'Top Voices ', path: '/real-estate-influence' },
      ]
    },
    { label: 'Testimonials', path: '/#Testimonials' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path) => {
    const pathWithoutHash = path.split('#')[0];
    const currentPathWithoutHash = location.pathname;
    return currentPathWithoutHash === pathWithoutHash;
  };

  const isAboutActive = () => {
    return navLinks.find(item => item.label === 'About')?.submenu.some(item => isActivePath(item.path));
  };

  const isProjectsActive = () => {
    const projectsItem = navLinks.find(item => item.label === 'Projects');
    return isActivePath(projectsItem.path) || projectsItem.submenu.some(item => isActivePath(item.path));
  };

  const isExpertTalkActive = () => {
    return navLinks.find(item => item.label === 'Expert talk')?.submenu.some(item => isActivePath(item.path));
  };

  // Function to handle navigation to home page testimonials section
  const handleTestimonialsClick = (e) => {
    e.preventDefault();

    // Close all menus
    setAboutOpen(false);
    setProjectsOpen(false);
    setExpertTalkOpen(false);
    setMenuOpen(false);

    // If we're already on home page, scroll to testimonials
    if (location.pathname === '/') {
      const testimonialsElement = document.getElementById('Testimonials');
      if (testimonialsElement) {
        testimonialsElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If element not found, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home page first
      navigate('/');
    }
  };

  // Function to handle regular section links
  const handleSectionClick = (path) => {
    const [basePath, sectionId] = path.split('#');

    // If we're already on the correct page and it's a section link
    if (location.pathname === basePath && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close menus after click
    setAboutOpen(false);
    setProjectsOpen(false);
    setExpertTalkOpen(false);
    setMenuOpen(false);
  };

  // Function to handle external links
  const handleExternalLink = (url) => {
    // Close all menus
    setAboutOpen(false);
    setProjectsOpen(false);
    setExpertTalkOpen(false);
    setMenuOpen(false);
    
    // Open external URL in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Function to handle Projects main link click
  const handleProjectsMainClick = (e) => {
    e.preventDefault();
    navigate('/projects');
    setProjectsOpen(false);
    setMenuOpen(false);
  };

  // Function to check if a path is external
  const isExternalLink = (path) => {
    return path.startsWith('http://') || path.startsWith('https://');
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
                    /* Dropdown Menu */
                    <>
                      {/* Desktop Dropdown */}
                      <div
                        className="hidden md:block"
                        onMouseEnter={() => {
                          if (item.label === 'About') setAboutOpen(true);
                          else if (item.label === 'Projects') setProjectsOpen(true);
                          else if (item.label === 'Expert talk') setExpertTalkOpen(true);
                        }}
                        onMouseLeave={() => {
                          if (item.label === 'About') setAboutOpen(false);
                          else if (item.label === 'Projects') setProjectsOpen(false);
                          else if (item.label === 'Expert talk') setExpertTalkOpen(false);
                        }}
                      >
                        <button
                          className={`flex items-center py-2 px-3 rounded-md transition duration-300
                            ${(item.label === 'About' ? isAboutActive() :
                              item.label === 'Projects' ? isProjectsActive() :
                                isExpertTalkActive())
                              ? 'text-white bg-[#BF9039] md:bg-transparent md:text-[#BF9039] dark:md:text-[#D9BD6A]'
                              : 'text-black hover:bg-[#D9BD6A] md:hover:bg-transparent md:hover:text-[#BF9039] dark:text-white dark:hover:bg-[#BF9039] md:dark:hover:bg-transparent'
                            }
                          `}
                        >
                          {item.label}
                          <FaChevronDown className={`ml-1 transition-transform ${(item.label === 'About' ? aboutOpen :
                            item.label === 'Projects' ? projectsOpen :
                              expertTalkOpen) ? 'rotate-180' : ''}`} size={12} />
                        </button>

                        {/* Dropdown Menu */}
                        {(item.label === 'About' ? aboutOpen :
                          item.label === 'Projects' ? projectsOpen :
                            expertTalkOpen) && (
                            <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-black border border-[#BF9039]  shadow-lg z-50">
                              {item.submenu.map((subItem) => (
                                isExternalLink(subItem.path) ? (
                                  // External Link
                                  <a
                                    key={subItem.path}
                                    href={subItem.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block py-2 px-4 transition duration-600
                                      ${isActivePath(subItem.path)
                                        ? 'text-white bg-[#BF9039]'
                                        : 'text-black hover:bg-[#D9BD6A] dark:text-white dark:hover:bg-[#BF9039]'
                                      }
                                    `}
                                    onClick={() => {
                                      if (item.label === 'About') setAboutOpen(false);
                                      else if (item.label === 'Projects') setProjectsOpen(false);
                                      else if (item.label === 'Expert talk') setExpertTalkOpen(false);
                                    }}
                                  >
                                    {subItem.label}
                                  </a>
                                ) : (
                                  // Internal Link
                                  <Link
                                    key={subItem.path}
                                    to={subItem.path}
                                    className={`block py-2 px-4 transition duration-600
                                      ${isActivePath(subItem.path)
                                        ? 'text-white bg-[#BF9039]'
                                        : 'text-black hover:bg-[#D9BD6A] dark:text-white dark:hover:bg-[#BF9039]'
                                      }
                                    `}
                                    onClick={() => {
                                      handleSectionClick(subItem.path);
                                      if (item.label === 'About') setAboutOpen(false);
                                      else if (item.label === 'Projects') setProjectsOpen(false);
                                      else if (item.label === 'Expert talk') setExpertTalkOpen(false);
                                    }}
                                  >
                                    {subItem.label}
                                  </Link>
                                )
                              ))}
                            </div>
                          )}
                      </div>

                      {/* Mobile Dropdown */}
                      <div className="md:hidden">
                        <button
                          onClick={() => {
                            if (item.label === 'About') setAboutOpen(!aboutOpen);
                            else if (item.label === 'Projects') setProjectsOpen(!projectsOpen);
                            else if (item.label === 'Expert talk') setExpertTalkOpen(!expertTalkOpen);
                          }}
                          className={`flex items-center justify-between w-full py-2 px-3 rounded-md transition duration-300
                            ${(item.label === 'About' ? isAboutActive() :
                              item.label === 'Projects' ? isProjectsActive() :
                                isExpertTalkActive())
                              ? 'text-white bg-[#BF9039]'
                              : 'text-black hover:bg-[#D9BD6A] dark:text-white dark:hover:bg-[#BF9039]'
                            }
                          `}
                        >
                          {item.label}
                          <FaChevronDown className={`transition-transform ${(item.label === 'About' ? aboutOpen :
                            item.label === 'Projects' ? projectsOpen :
                              expertTalkOpen) ? 'rotate-180' : ''}`} size={12} />
                        </button>

                        {/* Mobile Dropdown Menu */}
                        {(item.label === 'About' ? aboutOpen :
                          item.label === 'Projects' ? projectsOpen :
                            expertTalkOpen) && (
                            <div className="ml-4 mt-2 border-l-2 border-[#BF9039]">
                              {item.submenu.map((subItem) => (
                                isExternalLink(subItem.path) ? (
                                  // External Link
                                  <a
                                    key={subItem.path}
                                    href={subItem.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block py-2 px-3 transition duration-300
                                      ${isActivePath(subItem.path)
                                        ? 'text-white bg-[#BF9039]'
                                        : 'text-black hover:bg-[#D9BD6A] dark:text-white dark:hover:bg-[#BF9039]'
                                      }
                                    `}
                                    onClick={() => {
                                      if (item.label === 'About') setAboutOpen(false);
                                      else if (item.label === 'Projects') setProjectsOpen(false);
                                      else if (item.label === 'Expert talk') setExpertTalkOpen(false);
                                      setMenuOpen(false);
                                    }}
                                  >
                                    {subItem.label}
                                  </a>
                                ) : (
                                  // Internal Link
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
                                      handleSectionClick(subItem.path);
                                      if (item.label === 'About') setAboutOpen(false);
                                      else if (item.label === 'Projects') setProjectsOpen(false);
                                      else if (item.label === 'Expert talk') setExpertTalkOpen(false);
                                      setMenuOpen(false);
                                    }}
                                  >
                                    {subItem.label}
                                  </Link>
                                )
                              ))}
                            </div>
                          )}
                      </div>
                    </>
                  ) : (
                    /* Regular Nav Link - Special handling for Testimonials */
                    item.label === 'Testimonials' ? (
                      <a
                        href="/#Testimonials"
                        className={`block py-2 px-3 rounded-md transition duration-300 cursor-pointer
                          ${isActivePath(item.path)
                            ? 'text-white bg-[#BF9039] md:bg-transparent md:text-[#BF9039] dark:md:text-[#D9BD6A]'
                            : 'text-black hover:bg-[#D9BD6A] md:hover:bg-transparent md:hover:text-[#BF9039] dark:text-white dark:hover:bg-[#BF9039] md:dark:hover:bg-transparent'
                          }
                        `}
                        onClick={handleTestimonialsClick}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block py-2 px-3 rounded-md transition duration-300
                          ${isActivePath(item.path)
                            ? 'text-white bg-[#BF9039] md:bg-transparent md:text-[#BF9039] dark:md:text-[#D9BD6A]'
                            : 'text-black hover:bg-[#D9BD6A] md:hover:bg-transparent md:hover:text-[#BF9039] dark:text-white dark:hover:bg-[#BF9039] md:dark:hover:bg-transparent'
                          }
                        `}
                        aria-current={isActivePath(item.path) ? 'page' : undefined}
                        onClick={() => handleSectionClick(item.path)}
                      >
                        {item.label}
                      </Link>
                    )
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