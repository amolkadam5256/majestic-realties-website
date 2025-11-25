import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Icons
import {
    MessageCircle,
    Instagram,
    Youtube,
    Facebook,
    Linkedin,
    Twitter,
    Eye,
    ArrowRight,
    Calendar,
    Award,
    CheckCircle,
    Building,
    Home,
    MapPin,
    Users,
    Star,
    ThumbsUp,
    TrendingUp,
    Target,
    Shield
} from "lucide-react";

const MilindNikamPage = () => {
    const [activePhoto, setActivePhoto] = useState(0);

    // Milind Nikam Data
    const milindNikamData = {
        id: 1,
        name: "Mr. Milind Nikam",
        title: "25+ Years of Trusted Real Estate Expertise Across Pune & Maharashtra",
        subtitle: "Real Estate Consultant, Property Influencer, 120K+ Subscribers",
        category: "Property Influencer",
        author: "Pune Plus Editorial Team",
        date: "November 25, 2025",
        excerpt: "With more than 25 years of experience, Mr. Milind Nikam has guided thousands of families, investors, and NRIs toward the right property decisions. His expertise in green properties, luxury estates, and global real estate makes him one of Pune's most trusted advisors.",
        image: "/images/milind-nikam.jpg",
        readTime: "6 min read",
        views: "120K+",
        social: {
            youtube: "https://www.youtube.com/@puneplus20",
            instagram: "https://instagram.com/puneplus_milindnikam",
            facebook: "https://www.facebook.com/milind.nikam2"
        },
        slug: "contact",
        achievements: [
            "25+ Years in Real Estate",
            "120K+ YouTube Subscribers",
            "5000+ Happy Families",
            "Pune's Trusted Advisor"
        ],
        specialties: [
            "Residential Properties",
            "Commercial Real Estate",
            "NRI Investments",
            "Luxury Projects",
            "Green Buildings"
        ]
    };

    // Organization Photos
    const organizationPhotos = [
        {
            id: 1,
            src: "/images/office-1.jpg",
            alt: "Majestic Realties Office",
            title: "Modern Office Space"
        },
        {
            id: 2,
            src: "/images/team-1.jpg",
            alt: "Our Professional Team",
            title: "Expert Team Members"
        },
        {
            id: 3,
            src: "/images/project-1.jpg",
            alt: "Successful Project",
            title: "Completed Project"
        },
        {
            id: 4,
            src: "/images/client-meeting.jpg",
            alt: "Client Consultation",
            title: "Client Meeting"
        }
    ];

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

    // Popular Posts Data
    const popularPosts = [
        {
            id: 1,
            title: "25+ Years of Real Estate Excellence – Mr. Milind Nikam's Journey",
            excerpt: "Discover how Pune's leading Property Influencer built a trusted platform",
            category: "Real Estate",
            date: "Nov 25, 2025",
            views: "45.2K",
            readTime: "6 min read",
            image: "/images/milind-nikam.jpg"
        },
        {
            id: 2,
            title: "Why Green Properties Are the Future in Pune",
            excerpt: "Sustainable living and property investment insights",
            category: "Green Living",
            date: "Nov 20, 2025",
            views: "30.8K",
            readTime: "4 min read",
            image: "/images/green-living.jpg"
        },
        {
            id: 3,
            title: "NRI Property Investment Guide for Pune Real Estate",
            excerpt: "Complete guide for NRIs looking to invest in Pune",
            category: "Investment",
            date: "Nov 18, 2025",
            views: "28.3K",
            readTime: "5 min read",
            image: "/images/nri-investment.jpg"
        }
    ];

    // Social Icon Component
    const SocialIcon = ({ platform, url }) => {
        const icons = {
            youtube: <Youtube className="w-4 h-4" />,
            instagram: <Instagram className="w-4 h-4" />,
            facebook: <Facebook className="w-4 h-4" />,
            linkedin: <Linkedin className="w-4 h-4" />,
            twitter: <Twitter className="w-4 h-4" />
        };

        const colors = {
            youtube: "hover:bg-red-500 hover:text-white",
            instagram: "hover:bg-pink-500 hover:text-white",
            facebook: "hover:bg-blue-600 hover:text-white",
            linkedin: "hover:bg-blue-700 hover:text-white",
            twitter: "hover:bg-blue-400 hover:text-white"
        };

        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 bg-gray-100 transition-all duration-300 text-gray-600 ${colors[platform] || 'hover:bg-gray-600 hover:text-white'}`}
                aria-label={`Follow on ${platform}`}
            >
                {icons[platform]}
            </a>
        );
    };

    return (
        <div className="bg-gray-50 pt-20">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:w-2/3">
                        {/* Milind Nikam Detailed Section */}
                        <section className="mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white shadow-xl border border-yellow-200 overflow-hidden group cursor-pointer rounded-xl"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Image Section */}
                                    <div className="md:w-2/5">
                                        <div className="h-64 md:h-full bg-gradient-to-br from-yellow-400 to-yellow-600 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-black/10"></div>
                                            <div className="absolute top-4 left-4">
                                                <span className="inline-block bg-yellow-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-lg">
                                                    Featured
                                                </span>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                                <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-semibold mb-2 rounded">
                                                    {milindNikamData.category}
                                                </span>
                                                <h3 className="text-xl font-bold mb-1">
                                                    {milindNikamData.name}
                                                </h3>
                                                <p className="text-yellow-100 text-sm">
                                                    {milindNikamData.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="md:w-3/5 p-6">
                                        <div className="flex flex-col h-full">
                                            <div className="flex-1">
                                                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors leading-tight">
                                                    {milindNikamData.title}
                                                </h4>

                                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                                                    <span className="font-semibold text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
                                                        {milindNikamData.category}
                                                    </span>
                                                    <span>By {milindNikamData.author}</span>
                                                    <span>•</span>
                                                    <span>{milindNikamData.date}</span>
                                                </div>

                                                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                                                    {milindNikamData.excerpt}
                                                </p>

                                                {/* Achievements */}
                                                <div className="mb-6">
                                                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                        <Award className="w-5 h-5 text-yellow-500" />
                                                        Key Achievements
                                                    </h5>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {milindNikamData.achievements.map((achievement, index) => (
                                                            <div key={index} className="flex items-center gap-2 text-sm text-gray-700 bg-yellow-50 p-2 rounded-lg">
                                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                                {achievement}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Specialties */}
                                                <div className="mb-6">
                                                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                        <Building className="w-5 h-5 text-yellow-500" />
                                                        Areas of Expertise
                                                    </h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {milindNikamData.specialties.map((specialty, index) => (
                                                            <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                                                {specialty}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between pt-4 border-t border-yellow-100">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-3 text-sm text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            <Eye className="w-4 h-4" />
                                                            {milindNikamData.views}
                                                        </span>
                                                        <span>{milindNikamData.readTime}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        {milindNikamData.social && Object.entries(milindNikamData.social).map(([platform, url]) => (
                                                            <SocialIcon key={platform} platform={platform} url={url} />
                                                        ))}
                                                    </div>
                                                </div>
                                                <Link to="/contact" className="flex items-center gap-1 text-yellow-600 font-semibold text-sm group-hover:gap-2 transition-all hover:text-yellow-700">
                                                    <span>Contact for Consultation</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Photo Gallery Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="bg-white shadow-lg border border-yellow-200 p-6 mt-6 rounded-xl"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Our Organization Gallery
                                </h3>

                                {/* Main Photo */}
                                <div className="mb-4">
                                    <div className="h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/20"></div>
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h4 className="text-lg font-bold">{organizationPhotos[activePhoto].title}</h4>
                                            <p className="text-yellow-100 text-sm">Majestic Realties</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Thumbnail Grid */}
                                <div className="grid grid-cols-4 gap-2">
                                    {organizationPhotos.map((photo, index) => (
                                        <motion.div
                                            key={photo.id}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActivePhoto(index)}
                                            className={`h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg cursor-pointer transition-all duration-300 ${activePhoto === index ? 'ring-2 ring-yellow-500 ring-offset-2' : 'opacity-70 hover:opacity-100'
                                                }`}
                                        >
                                            <div className="h-full w-full flex items-center justify-center text-white text-xs font-medium text-center px-1">
                                                {photo.title}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            
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

                            {/* Popular Posts Section */}
                            <div className="bg-white shadow-md border border-gray-200 p-4 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Popular Posts</h3>
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
                                                <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 flex-shrink-0"></div>
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

export default MilindNikamPage;