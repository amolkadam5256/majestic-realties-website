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
  Scale,
  Gavel,
  BookOpen,
  GraduationCap,
  Briefcase,
  Landmark,
  FileCheck,
  ShieldCheck
} from "lucide-react";

const LegalExpert = () => {
  const [activeTab, setActiveTab] = useState("legal-experts");
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

  // Popular Legal Insights Data
  const popularPosts = [
    {
      id: 1,
      title: "RERA Compliance: Essential Guide for Home Buyers in 2025",
      excerpt: "Understanding RERA regulations and how they protect your real estate investments in Pune and Maharashtra.",
      category: "Legal Compliance",
      date: "Dec 15, 2025",
      views: "52.7K",
      readTime: "8 min read",
      image: images.legalExpert
    },
    {
      id: 2,
      title: "Property Title Verification: Avoiding Legal Pitfalls",
      excerpt: "Expert advice on conducting thorough title checks and ensuring clean property ownership transfers.",
      category: "Title Verification",
      date: "Dec 10, 2025",
      views: "38.4K",
      readTime: "6 min read",
      image: images.legalExpert
    },

  ];

  // Legal Experts Partners Data
  const collaborationPartners = [
    {
      id: 2,
      name: "Zakki Khan",
      title: "11+ Years of Real Estate & Digital Expertise Across Pune & Dubai",
      subtitle: "Director at Majestic Realties & Webmarkx LLC (Dubai)",
      category: "Real Estate Director",
      author: "Majestic Realties Editorial Team",
      date: "November 26, 2025",
      excerpt:
        "Zakki Khan, Founder of Majestic Realties, brings 11+ years of expertise in real estate and digital strategy. He has guided hundreds toward high-return land and property investments across Pune. Known for trust, transparency, and strategic project selection, he continues to shape future-ready real estate opportunities.",
      image: images.Zakki_SirInf,
      readTime: "5 min read",
      views: "95K+",
      social: {
        linkedin: "https://www.linkedin.com/in/zakkikhan/",
        instagram: "https://instagram.com/majesticrealties"
      },
      slug: "zakki-khan",
      expertise: [
        "Land Investment Strategy",
        "Second Home Projects",
        "Real Estate Marketing",
        "Digital Branding"
      ],
      experience: "11+ Years",
      cases: "500+ Successful Investments Guided"
    }


  ];

  // Legal Services Data
  const legalServices = [
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Property Title Verification",
      description: "Comprehensive title search and legal clearance for safe property transactions"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "RERA Compliance",
      description: "Ensuring all projects and transactions comply with RERA regulations"
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Legal Documentation",
      description: "Drafting and verification of all property-related legal documents"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Due Diligence",
      description: "Thorough legal due diligence for property investments and purchases"
    }
  ];

  // Social Icon Component
  const SocialIcon = ({ platform, url }) => {
    const icons = {
      youtube: <Youtube className="w-4 h-4" />,
      instagram: <Instagram className="w-4 h-4" />,
      facebook: <Facebook className="w-4 h-4" />,
      linkedin: <Linkedin className="w-4 h-4" />,
      twitter: <Twitter className="w-4 h-4" />,
      website: <Globe className="w-4 h-4" />
    };

    const colors = {
      youtube: "hover:bg-red-500 hover:text-white",
      instagram: "hover:bg-pink-500 hover:text-white",
      facebook: "hover:bg-blue-600 hover:text-white",
      linkedin: "hover:bg-blue-700 hover:text-white",
      twitter: "hover:bg-blue-400 hover:text-white",
      website: "hover:bg-green-600 hover:text-white"
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
    <div className="bg-gray-50 pt-20">
      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:w-2/3 overflow-y-auto pr-4">
            {/* Collaboration Partners Section */}
            <section className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Our Legal Experts Panel
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Certified legal professionals specializing in real estate law and property transactions
                  </p>
                </div>
                <div className="flex items-center gap-2 text-yellow-600 font-semibold cursor-pointer hover:text-yellow-700 text-sm">
                  <span>View All Experts</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-6">
                {collaborationPartners.slice(0, visiblePartners).map((partner, index) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="bg-white shadow-md border border-gray-200 overflow-hidden group cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image Section */}
                      <div className="md:w-1/3">
                        <div
                          className="h-48 md:h-full bg-cover bg-left relative overflow-hidden"
                          style={{ backgroundImage: `url(${partner.image})` }}
                        >
                          <div className="absolute inset-0 bg-yellow-900/20"></div>
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <span className="inline-block bg-yellow-600/80 backdrop-blur-sm px-2 py-1 text-xs font-medium mb-1">
                              {partner.category}
                            </span>
                            <h3 className="text-lg font-bold mb-1">
                              {partner.name}
                            </h3>
                            <p className="text-yellow-100 text-xs">
                              {partner.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-2/3 p-4">
                        <div className="flex flex-col h-full">
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors leading-tight">
                              {partner.title}
                            </h4>

                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                              <span className="font-medium">{partner.category}</span>
                              <span>By {partner.author}</span>
                              <span>•</span>
                              <span>{partner.date}</span>
                            </div>

                            <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                              {partner.excerpt}
                            </p>

                            {/* Expertise Tags */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {partner.expertise.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-medium rounded"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            {/* Experience Stats */}
                            <div className="flex gap-4 text-xs text-gray-600 mb-3">
                              <span className="flex items-center gap-1">
                                <Briefcase className="w-3 h-3" />
                                {partner.experience} Experience
                              </span>
                              <span className="flex items-center gap-1">
                                <FileCheck className="w-3 h-3" />
                                {partner.cases} Cases
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-3 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
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
                            <Link to={`/legal-experts/${partner.slug}`} className="block">
                              <div className="flex items-center gap-1 text-yellow-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                <span>View Profile</span>
                                <ArrowRight className="w-3 h-3" />
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
                <div className="text-center mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={loadMorePartners}
                    className="bg-yellow-600 text-white px-6 py-2 font-semibold hover:bg-yellow-700 transition-colors inline-flex items-center gap-2 text-sm"
                  >
                    Load More Experts
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              )}
            </section>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              {/* Legal Services Quick Access */}
              <div className="bg-white shadow-md border border-gray-200 p-4 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-yellow-600" />
                  Legal Services
                </h3>
                <div className="space-y-2">
                  {legalServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded transition-colors">
                      <div className="text-yellow-600">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">{service.title}</h4>
                        <p className="text-gray-600 text-xs">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Section */}
              <div className="bg-white shadow-md border border-gray-200 p-4 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Connect With Us</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Follow Majestic Realties for legal updates and property law insights.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {socialMediaLinks.map((social, index) => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`flex flex-col items-center justify-center p-2 bg-gray-50 border border-gray-200 text-gray-700 transition-all duration-300 text-xs ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                      <span className="mt-1 font-medium">{social.platform}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Popular Legal Insights Section */}
              <div className="bg-white shadow-md border border-gray-200 p-4 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-yellow-600" />
                  Legal Insights
                </h3>
                <div className="space-y-3">
                  {popularPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0 group cursor-pointer"
                    >
                      <div className="flex items-start gap-2">
                        <div
                          className="w-12 h-12 bg-cover bg-center flex-shrink-0 bg-yellow-100"
                          style={{ backgroundImage: `url(${post.image})` }}
                        ></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight mb-1 text-sm">
                            {post.title}
                          </h4>
                          <p className="text-gray-600 text-xs mb-1">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="text-xs">{post.category}</span>
                            <span>•</span>
                            <span className="text-xs">{post.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-xs">
                              <Eye className="w-3 h-3" />
                              {post.views}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 text-white">
                <h3 className="text-lg font-bold mb-2">Legal Updates</h3>
                <p className="text-yellow-100 text-sm mb-3">
                  Get latest legal insights, RERA updates, and property law changes.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-white text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                  <button className="w-full bg-gray-900 text-white py-2 font-semibold hover:bg-gray-800 transition-colors text-sm">
                    Subscribe Now
                  </button>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center text-gray-500 text-xs mt-4 p-2">
                <p>The legal opinions expressed are for informational purposes only and do not constitute legal advice.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-center mb-4">
              <Scale className="w-12 h-12 text-yellow-300" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Legal Assistance for Your Property?
            </h2>
            <p className="text-lg text-yellow-100 mb-6">
              Connect with our certified legal experts for RERA compliance, title verification,
              and complete legal support for your real estate transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-600 text-white px-6 py-3 font-bold text-base hover:bg-yellow-500 transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consult Legal Expert
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white px-6 py-3 font-bold text-base border-2 border-white hover:bg-white hover:text-yellow-600 transition-colors inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Legal Consultation
                </motion.button>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-yellow-200">
              <div>✓ Certified Legal Experts</div>
              <div>✓ 5000+ Cases Resolved</div>
              <div>✓ RERA Compliant</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegalExpert;