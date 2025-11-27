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
    Volume2,
    VolumeX
} from "lucide-react";

const MilindNikamPage = () => {
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
        formData.append('subject', 'New Newsletter Subscription - Milind Nikam Page');
        formData.append('message', `New newsletter subscription from: ${email}`);
        formData.append('from_name', 'Milind Nikam Page Subscriber');

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
        image: images.milindnikam,
        readTime: "6 min read",
        views: "120K+",
        social: {
            youtube: "https://youtu.be/Tf7ycC2GYJg",
            instagram: "https://www.instagram.com/reel/DRGgmQ1k6Kq",
            facebook: "https://www.facebook.com/reel/878227551310200"
        },
        slug: "milind-nikam",
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

    // YouTube Videos Gallery - Mix of Long and Short Videos
    const youtubeVideos = [
        {
            id: 1,
            type: "youtube",
            videoId: "WisSpLINvl0",
            alt: "Milind Nikam Real Estate Advice",
            title: "25+ Years Real Estate Experience - Complete Guide",
            description: "Watch Mr. Milind Nikam share his 25+ years of real estate expertise and investment strategies.",
            category: "Expert Advice",
            date: "Nov 2025",
            duration: "15:30",
            views: "45K+",
            videoType: "short",
            thumbnail: `https://img.youtube.com/vi/Tf7ycC2GYJg/hqdefault.jpg`
        },
        {
            id: 2,
            type: "youtube",
            videoId: "Tf7ycC2GYJg",
            alt: "Quick Property Tips",
            title: "Milind Nikam Promoting Project Mount Castle by Majestic Realties—A Real Estate Giant in Pune",
            description: "Milind Nikam shares his expert insights on Majestic Realties’ project Mount Castle — a sophisticated collaboration blending authority, luxury, and unmatched real estate excellence.",
            category: "Quick Tips",
            date: "Dec 2024",
            duration: "4:45",
            views: "28K+",
            videoType: "long",
            thumbnail: `https://img.youtube.com/vi/abc123short/hqdefault.jpg`
        },
    ];

    // Filter videos by type
    const longVideos = youtubeVideos.filter(video => video.videoType === "long");
    const shortVideos = youtubeVideos.filter(video => video.videoType === "short");

    // Collaboration Media - Mixed Images and Videos
    const collaborationMedia = [
        {
            id: 1,
            type: "image",
            src: images.Nigam3,
            poster: images.Nigam3,
            alt: "First Influencer Collaboration Meeting",
            title: "Our First Collaboration With Real Estate Influencer",
            description: "Highlight moments from our first meeting with a leading real estate influencer discussing strategies and future project promotions.",
            category: "Influencer Collaboration",
            date: "Dec 2024",
        },
        {
            id: 2,
            type: "image",
            src: images.Nigam2,
            alt: "Influencer Strategy Discussion",
            title: "Real Estate Influencer Strategy Session",
            description: "Snapshot from our collaborative session planning upcoming real estate content and marketing ideas.",
            category: "Influencer Meeting",
            date: "Dec 2024",
        },
        {
            id: 3,
            type: "image",
            src: images.Nigam11,
            poster: images.Nigam11,
            alt: "Real Estate Collaboration Content Shoot",
            title: "Content Shoot With Real Estate Expert",
            description: "Behind-the-scenes from our first content shoot with a top real estate influencer for upcoming promotional series.",
            category: "Influencer Collaboration",
            date: "Dec 2024",
        },
    ];
    // Collaboration Posts
    const collaborationPosts = [
        {
            id: 1,
            title: "Majestic Realties Collaboration with Pune’s No.1 Real Estate Influencer Milind Nikam",
            excerpt:
                "Milind Nikam and Majestic Realties — a powerful collaboration where two industry tycoons come together in one iconic frame, redefining class, influence, and real estate excellence.",
            category: "Influencer Collaboration",
            date: "Nov 25, 2025",
            views: "120K+",
            readTime: "5 min read",
            image: images.milindnikam,
            partner: "Mr. Milind Nikam",
            status: "Active"
        },
        {
            id: 2,
            title: "Milind Nikam Promoting Project Mount Castle by Majestic Realties—A Real Estate Giant in Pune",
            excerpt:
                "Milind Nikam shares his expert insights on Majestic Realties’ project Mount Castle — a sophisticated collaboration blending authority, luxury, and unmatched real estate excellence.",
            category: "Influencer Promotion",
            date: "Dec 01, 2025",
            views: "98.5K",
            readTime: "4 min read",
            image: images.Nigam2,
            partner: "Mr. Milind Nikam",
            status: "Active"
        }
    ];



    // Related Influencers
    const relatedInfluencers = [
        {
            id: 1,
            name: "Zakki Khan",
            category: "Real Estate Director",
            followers: "95K+ Readers",
            image: images.zakki_khan2,
            slug: "zakki-khan"
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

    // Popular Voices Data
    const popularPosts = [
        {
            id: 1,
            title: "25+ Years of Real Estate Excellence – Mr. Milind Nikam's Journey",
            excerpt: "Discover how Pune's leading Property Influencer built a trusted platform",
            category: "Real Estate",
            date: "Nov 25, 2025",
            views: "45.2K",
            readTime: "6 min read",
            image: images.milindnikam,
            slug: "milind-nikam-journey"
        },
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

    // Carousel Navigation
    const nextPhoto = () => {
        setActivePhoto((prev) => (prev + 1) % youtubeVideos.length);
        setIsPlaying(true);
    };

    const prevPhoto = () => {
        setActivePhoto((prev) => (prev - 1 + youtubeVideos.length) % youtubeVideos.length);
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
                        {/* Hero Section - Full Width Influencer Image */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <div className="bg-white shadow-lg border border-gray-200 overflow-hidden">
                                <div
                                    className="h-96 bg-no-repeat bg-cover bg-top relative"
                                    style={{ backgroundImage: `url(${milindNikamData.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/40"></div>
                                    <div className="absolute top-6 left-6">
                                        <span className="inline-block bg-yellow-500 text-white px-4 py-2 text-lg font-bold shadow-lg">
                                            Featured Influencer
                                        </span>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6 text-white">
                                        <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 text-lg font-semibold mb-3">
                                            {milindNikamData.category}
                                        </span>
                                        <h1 className="text-4xl font-bold mb-2">
                                            {milindNikamData.name}
                                        </h1>
                                        <p className="text-yellow-100 text-xl">
                                            {milindNikamData.subtitle}
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
                                        {milindNikamData.title}
                                    </h2>

                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                        <span className="font-semibold text-yellow-600 bg-yellow-50 px-3 py-1">
                                            {milindNikamData.category}
                                        </span>
                                        <span>By {milindNikamData.author}</span>
                                        <span>•</span>
                                        <span>{milindNikamData.date}</span>
                                    </div>

                                    <p className="text-gray-700 mb-8 leading-relaxed text-base">
                                        {milindNikamData.excerpt}
                                    </p>

                                    {/* Achievements Grid */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <Award className="w-6 h-6 text-yellow-500" />
                                            Key Achievements
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {milindNikamData.achievements.map((achievement, index) => (
                                                <div key={index} className="flex items-center gap-3 text-sm text-gray-700 bg-yellow-50 p-3 border border-yellow-200">
                                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                    <span className="font-medium">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Specialties */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <Building className="w-6 h-6 text-yellow-500" />
                                            Areas of Expertise
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {milindNikamData.specialties.map((specialty, index) => (
                                                <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-semibold border border-yellow-300">
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2">
                                            {milindNikamData.social && Object.entries(milindNikamData.social).map(([platform, url]) => (
                                                <SocialIcon key={platform} platform={platform} url={url} />
                                            ))}
                                        </div>
                                    </div>
                                    <Link to="/contact" className="flex items-center gap-2 text-yellow-600 font-semibold text-sm hover:text-yellow-700 hover:gap-3 transition-all">
                                        <span>Contact for Consultation</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.section>

                        {/* YouTube Videos Gallery Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="bg-white shadow-lg border border-gray-200 p-6 mb-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Youtube className="w-5 h-5 text-red-500" />
                                YouTube Content Gallery
                            </h3>

                            {/* Main Carousel */}
                            <div className="relative mb-8">
                                <div className="h-96 bg-gray-900 relative overflow-hidden rounded-lg">
                                    {renderMediaContent(youtubeVideos[activePhoto])}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`inline-block px-2 py-1 text-xs font-semibold ${youtubeVideos[activePhoto].videoType === 'short' ? 'bg-purple-500' : 'bg-red-500'
                                                }`}>
                                                {youtubeVideos[activePhoto].videoType === 'short' ? 'SHORT' : 'LONG FORM'}
                                            </span>
                                        </div>
                                        <h4 className="text-2xl font-bold mb-2">{youtubeVideos[activePhoto].title}</h4>
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
                                        Long Form Videos
                                        <span className="text-sm font-normal text-gray-500 ml-2">({longVideos.length} videos)</span>
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {longVideos.map((video, index) => (
                                            <motion.div
                                                key={video.id}
                                                whileHover={{ scale: 1.02 }}
                                                className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                                                onClick={() => {
                                                    setActivePhoto(youtubeVideos.findIndex(v => v.id === video.id));
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
                                        Short Videos
                                        <span className="text-sm font-normal text-gray-500 ml-2">({shortVideos.length} videos)</span>
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {shortVideos.map((video, index) => (
                                            <motion.div
                                                key={video.id}
                                                whileHover={{ scale: 1.02 }}
                                                className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                                                onClick={() => {
                                                    setActivePhoto(youtubeVideos.findIndex(v => v.id === video.id));
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

                        {/* Collaboration Media Gallery Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="bg-white shadow-lg border border-gray-200 p-6 mb-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <ImageIcon className="w-5 h-5 text-yellow-500" />
                                Collaboration Media Gallery
                            </h3>

                            {/* Main Carousel */}
                            <div className="relative mb-4">
                                <div className="h-80 bg-gray-900 relative overflow-hidden">
                                    {renderMediaContent(collaborationMedia[0])}
                                    <div className="absolute inset-0 bg-black/30"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <span className={`inline-block px-2 py-1 text-xs font-semibold mb-2 ${collaborationMedia[0].category === 'Latest Collaboration'
                                            ? 'bg-green-500'
                                            : collaborationMedia[0].category === 'Recent Collaboration'
                                                ? 'bg-blue-500'
                                                : 'bg-gray-500'
                                            }`}>
                                            {collaborationMedia[0].category}
                                        </span>
                                        <h4 className="text-xl font-bold">{collaborationMedia[0].title}</h4>
                                        <p className="text-yellow-100 text-sm">{collaborationMedia[0].description}</p>
                                        <div className="flex items-center gap-3 mt-1 text-xs">
                                            <span>{collaborationMedia[0].date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Thumbnail Grid */}
                            <div className="grid grid-cols-3 gap-3">
                                {collaborationMedia.map((media, index) => (
                                    <motion.div
                                        key={media.id}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="h-24 cursor-pointer transition-all duration-300 overflow-hidden rounded-lg opacity-80 hover:opacity-100"
                                    >
                                        <div className="relative w-full h-full">
                                            {renderMediaContent(media, true)}
                                            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2">
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="font-semibold truncate">
                                                        {media.title.split(' ').slice(0, 3).join(' ')}...
                                                    </span>
                                                    <ImageIcon className="w-3 h-3 flex-shrink-0" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Collaboration Posts Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="bg-white shadow-lg border border-gray-200 p-6 mb-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Users className="w-5 h-5 text-yellow-500" />
                                Latest Collaboration Posts
                            </h3>

                            <div className="space-y-4">
                                {collaborationPosts.map((post, index) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="border border-gray-200 p-4 hover:shadow-md transition-shadow rounded-lg"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div
                                                className="w-20 h-20 bg-cover bg-center flex-shrink-0 rounded"
                                                style={{ backgroundImage: `url(${post.image})` }}
                                            ></div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className={`px-2 py-0.5 text-xs font-semibold ${post.category === 'Latest Collaboration'
                                                        ? 'bg-green-100 text-green-800'
                                                        : post.category === 'Recent Collaboration'
                                                            ? 'bg-blue-100 text-blue-800'
                                                            : 'bg-gray-100 text-gray-800'
                                                        }`}>
                                                        {post.category}
                                                    </span>
                                                    <span className={`px-2 py-0.5 text-xs font-semibold ${post.status === 'Completed'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                        {post.status}
                                                    </span>
                                                </div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                                                    {post.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                                        <span className="font-medium">Partner: {post.partner}</span>
                                                        <span>•</span>
                                                        <span>{post.date}</span>
                                                        <span>•</span>
                                                        <span className="flex items-center gap-1">
                                                            <Eye className="w-3 h-3" />
                                                            {post.views}
                                                        </span>
                                                    </div>
                                                    <a
                                                        href="https://www.instagram.com/majesticrealtiespune"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-yellow-600 font-semibold text-xs hover:text-yellow-700 flex items-center gap-1"
                                                    >
                                                        <span>See More</span>
                                                        <ArrowRight className="w-3 h-3" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Related Influencers Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="bg-white shadow-lg border border-gray-200 p-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Users className="w-5 h-5 text-yellow-500" />
                                Related Influencers
                            </h3>

                            <div className="grid grid-cols-3 gap-4">
                                {relatedInfluencers.map((influencer, index) => (
                                    <motion.div
                                        key={influencer.id}
                                        whileHover={{ y: -2 }}
                                        className="border border-gray-200 bg-gray-50 overflow-hidden group cursor-pointer rounded-lg"
                                    >
                                        <Link to={`/real-estate-influence/${influencer.slug}`}>
                                            <div
                                                className="h-24 bg-cover bg-center relative"
                                                style={{ backgroundImage: `url(${influencer.image})` }}
                                            >
                                                <div className="absolute inset-0 bg-black/20"></div>
                                                <div className="absolute bottom-2 left-2 text-white">
                                                    <h4 className="font-bold text-sm">{influencer.name}</h4>
                                                    <p className="text-gray-200 text-xs">{influencer.followers}</p>
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <span className="inline-block bg-yellow-100 text-yellow-800 px-1.5 py-0.5 text-xs font-semibold mb-1">
                                                    {influencer.category}
                                                </span>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-600 text-xs">View Profile</span>
                                                    <ArrowRight className="w-3 h-3 text-yellow-600 group-hover:translate-x-0.5 transition-transform" />
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
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Connect With Us</h3>
                                <p className="text-gray-600 text-xs mb-3">
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
                                            <span className="mt-1 font-semibold">{social.platform}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Popular Voices Section */}
                            <div className="bg-white shadow-lg border border-gray-200 p-4 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Popular Voices</h3>
                                <div className="space-y-3">
                                    {popularPosts.map((post, index) => (
                                        <motion.div
                                            key={post.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="border-b border-gray-200 pb-3 last:border-b-0 last:pb-0 group cursor-pointer"
                                        >
                                            <Link to={`/real-estate-influence/${post.slug}`}>
                                                <div className="flex items-start gap-2">
                                                    <div
                                                        className="w-12 h-12 bg-cover bg-center flex-shrink-0 rounded"
                                                        style={{ backgroundImage: `url(${post.image})` }}
                                                    ></div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight mb-1 text-xs">
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
                            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 text-white">
                                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                                <p className="text-yellow-100 text-xs mb-3">
                                    Get the latest influencer collaborations and property insights delivered to your inbox.
                                </p>

                                {isSubscribed ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-3"
                                    >
                                        <CheckCircle2 className="w-8 h-8 text-green-300 mx-auto mb-1" />
                                        <p className="text-yellow-100 font-semibold text-sm">
                                            Thank you for subscribing!
                                        </p>
                                        <p className="text-yellow-200 text-xs mt-1">
                                            You'll receive our latest updates soon.
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
                                <p>The views expressed in the articles and interviews are of the writer and the interviewee and not of Majestic Realties.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-12 bg-gradient-to-r from-yellow-900 to-yellow-700 text-white">
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
                                    className="bg-yellow-500 text-gray-900 px-6 py-3 font-bold text-sm hover:bg-yellow-400 transition-colors inline-flex items-center gap-2"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Become a Partner
                                </motion.button>
                            </Link>

                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent text-white px-6 py-3 font-bold text-sm border-2 border-white hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center gap-2"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Schedule Meeting
                                </motion.button>
                            </Link>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-yellow-200">
                            <div className="flex items-center justify-center gap-1">
                                <CheckCircle className="w-4 h-4" />
                                50+ Influencer Partners
                            </div>
                            <div className="flex items-center justify-center gap-1">
                                <CheckCircle className="w-4 h-4" />
                                10M+ Combined Reach
                            </div>
                            <div className="flex items-center justify-center gap-1">
                                <CheckCircle className="w-4 h-4" />
                                85% Engagement Rate
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default MilindNikamPage;