import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import images from '../../assets/images/images';

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
    Shield,
    ChevronLeft,
    ChevronRight,
    Mail,
    CheckCircle2,
    Play,
    Video,
    Image as ImageIcon,
    Clock,
    Globe,
    Briefcase,
    Rocket,
    Volume2,
    VolumeX,
    DollarSign,
    PieChart,
    BarChart,
    TrendingUp as TrendingUpIcon,
    Wallet,
    CreditCard,
    Calculator,
    Banknote,
    LineChart
} from "lucide-react";

const ZakkiFinancialExpe = () => {
    const [activePhoto, setActivePhoto] = useState(0);
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    // Handle newsletter subscription
    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Web3Forms configuration
        const formData = new FormData();
        formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // Replace with your actual key
        formData.append('email', email);
        formData.append('subject', 'New Newsletter Subscription - Zakki Khan Financial Expertise');
        formData.append('message', `New newsletter subscription from: ${email}`);
        formData.append('from_name', 'Zakki Khan Financial Expertise Subscriber');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSubscribed(true);
                setEmail("");
            } else {
                console.error('Error:', data);
                alert('There was an error submitting the form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Zakki Khan Financial Expertise Data
    const zakkiFinancialData = {
        id: 3,
        name: "Zakki Khan",
        title: "Financial Investment Strategist & Wealth Management Expert",
        subtitle: "Director at Majestic Realties & Webmarkx LLC (Dubai)",
        category: "Financial Investment Strategist",
        author: "Majestic Realties Financial Team",
        date: "November 26, 2025",
        excerpt: "Zakki Khan brings comprehensive financial expertise with 11+ years in investment strategy, wealth management, and financial planning. Specializing in real estate investments, portfolio diversification, and wealth growth strategies across international markets.",
        image: images.Zakki_Sir,
        readTime: "6 min read",
        views: "78K+",
        social: {
            linkedin: "https://www.linkedin.com/in/zakkikhan/",
            instagram: "https://www.instagram.com/",
            website: "https://www.majesticrealties.com"
        },
        slug: "zakki-financial-expertise",
        achievements: [
            "11+ Years Financial Strategy",
            "Wealth Management Expert",
            "International Investment Portfolio",
            "Risk Assessment Specialist"
        ],
        specialties: [
            "Investment Portfolio Management",
            "Real Estate Financial Planning",
            "Wealth Growth Strategies",
            "Risk Management & Analysis",
            "Financial Market Trends",
            "Retirement Planning",
            "Tax Optimization Strategies",
            "International Investments"
        ],
        description: `Zakki Khan brings 11+ years of comprehensive financial expertise, specializing in investment strategy and wealth management across international markets.

With a proven track record in financial planning and portfolio management, he has helped numerous clients achieve their financial goals through strategic investments.

His approach combines traditional financial wisdom with modern investment strategies, focusing on sustainable wealth growth and risk-managed returns.`
    };

    // Financial Expertise Gallery
    const financialGallery = [
        // {
        //     id: 1,
        //     type: "youtube",
        //     videoId: "p4uDyuHiMV8",
        //     alt: "Investment Strategy Masterclass",
        //     title: "Mastering Investment Strategies for Wealth Growth",
        //     description: "Learn proven investment strategies and wealth management techniques from financial expert Zakki Khan.",
        //     category: "Investment Education",
        //     date: "Nov 2025",
        //     duration: "18:45",
        //     views: "32K+",
        //     videoType: "long",
        //     thumbnail: `https://img.youtube.com/vi/p4uDyuHiMV8/hqdefault.jpg`
        // },
        {
            id: 2,
            type: "youtube",
            videoId: "0FVK9ZHWxDI",
            alt: "Wealth Management Basics",
            title: "Wealth Management Fundamentals for Beginners",
            description: "Essential wealth management principles and financial planning strategies for long-term success.",
            category: "Wealth Management",
            date: "Dec 2024",
            duration: "14:20",
            views: "25K+",
            videoType: "short",
            thumbnail: `https://img.youtube.com/vi/0FVK9ZHWxDI/hqdefault.jpg`
        },
        {
            id: 3,
            type: "image",
            src: images.zakki_khan2,
            alt: "Financial Planning Session",
            title: "Personalized Financial Planning Services",
            description: "One-on-one financial planning sessions tailored to individual goals and risk profiles.",
            category: "Financial Planning",
            date: "Nov 2025",
            views: "22K+"
        },
    ];

    // Filter videos by type
    const longVideos = financialGallery.filter(video => video.videoType === "long");
    const shortVideos = financialGallery.filter(video => video.videoType === "short");

    // Financial Projects & Initiatives
    const financialProjects = [
        {
            id: 1,
            title: "Strategic Investment Portfolio Development",
            excerpt: "Developing comprehensive investment portfolios with balanced risk-return profiles for clients",
            category: "Portfolio Management",
            date: "Dec 15, 2024",
            views: "28.5K",
            readTime: "4 min read",
            image: images.zakki_khan2,
            partner: "Majestic Realties Financial",
            status: "Ongoing"
        },

    ];

    // Related Financial Professionals
    const relatedFinancialProfessionals = [
        //         {
        //     id: 1,
        //     name: "Wealth Management Team",
        //     category: "Financial Planners",
        //     followers: "50K+",
        //     image: images.zakki_khan2,
        //     slug: "wealth-management-team"
        // },
    ];

    // Social Media Links Data
    const socialMediaLinks = [
        {
            platform: "WhatsApp",
            url: "https://wa.me/917843077794",
            icon: <MessageCircle className="w-4 h-4" />,
            color: "hover:bg-green-500 hover:text-white",
            label: "Chat about financial planning"
        },
        {
            platform: "Facebook",
            url: "https://www.facebook.com/majesticrealties?mibextid=LQQJ4d",
            icon: <Facebook className="w-4 h-4" />,
            color: "hover:bg-blue-600 hover:text-white",
            label: "Follow financial insights"
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/majesticrealtiespune?igshid=MzRlODBiNWFlZA%3D%3D",
            icon: <Instagram className="w-4 h-4" />,
            color: "hover:bg-pink-500 hover:text-white",
            label: "Follow investment tips"
        },
        {
            platform: "Twitter",
            url: "https://x.com/majesticrealti",
            icon: <Twitter className="w-4 h-4" />,
            color: "hover:bg-blue-400 hover:text-white",
            label: "Follow market updates"
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/company/majesticrealties/?originalSubdomain=in",
            icon: <Linkedin className="w-4 h-4" />,
            color: "hover:bg-blue-700 hover:text-white",
            label: "Connect professionally"
        },
        {
            platform: "YouTube",
            url: "https://www.youtube.com/channel/UCfIYfQweloVUxZikAFsQjXA",
            icon: <Youtube className="w-4 h-4" />,
            color: "hover:bg-red-600 hover:text-white",
            label: "Watch financial education"
        }
    ];

    // Financial Insights Data
    const financialInsights = [
        {
            id: 1,
            title: "Advanced Investment Strategies for 2025 – Zakki Khan's Approach",
            excerpt: "Discover Zakki Khan's proven investment methodologies and wealth growth strategies",
            category: "Investment Strategy",
            date: "Nov 26, 2025",
            views: "38.7K",
            readTime: "6 min read",
            image: images.zakki_khan2,
            slug: "zakki-investment-strategies"
        },
        {
            id: 2,
            title: "Wealth Management in Volatile Markets",
            excerpt: "Expert insights on managing and growing wealth during economic uncertainty",
            category: "Wealth Management",
            date: "Nov 20, 2025",
            views: "29.3K",
            readTime: "5 min read",
            image: images.zakki_khan2,
            slug: "wealth-management-volatility"
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
                {icons[platform]}
            </a>
        );
    };

    // Carousel Navigation
    const nextPhoto = () => {
        setActivePhoto((prev) => (prev + 1) % financialGallery.length);
        setIsPlaying(true);
    };

    const prevPhoto = () => {
        setActivePhoto((prev) => (prev - 1 + financialGallery.length) % financialGallery.length);
        setIsPlaying(true);
    };

    // Toggle mute
    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    // Toggle play/pause
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    // Render Media Content
    const renderMediaContent = (media, isThumbnail = false) => {
        if (media.type === "youtube") {
            if (isThumbnail) {
                return (
                    <div className="relative w-full h-full">
                        <img
                            src={media.thumbnail}
                            alt={media.alt}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <Play className="w-6 h-6 text-white" fill="white" />
                        </div>
                        <div className="absolute top-2 left-2">
                            <span className={`inline-block px-2 py-1 text-xs font-semibold ${media.videoType === 'short' ? 'bg-purple-500' : 'bg-red-500'
                                } text-white rounded`}>
                                {media.videoType === 'short' ? 'SHORT' : 'LONG'}
                            </span>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="relative w-full h-full">
                        <iframe
                            src={`https://www.youtube.com/embed/${media.videoId}?autoplay=${isPlaying ? 1 : 0}&mute=${isMuted ? 1 : 0}&controls=1&modestbranding=1&rel=0`}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={media.title}
                        />
                    </div>
                );
            }
        } else if (media.type === "video") {
            return (
                <div className="relative w-full h-full">
                    <video
                        className={`w-full h-full object-cover ${isThumbnail ? '' : 'bg-gray-900'}`}
                        poster={media.poster}
                        controls={!isThumbnail}
                        muted={isThumbnail}
                        autoPlay={isPlaying}
                    >
                        <source src={media.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {isThumbnail && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <Play className="w-6 h-6 text-white" fill="white" />
                        </div>
                    )}
                </div>
            );
        } else {
            return (
                <div
                    className="w-full h-full bg-cover bg-no-repeat bg-center bg-gray-200"
                    style={{ backgroundImage: `url(${media.src})` }}
                />
            );
        }
    };

    return (
        <div className="bg-gray-50 pt-20">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:w-2/3">
                        {/* Hero Section - Full Width Financial Expert Image */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <div className="bg-white shadow-lg border border-gray-200 overflow-hidden">
                                <div
                                    className="h-96 bg-no-repeat bg-cover bg-center relative"
                                    style={{ backgroundImage: `url(${zakkiFinancialData.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/40"></div>
                                    <div className="absolute top-6 left-6">
                                        <span className="inline-block bg-yellow-400 text-white px-4 py-2 text-lg font-bold shadow-lg">
                                            Director
                                        </span>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6 text-white">
                                        <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 text-lg font-semibold mb-3">
                                            {zakkiFinancialData.category}
                                        </span>
                                        <h1 className="text-4xl font-bold mb-2">
                                            {zakkiFinancialData.name}
                                        </h1>
                                        <p className="text-yellow-100 text-xl">
                                            {zakkiFinancialData.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Content Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="bg-white shadow-lg border border-gray-200 p-8 mb-8"
                        >
                            <div className="flex flex-col">
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        {zakkiFinancialData.title}
                                    </h2>

                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                        <span className="font-semibold text-yellow-400 bg-yellow-50 px-3 py-1">
                                            {zakkiFinancialData.category}
                                        </span>
                                        <span>By {zakkiFinancialData.author}</span>
                                        <span>•</span>
                                        <span>{zakkiFinancialData.date}</span>
                                    </div>

                                    <div className="text-gray-700 mb-8 leading-relaxed text-base space-y-4">
                                        {zakkiFinancialData.description.split('\n\n').map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>

                                    {/* Achievements Grid */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <Award className="w-6 h-6 text-yellow-400" />
                                            Financial Achievements
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {zakkiFinancialData.achievements.map((achievement, index) => (
                                                <div key={index} className="flex items-center gap-3 text-sm text-gray-700 bg-yellow-50 p-3 border border-yellow-200">
                                                    <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                                    <span className="font-medium">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Specialties */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <PieChart className="w-6 h-6 text-yellow-400" />
                                            Financial Expertise Areas
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {zakkiFinancialData.specialties.map((specialty, index) => (
                                                <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-semibold border border-yellow-300">
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-2">
                                                <Eye className="w-4 h-4" />
                                                {zakkiFinancialData.views}
                                            </span>
                                            <span>{zakkiFinancialData.readTime}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {zakkiFinancialData.social && Object.entries(zakkiFinancialData.social).map(([platform, url]) => (
                                                <SocialIcon key={platform} platform={platform} url={url} />
                                            ))}
                                        </div>
                                    </div>
                                    <Link to="/contact" className="flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:text-yellow-500 hover:gap-3 transition-all">
                                        <span>Schedule Financial Consultation</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.section>

                        {/* Financial Expertise Gallery Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="bg-white shadow-lg border border-gray-200 p-6 mb-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Video className="w-5 h-5 text-yellow-400" />
                                Financial Education Gallery
                            </h3>

                            {/* Main Carousel */}
                            <div className="relative mb-8">
                                <div className="h-96 bg-gray-900 relative overflow-hidden rounded-lg">
                                    {renderMediaContent(financialGallery[activePhoto])}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`inline-block px-2 py-1 text-xs font-semibold ${financialGallery[activePhoto].videoType === 'short' ? 'bg-purple-500' : 'bg-red-500'
                                                }`}>
                                                {financialGallery[activePhoto].videoType === 'short' ? 'SHORT' : 'LONG FORM'}
                                            </span>
                                        </div>
                                        <h4 className="text-2xl font-bold mb-2">{financialGallery[activePhoto].title}</h4>
                                    </div>

                                    {/* Video Controls */}
                                    <div className="absolute top-4 right-4 flex items-center gap-2">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={toggleMute}
                                            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
                                        >
                                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={togglePlay}
                                            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
                                        >
                                            {isPlaying ?
                                                <div className="w-4 h-4 bg-white rounded-sm"></div> :
                                                <Play className="w-4 h-4" fill="white" />
                                            }
                                        </motion.button>
                                    </div>

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevPhoto}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 transition-all duration-300 rounded-full"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={nextPhoto}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 transition-all duration-300 rounded-full"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* Video Categories */}
                            <div className="space-y-6">
                                {/* Long Videos Section */}
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-red-500" />
                                        Long Form Financial Education
                                        <span className="text-sm font-normal text-gray-500 ml-2">({longVideos.length} videos)</span>
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {longVideos.map((video, index) => (
                                            <motion.div
                                                key={video.id}
                                                whileHover={{ scale: 1.02 }}
                                                className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                                                onClick={() => {
                                                    setActivePhoto(financialGallery.findIndex(v => v.id === video.id));
                                                    setIsPlaying(true);
                                                }}
                                            >
                                                <div className="relative h-32">
                                                    {renderMediaContent(video, true)}
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                                </div>
                                                <div className="p-3">
                                                    <h5 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{video.title}</h5>
                                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {video.duration}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Eye className="w-3 h-3" />
                                                            {video.views}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Short Videos Section */}
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Video className="w-5 h-5 text-purple-500" />
                                        Quick Financial Tips
                                        <span className="text-sm font-normal text-gray-500 ml-2">({shortVideos.length} videos)</span>
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {shortVideos.map((video, index) => (
                                            <motion.div
                                                key={video.id}
                                                whileHover={{ scale: 1.02 }}
                                                className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                                                onClick={() => {
                                                    setActivePhoto(financialGallery.findIndex(v => v.id === video.id));
                                                    setIsPlaying(true);
                                                }}
                                            >
                                                <div className="relative h-32">
                                                    {renderMediaContent(video, true)}
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                                </div>
                                                <div className="p-3">
                                                    <h5 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{video.title}</h5>
                                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {video.duration}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Eye className="w-3 h-3" />
                                                            {video.views}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Financial Projects Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="bg-white shadow-lg border border-gray-200 p-6 mb-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <LineChart className="w-5 h-5 text-yellow-400" />
                                Financial Projects & Initiatives
                            </h3>

                            <div className="space-y-4">
                                {financialProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="border border-gray-200 p-4 hover:shadow-md transition-shadow rounded-lg"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div
                                                className="w-20 h-20 bg-cover bg-center flex-shrink-0 rounded"
                                                style={{ backgroundImage: `url(${project.image})` }}
                                            ></div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className={`px-2 py-0.5 text-xs font-semibold ${project.category === 'Portfolio Management'
                                                        ? 'bg-yellow-100 text-yellow-800'
                                                        : project.category === 'Wealth Management'
                                                            ? 'bg-blue-100 text-blue-800'
                                                            : 'bg-gray-100 text-gray-800'
                                                        }`}>
                                                        {project.category}
                                                    </span>
                                                    <span className={`px-2 py-0.5 text-xs font-semibold ${project.status === 'Completed'
                                                        ? 'bg-yellow-100 text-yellow-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                        {project.status}
                                                    </span>
                                                </div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                                                    {project.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                                                    {project.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                                        <span className="font-medium">Organization: {project.partner}</span>
                                                        <span>•</span>
                                                        <span>{project.date}</span>
                                                        <span>•</span>
                                                        <span className="flex items-center gap-1">
                                                            <Eye className="w-3 h-3" />
                                                            {project.views}
                                                        </span>
                                                    </div>
                                                    <a
                                                        href={zakkiFinancialData.social.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-yellow-400 font-semibold text-xs hover:text-yellow-500 flex items-center gap-1"
                                                    >
                                                        <span>Learn More</span>
                                                        <ArrowRight className="w-3 h-3" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Related Financial Professionals Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="bg-white shadow-lg border border-gray-200 p-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Users className="w-5 h-5 text-yellow-400" />
                                Financial Team & Collaborators
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {relatedFinancialProfessionals.map((professional, index) => (
                                    <motion.div
                                        key={professional.id}
                                        whileHover={{ y: -2 }}
                                        className="border border-gray-200 bg-gray-50 overflow-hidden group cursor-pointer rounded-lg"
                                    >
                                        <Link to={`/financial-experts/${professional.slug}`}>
                                            <div
                                                className="h-24 bg-cover bg-center relative"
                                                style={{ backgroundImage: `url(${professional.image})` }}
                                            >
                                                <div className="absolute inset-0 bg-black/20"></div>
                                                <div className="absolute bottom-2 left-2 text-white">
                                                    <h4 className="font-bold text-sm">{professional.name}</h4>
                                                    <p className="text-gray-200 text-xs">{professional.followers}</p>
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 text-xs font-semibold mb-1">
                                                    {professional.category}
                                                </span>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-600 text-xs">View Profile</span>
                                                    <ArrowRight className="w-3 h-3 text-yellow-400 group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Right Column - Sticky Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-8">
                            {/* Social Media Section */}
                            <div className="bg-white shadow-lg border border-gray-200 p-4 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Connect for Financial Insights</h3>
                                <p className="text-gray-600 text-xs mb-3">
                                    Follow for expert financial advice, investment strategies, and wealth management tips.
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
                                            <span className="mt-1 font-semibold">{social.platform}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Financial Insights Section */}
                            <div className="bg-white shadow-lg border border-gray-200 p-4 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Financial Insights</h3>
                                <div className="space-y-3">
                                    {financialInsights.map((post, index) => (
                                        <motion.div
                                            key={post.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="border-b border-gray-200 pb-3 last:border-b-0 last:pb-0 group cursor-pointer"
                                        >
                                            <Link to={`/financial-insights/${post.slug}`}>
                                                <div className="flex items-start gap-2">
                                                    <div
                                                        className="w-12 h-12 bg-cover bg-center flex-shrink-0 rounded"
                                                        style={{ backgroundImage: `url(${post.image})` }}
                                                    ></div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-gray-900 group-hover:text-yellow-400 transition-colors leading-tight mb-1 text-xs">
                                                            {post.title}
                                                        </h4>
                                                        <p className="text-gray-600 text-xs mb-1 leading-relaxed">
                                                            {post.excerpt}
                                                        </p>
                                                        <div className="flex items-center gap-1 text-xs text-gray-500">
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
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter Signup with Web3Forms */}
                            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 text-white">
                                <h3 className="text-lg font-bold mb-2">Financial Updates</h3>
                                <p className="text-yellow-100 text-xs mb-3">
                                    Get expert financial insights and investment opportunities directly in your inbox.
                                </p>

                                {isSubscribed ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-3"
                                    >
                                        <CheckCircle2 className="w-8 h-8 text-yellow-300 mx-auto mb-1" />
                                        <p className="text-yellow-100 font-semibold text-sm">
                                            Thank you for subscribing!
                                        </p>
                                        <p className="text-yellow-200 text-xs mt-1">
                                            You'll receive our latest financial insights soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full px-3 py-2 bg-white text-gray-900 placeholder-gray-500 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-300"
                                        />
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gray-900 text-white py-2 font-semibold hover:bg-gray-800 transition-colors text-xs disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Subscribing...
                                                </>
                                            ) : (
                                                <>
                                                    <Mail className="w-3 h-3" />
                                                    Subscribe Now
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>

                            {/* Footer Note */}
                            <div className="text-center text-gray-500 text-xs mt-4 p-3 bg-white border border-gray-200">
                                <p>The financial advice and insights provided are for educational purposes. Consult with a qualified financial advisor before making investment decisions.</p>
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

export default ZakkiFinancialExpe;