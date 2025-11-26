import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import images from '../assets/images/images';

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
    ArrowRight
} from "lucide-react";

const Influence = () => {
    const [activeTab, setActiveTab] = useState("influencers");
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
    // Popular Voices Data
    const popularPosts = [
        {
            id: 1,
            title: "25+ Years of Trusted Real Estate Expertise Across Pune & Maharashtra",
            excerpt:
                "With 25+ years of guiding families, investors, and NRIs, Mr. Milind Nikam has become one of Pune’s most trusted real estate advisors.",
            category: "Property Influencer",
            date: "Nov 25, 2025",
            views: "120K+",
            readTime: "6 min read",
            image: images.milindnikam
        },
        {
            id: 2,
            title: "11+ Years of Real Estate & Digital Expertise Across Pune & Dubai",
            excerpt:
                "Zakki Khan, Director of Majestic Realties, is known for trust, transparency, and strategic land investments delivering exceptional returns.",
            category: "Real Estate Director",
            date: "Nov 26, 2025",
            views: "95K+",
            readTime: "5 min read",
            image: images.zakki_khan2
        }
    ];


    // Collaboration Partners Data
    const collaborationPartners = [
        {
            id: 1,
            name: "Mr. Milind Nikam",
            title: "25+ Years of Trusted Real Estate Expertise Across Pune & Maharashtra",
            subtitle: "Real Estate Consultant, Property Influencer, 120K+ Subscribers",
            category: "Property Influencer",
            author: "Pune Plus Editorial Team",
            date: "November 25, 2025",
            excerpt:
                "With more than 25 years of experience, Mr. Milind Nikam has guided thousands of families, investors, and NRIs toward the right property decisions. His expertise in green properties, luxury estates, and global real estate makes him one of Pune's most trusted advisors.",
            image: images.milindnikam,
            readTime: "6 min read",
            views: "120K+",
            social: {
                youtube: "https://www.youtube.com/@puneplus20",
                instagram: "https://instagram.com/puneplus_milindnikam",
                facebook: "https://www.facebook.com/milind.nikam2"
            },
            slug: "milind-nikam"
        },
        {
            id: 2,
            name: "Zakki Khan",
            title: "11+ Years of Real Estate & Digital Expertise Across Pune & Dubai",
            subtitle: "Director at Majestic Realties & Webmarkx LLC (Dubai)",
            category: "Real Estate Director",
            author: "Pune Plus Editorial Team",
            date: "November 26, 2025",
            excerpt:
                "Zakki Khan, Founder of Majestic Realties, brings 11+ years of real estate and digital expertise. He has guided hundreds toward smart, high-return property investments across Pune. Known for trust, transparency, and strategic land opportunities, he continues to shape future-ready real estate decisions.",
            image: images.Zakki_SirInf,
            readTime: "5 min read",
            views: "95K+",
            social: {
                linkedin: "https://www.linkedin.com/in/zakkikhan/",
                // instagram: "https://www.instagram.com/",
                website: "https://www.majesticrealties.com"
            },
            slug: "zakki-khan"
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
        <div className="bg-gray-50 pt-20">
            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:w-2/3  overflow-y-auto pr-4">
                        {/* Collaboration Partners Section */}
                        <section className="mb-16">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                        Our Collaboration Partners
                                    </h2>
                                    <p className="text-gray-600 text-sm">
                                        Showing posts with the label <span className="text-yellow-600 font-semibold">Influencer</span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-yellow-600 font-semibold cursor-pointer hover:text-yellow-700 text-sm">
                                    <span>Show All</span>
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
                                                    className="h-48 md:h-full bg-cover bg-center relative overflow-hidden"
                                                    style={{ backgroundImage: `url(${partner.image})` }}
                                                >
                                                    <div className="absolute inset-0 bg-black/20"></div>
                                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                                        <span className="inline-block bg-white/20 backdrop-blur-sm px-2 py-1 text-xs font-medium mb-1">
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
                                                        <Link to={`/real-estate-influence/${partner.slug}`} className="block">
                                                            <div className="flex items-center gap-1 text-yellow-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                                                <span>Read More</span>
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
                                        Load More
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Right Column - Sticky Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-8">
                            {/* Social Media Section */}
                            <div className="bg-white shadow-md border border-gray-200 p-4 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Connect With Us</h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    Follow Majestic Realties on social media for the latest updates and property insights.
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

                            {/* Popular Voices Section */}
                            <div className="bg-white shadow-md border border-gray-200 p-4 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Popular Voices</h3>
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
                                                    className="w-12 h-12 bg-cover bg-center flex-shrink-0"
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
                            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 text-white">
                                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                                <p className="text-yellow-100 text-sm mb-3">
                                    Get the latest influencer collaborations and property insights delivered to your inbox.
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
                                <p>The views expressed in the articles and interviews are of the writer and the interviewee and not of Majestic Realties.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-yellow-900 to-yellow-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Collaborate with <span className="text-yellow-400">Majestic Realties</span>?
                        </h2>
                        <p className="text-lg text-yellow-100 mb-6">
                            Join our network of trusted influencers and reach millions of potential property buyers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-yellow-500 text-gray-900 px-6 py-3 font-bold text-base hover:bg-yellow-400 transition-colors inline-flex items-center gap-2"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Become a Partner
                                </motion.button>
                            </Link>

                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent text-white px-6 py-3 font-bold text-base border-2 border-white hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center gap-2"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Schedule Meeting
                                </motion.button>
                            </Link>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-yellow-200">
                            <div>✓ 50+ Influencer Partners</div>
                            <div>✓ 10M+ Combined Reach</div>
                            <div>✓ 85% Engagement Rate</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Influence;