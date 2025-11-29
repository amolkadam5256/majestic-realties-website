import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import images from '../../assets/images/images';

// Icons
import {
  TrendingUp,
  Target,
  Shield,
  Globe,
  DollarSign,
  Rocket,
  Users,
  Award,
  BarChart3,
  Home,
  Building,
  MapPin,
  Calendar,
  CheckCircle,
  Play,
  MessageCircle,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Twitter,
  Star,
  ChevronRight,
  ExternalLink,
  Clock,
  Video,
  Image,
  FileText,
  ThumbsUp,
  Eye,
  Share2,
  Heart,
  ArrowRight,
  Compass,
  Palette,
  Ruler,
  LandPlot,
  Trees,
  Crop
} from "lucide-react";

const ArchitecturalExpert = () => {
  const [activeTab, setActiveTab] = useState("architects");
  const [visiblePartners, setVisiblePartners] = useState(6);

  // Social Media Links Data
  const socialMediaLinks = [
    {
      platform: "WhatsApp",
      url: "https://wa.me/917843077794",
      icon: <MessageCircle className="w-4 h-4" />,
      color: "hover:bg-green-500 hover:text-white",
      label: "Chat with us on WhatsApp"
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/majesticrealties?mibextid=LQQJ4d",
      icon: <Facebook className="w-4 h-4" />,
      color: "hover:bg-blue-600 hover:text-white",
      label: "Follow us on Facebook"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/majesticrealtiespune?igshid=MzRlODBiNWFlZA%3D%3D",
      icon: <Instagram className="w-4 h-4" />,
      color: "hover:bg-pink-500 hover:text-white",
      label: "Follow us on Instagram"
    },
    {
      platform: "Twitter",
      url: "https://x.com/majesticrealti",
      icon: <Twitter className="w-4 h-4" />,
      color: "hover:bg-blue-400 hover:text-white",
      label: "Follow us on Twitter"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/majesticrealties/?originalSubdomain=in",
      icon: <Linkedin className="w-4 h-4" />,
      color: "hover:bg-blue-700 hover:text-white",
      label: "Follow us on LinkedIn"
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/channel/UCfIYfQweloVUxZikAFsQjXA",
      icon: <Youtube className="w-4 h-4" />,
      color: "hover:bg-red-600 hover:text-white",
      label: "Subscribe on YouTube"
    }
  ];

  // Popular Voices Data - Architectural Focus
  const popularPosts = [
    {
      id: 1,
      title: "Sustainable Architecture: Transforming Pune's Skyline",
      excerpt: "Explore how modern architectural designs are incorporating sustainable practices for eco-friendly living.",
      category: "Architectural Design",
      date: "Dec 15, 2025",
      views: "85K+",
      readTime: "5 min read",
      image: images.architecturalDesign1
    },
    {
      id: 2,
      title: "Farmhouse Architecture: Blending Tradition with Modernity",
      excerpt: "Discover the art of creating perfect farmhouse designs that maintain traditional charm with modern amenities.",
      category: "Farmhouse Design",
      date: "Dec 12, 2025",
      views: "72K+",
      readTime: "4 min read",
      image: images.farmhouseDesign1
    }
  ];

  // Collaboration Partners Data - Architectural Experts
  const collaborationPartners = [
    {
      id: 1,
      name: "Ar. Rajesh Sharma",
      title: "15+ Years of Innovative Architectural Solutions for Residential & Commercial Spaces",
      subtitle: "Principal Architect at Design Studio Associates",
      category: "Lead Architect",
      author: "Architecture Today Editorial",
      date: "December 15, 2025",
      excerpt: "Ar. Rajesh Sharma brings 15+ years of architectural excellence, specializing in sustainable design and innovative space utilization. His portfolio includes award-winning residential complexes, commercial spaces, and agricultural land development projects across Maharashtra.",
      image: images.architect1,
      readTime: "6 min read",
      views: "78K+",
      social: {
        linkedin: "https://www.linkedin.com/in/architect-sharma/",
        website: "https://www.designstudioassociates.com"
      },
      slug: "rajesh-sharma",
      specialties: ["Sustainable Design", "Residential Complexes", "Farmhouse Planning"]
    },
  ];

  // Social Icon Component
  const SocialIcon = ({ platform, url }) => {
    const icons = {
      youtube: <Youtube className="w-4 h-4" />,
      instagram: <Instagram className="w-4 h-4" />,
      facebook: <Facebook className="w-4 h-4" />,
      linkedin: <Linkedin className="w-4 h-4" />,
      twitter: <Twitter className="w-4 h-4" />,
      tiktok: <Video className="w-4 h-4" />,
      behance: <Image className="w-4 h-4" />
    };

    const colors = {
      youtube: "hover:bg-red-500 hover:text-white",
      instagram: "hover:bg-pink-500 hover:text-white",
      facebook: "hover:bg-blue-600 hover:text-white",
      linkedin: "hover:bg-blue-700 hover:text-white",
      twitter: "hover:bg-blue-400 hover:text-white",
      tiktok: "hover:bg-black hover:text-white",
      behance: "hover:bg-blue-500 hover:text-white"
    };

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-2 bg-gray-100 transition-all duration-300 text-gray-600 ${colors[platform] || 'hover:bg-gray-600 hover:text-white'}`}
        aria-label={`Follow on ${platform}`}
      >
        {icons[platform] || <Globe className="w-4 h-4" />}
      </a>
    );
  };

  const loadMorePartners = () => {
    setVisiblePartners(prev => prev + 6);
  };

  return (
    <div className="bg-white pt-20">
      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:w-2/3 overflow-y-auto lg:pr-4">
            {/* Collaboration Partners Section */}
            <section className="mb-12 sm:mb-16">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Our Architectural Partners
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Connecting you with certified architects specializing in <span className="text-yellow-600 font-semibold">residential, farmhouse, and agricultural development</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 text-yellow-600 font-semibold cursor-pointer hover:text-yellow-700 text-sm">
                  <span>Show All</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {collaborationPartners.slice(0, visiblePartners).map((partner, index) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white shadow-lg border border-yellow-100 overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image Section */}
                      <div className="md:w-2/5">
                        <div
                          className="h-64 md:h-full bg-cover bg-center relative overflow-hidden"
                          style={{ backgroundImage: `url(${partner.image})` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <span className="inline-block bg-yellow-500/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold mb-2">
                              {partner.category}
                            </span>
                            <h3 className="text-xl font-bold mb-1">
                              {partner.name}
                            </h3>
                            <p className="text-yellow-100 text-sm">
                              {partner.subtitle}
                            </p>
                          </div>
                          {/* Specialties Tags */}
                          <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                            {partner.specialties?.map((specialty, idx) => (
                              <span
                                key={idx}
                                className="bg-white/20 backdrop-blur-sm px-2 py-1 text-xs text-white"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-3/5 p-4 sm:p-6">
                        <div className="flex flex-col h-full">
                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors leading-tight">
                              {partner.title}
                            </h4>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-gray-500 mb-4">
                              <span className="font-semibold text-yellow-600">{partner.category}</span>
                              <span className="hidden sm:block">•</span>
                              <span>By {partner.author}</span>
                              <span className="hidden sm:block">•</span>
                              <span>{partner.date}</span>
                            </div>

                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                              {partner.excerpt}
                            </p>

                            {/* Specialties */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {partner.specialties?.map((specialty, idx) => (
                                <span
                                  key={idx}
                                  className="bg-yellow-50 text-yellow-700 px-2 sm:px-3 py-1 text-xs font-medium border border-yellow-200"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-yellow-100">
                            <div className="flex items-center justify-between sm:justify-start gap-4">
                              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                                  {partner.views}
                                </span>
                                <span>{partner.readTime}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                {partner.social && Object.entries(partner.social).map(([platform, url]) => (
                                  <SocialIcon key={platform} platform={platform} url={url} />
                                ))}
                              </div>
                            </div>
                            <Link to={`/architectural-expert/${partner.slug}`} className="block">
                              <div className="flex items-center gap-2 text-yellow-600 font-semibold group-hover:gap-3 transition-all text-sm">
                                <span>View Portfolio</span>
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              {visiblePartners < collaborationPartners.length && (
                <div className="text-center mt-8 sm:mt-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={loadMorePartners}
                    className="bg-yellow-600 text-white px-6 sm:px-8 py-3 font-semibold hover:bg-yellow-700 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform transition-all duration-300 text-sm sm:text-base"
                  >
                    <span>Load More Architects</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>
              )}
            </section>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-4 sm:space-y-6">
              {/* Social Media Section */}
              <div className="bg-white shadow-lg border border-yellow-100 p-4 sm:p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-yellow-600" />
                  Connect With Our Architects
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Follow our architectural partners for design inspiration and project updates.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {socialMediaLinks.map((social, index) => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`flex flex-col items-center justify-center p-2 sm:p-3 bg-yellow-50 border border-yellow-200 text-yellow-700 transition-all duration-300 text-xs ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                      <span className="mt-1 sm:mt-2 font-semibold text-xs">{social.platform}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Popular Architectural Insights */}
              <div className="bg-white shadow-lg border border-yellow-100 p-4 sm:p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-yellow-600" />
                  Popular Architectural Insights
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {popularPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-4 border-yellow-500 pl-3 sm:pl-4 group cursor-pointer transform transition-all duration-300 hover:border-yellow-600"
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-cover bg-center flex-shrink-0 shadow-md"
                          style={{ backgroundImage: `url(${post.image})` }}
                        ></div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight mb-1 sm:mb-2 text-xs sm:text-sm line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-gray-600 text-xs mb-1 sm:mb-2 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs text-gray-500">
                            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 text-xs">
                              {post.category}
                            </span>
                            <span className="hidden sm:block">{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Architectural Services */}
              <div className="bg-gradient-to-br from-yellow-600 to-amber-600 p-4 sm:p-6 text-white shadow-lg">
                <h3 className="text-lg font-bold mb-3">Architectural Services</h3>
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-300" />
                    <span className="text-xs sm:text-sm">Residential Building Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-300" />
                    <span className="text-xs sm:text-sm">Farmhouse Planning & Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-300" />
                    <span className="text-xs sm:text-sm">Agricultural Land Development</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-300" />
                    <span className="text-xs sm:text-sm">Open Plot Utilization</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-300" />
                    <span className="text-xs sm:text-sm">Sustainable Architecture</span>
                  </div>
                </div>
                <button className="w-full bg-white text-yellow-700 py-2 font-semibold hover:bg-yellow-50 transition-colors text-xs sm:text-sm shadow-md">
                  Consult an Architect
                </button>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-4 sm:p-6 text-white shadow-lg">
                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                <p className="text-amber-100 text-xs sm:text-sm mb-3 sm:mb-4">
                  Get the latest architectural trends and project insights delivered to your inbox.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white text-gray-900 placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-sm"
                  />
                  <button className="w-full bg-gray-900 text-white py-2 sm:py-3 font-semibold hover:bg-gray-800 transition-colors text-xs sm:text-sm shadow-md">
                    Subscribe Now
                  </button>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center text-gray-500 text-xs p-3 sm:p-4 bg-white border border-yellow-100">
                <p className="leading-relaxed">
                  The architectural designs and concepts presented are the creative works of individual architects
                  and not necessarily representative of Majestic Realties' standard offerings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-yellow-700 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Bring Your <span className="text-yellow-300">Architectural Vision</span> to Life?
            </h2>
            <p className="text-base sm:text-lg text-amber-100 mb-4 sm:mb-6">
              Connect with our certified architects for residential, farmhouse, and agricultural development projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 sm:gap-3 shadow-lg w-full sm:w-auto justify-center"
                >
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                  Start Your Project
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base border-2 border-white hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  Schedule Consultation
                </motion.button>
              </Link>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm text-yellow-200">
              <div className="flex items-center gap-1 sm:gap-2 justify-center">
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Certified Architects</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 justify-center">
                <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>500+ Projects</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 justify-center">
                <Trees className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Sustainable Designs</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 justify-center">
                <LandPlot className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Land Optimization</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArchitecturalExpert;