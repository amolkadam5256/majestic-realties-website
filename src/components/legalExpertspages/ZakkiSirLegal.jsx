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
    Scale,
    Gavel,
    FileText,
    Landmark
} from "lucide-react";

const ZakkiSirLegal = () => {
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
        formData.append('subject', 'New Newsletter Subscription - Zakki Khan Legal Page');
        formData.append('message', `New newsletter subscription from: ${email}`);
        formData.append('from_name', 'Zakki Khan Legal Page Subscriber');

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

    // Zakki Khan Legal Data
    const zakkiKhanData = {
        id: 2,
        name: "Zakki Khan",
        title: "Real Estate Legal Compliance & Regulatory Expert",
        subtitle: "Legal Compliance Director | RERA Expert | Property Law Specialist",
        category: "Legal Compliance Director",
        author: "Majestic Realties Legal Team",
        date: "November 26, 2025",
        excerpt: "Zakki Khan brings extensive expertise in real estate legal compliance, RERA regulations, and property law. With deep understanding of Maharashtra Real Estate Regulatory Authority guidelines, he ensures all property transactions are legally sound and compliant.",
        image: images.Zakki_Sir,
        readTime: "6 min read",
        views: "85K+",
        social: {
            linkedin: "https://www.linkedin.com/in/zakkikhan/",
            website: "https://www.majesticrealties.com"
        },
        slug: "zakki-khan-legal",
        achievements: [
            "RERA Compliance Expert",
            "Property Documentation Specialist",
            "Legal Due Diligence",
            "Regulatory Advisory"
        ],
        specialties: [
            "RERA Regulations & Compliance",
            "Property Title Verification",
            "Legal Documentation",
            "Construction Law",
            "Consumer Protection in Real Estate"
        ],
        description: `Zakki Khan specializes in real estate legal compliance and regulatory frameworks, ensuring all property transactions adhere to the highest legal standards.

With expertise in RERA regulations, property documentation, and legal due diligence, he provides comprehensive legal guidance to home buyers, investors, and developers.

His focus is on creating transparent, legally compliant real estate transactions that protect all stakeholders and build trust in the property market.`
    };

    // Real Estate Legal Gallery - Legal Education Videos
    const professionalGallery = [
        {
            id: 1,
            type: "youtube",
            videoId: "0FVK9ZHWxDI",
            alt: "RERA Regulations Complete Guide",
            title: "Complete RERA Regulations Guide for Home Buyers",
            description: "Understanding RERA compliance, mandatory registration, financial transparency, and consumer protection in real estate.",
            category: "Legal Education",
            date: "Nov 2025",
            duration: "18:30",
            views: "35K+",
            videoType: "short",
            thumbnail: `https://img.youtube.com/vi/0FVK9ZHWxDI/hqdefault.jpg`
        },
        {
            id: 2,
            type: "youtube",
            videoId: "p4uDyuHiMV8",
            alt: "Zakki Khan Real Estate Journey Podcast",
            title: "Plot Gyan Podcast Episode 1: The Journey of Zakki Khan",
            description: "In this first episode of the Plot Gyan Podcast, we dive into the journey of Mr. Zakki Khan, Director & Founder of Majestic Realties. Zakki ji shares how his journey began, challenges he faced, his first deal experience, and the turning points that shaped his career. A candid and inspiring conversation about facing uncertainty, building resilience, and finding success one step at a time. 🎙️ Hosted by Plot Gyan. #PlotGyanPodcast #ZakkiKhan #RealEstateJourney #Inspiration #MajesticRealties #realestate #fyp #youtubevideos #youtube #plotgyan #investment",
            category: "Podcast",
            date: "Nov 2025",
            duration: "07:00",
            views: "5K+",
            videoType: "long",
            thumbnail: "https://img.youtube.com/vi/p4uDyuHiMV8/hqdefault.jpg"
        }
    ];

    // Filter videos by type
    const shortVideos = professionalGallery.filter(video => video.videoType === "short");
    const longVideos = professionalGallery.filter(video => video.videoType === "long");

    // Legal Compliance Posts
    const collaborationPosts = [
        {
            id: 1,
            title: "RERA Compliance Framework Implementation",
            excerpt: "Developing comprehensive RERA compliance frameworks for real estate developers and ensuring regulatory adherence",
            category: "Legal Compliance",
            date: "Dec 15, 2024",
            views: "22.8K",
            readTime: "4 min read",
            image: images.zakki_khan2,
            partner: "Maharashtra RERA",
            status: "Ongoing"
        },
        {
            id: 2,
            title: "Property Documentation Standardization",
            excerpt: "Creating standardized legal documentation processes to streamline property transactions and reduce legal risks",
            category: "Legal Documentation",
            date: "Nov 28, 2024",
            views: "18.3K",
            readTime: "5 min read",
            image: images.zakki_khan2,
            partner: "Legal Standards Board",
            status: "Completed"
        },
        {
            id: 3,
            title: "Consumer Protection Initiatives",
            excerpt: "Implementing consumer protection measures and dispute resolution mechanisms in real estate transactions",
            category: "Consumer Rights",
            date: "Oct 15, 2024",
            views: "15.7K",
            readTime: "3 min read",
            image: images.zakki_khan2,
            partner: "Consumer Forum",
            status: "Active"
        },
    ];

    // Related Legal Professionals
    const relatedProfessionals = [
        {
            id: 1,
            name: "Milind Nikam",
            category: "Property Influencer",
            followers: "120K+",
            image: images.milindnikam,
            slug: "milind-nikam"
        },
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

    // Popular Legal Insights
    const popularPosts = [
        {
            id: 1,
            title: "Understanding RERA: Complete Guide for Home Buyers",
            excerpt: "Learn how RERA regulations protect home buyers and ensure transparent real estate transactions",
            category: "Legal Education",
            date: "Nov 26, 2025",
            views: "45.2K",
            readTime: "6 min read",
            image: images.zakki_khan2,
            slug: "rera-complete-guide"
        },
        {
            id: 2,
            title: "Property Title Verification: Why It Matters",
            excerpt: "Essential steps for property title verification and avoiding legal disputes in real estate",
            category: "Legal Process",
            date: "Nov 20, 2025",
            views: "32.8K",
            readTime: "5 min read",
            image: images.zakki_khan2,
            slug: "title-verification-guide"
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
        setActivePhoto((prev) => (prev + 1) % professionalGallery.length);
        setIsPlaying(true);
    };

    const prevPhoto = () => {
        setActivePhoto((prev) => (prev - 1 + professionalGallery.length) % professionalGallery.length);
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
                            <span className={`inline-block px-2 py-1 text-xs font-semibold ${media.videoType === 'short' ? 'bg-purple-500' : 'bg-yellow-400'
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
                                    className="h-96 bg-no-repeat bg-cover bg-center relative"
                                    style={{ backgroundImage: `url(${zakkiKhanData.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/40"></div>
                                    <div className="absolute top-6 left-6">
                                        <span className="inline-block bg-yellow-400 text-white px-4 py-2 text-lg font-bold shadow-lg">
                                            Legal Expert
                                        </span>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6 text-white">
                                        <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 text-lg font-semibold mb-3">
                                            {zakkiKhanData.category}
                                        </span>
                                        <h1 className="text-4xl font-bold mb-2">
                                            {zakkiKhanData.name}
                                        </h1>
                                        <p className="text-blue-100 text-xl">
                                            {zakkiKhanData.subtitle}
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
                                        {zakkiKhanData.title}
                                    </h2>

                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                        <span className="font-semibold bg-yellow-400 text-white px-3 py-1">
                                            {zakkiKhanData.category}
                                        </span>
                                        <span>By {zakkiKhanData.author}</span>
                                        <span>•</span>
                                        <span>{zakkiKhanData.date}</span>
                                    </div>

                                    <div className="text-gray-700 mb-8 leading-relaxed text-base space-y-4">
                                        {zakkiKhanData.description.split('\n\n').map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>

                                    {/* Achievements Grid */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <Scale className="w-6 h-6 text-yellow-400" />
                                            Legal Expertise Areas
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {zakkiKhanData.achievements.map((achievement, index) => (
                                                <div key={index} className="flex items-center gap-3 text-sm text-gray-700 bg-yellow-50 p-3 border border-yellow-200">
                                                    <Gavel className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                    <span className="font-medium">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Specialties */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <FileText className="w-6 h-6 text-yellow-400" />
                                            Legal Specializations
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {zakkiKhanData.specialties.map((specialty, index) => (
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
                                                {zakkiKhanData.views}
                                            </span>
                                            <span>{zakkiKhanData.readTime}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {zakkiKhanData.social && Object.entries(zakkiKhanData.social).map(([platform, url]) => (
                                                <SocialIcon key={platform} platform={platform} url={url} />
                                            ))}
                                        </div>
                                    </div>
                                    <Link to="/contact" className="flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:text-yellow-500 hover:gap-3 transition-all">
                                        <span>Legal Consultation</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.section>

                        {/* Real Estate Legal Education Gallery Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="bg-white shadow-lg border border-gray-200 p-6 mb-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Scale className="w-5 h-5 text-yellow-400" />
                                Real Estate Legal Education
                            </h3>

                            {/* Main Carousel */}
                            <div className="relative mb-8">
                                <div className="h-96 bg-gray-900 relative overflow-hidden rounded-lg">
                                    {renderMediaContent(professionalGallery[activePhoto])}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`inline-block px-2 py-1 text-xs font-semibold ${professionalGallery[activePhoto].videoType === 'short' ? 'bg-purple-500' : 'bg-yellow-400'
                                                }`}>
                                                {professionalGallery[activePhoto].videoType === 'short' ? 'SHORT' : 'LONG FORM'}
                                            </span>
                                        </div>
                                        <h4 className="text-2xl font-bold mb-2">{professionalGallery[activePhoto].title}</h4>


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
                                {/* Long Form Videos Section */}
                                {longVideos.length > 0 && (
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <Play className="w-5 h-5 text-yellow-400" />
                                            Long Form Videos
                                            <span className="text-sm font-normal text-gray-500 ml-2">({longVideos.length} videos)</span>
                                        </h4>
                                        <div className="grid grid-cols-1 gap-4">
                                            {longVideos.map((video, index) => (
                                                <motion.div
                                                    key={video.id}
                                                    whileHover={{ scale: 1.02 }}
                                                    className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                                                    onClick={() => {
                                                        setActivePhoto(professionalGallery.findIndex(v => v.id === video.id));
                                                        setIsPlaying(true);
                                                    }}
                                                >
                                                    <div className="flex">
                                                        <div className="w-1/3">
                                                            <div className="relative h-32">
                                                                {renderMediaContent(video, true)}
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                                            </div>
                                                        </div>
                                                        <div className="w-2/3 p-3">
                                                            <h5 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{video.title}</h5>
                                                            <p className="text-gray-600 text-xs mb-2 line-clamp-2">{video.description}</p>
                                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                                <span className="flex items-center gap-1">
                                                                    <Clock className="w-3 h-3" />
                                                                    {video.duration}
                                                                </span>
                                                                <span className="flex items-center gap-1">
                                                                    <Eye className="w-3 h-3" />
                                                                    {video.views}
                                                                </span>
                                                                <span>{video.date}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Short Videos Section */}
                                {shortVideos.length > 0 && (
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <Video className="w-5 h-5 text-purple-500" />
                                            Short Videos
                                            <span className="text-sm font-normal text-gray-500 ml-2">({shortVideos.length} videos)</span>
                                        </h4>
                                        <div className="grid grid-cols-1 gap-4">
                                            {shortVideos.map((video, index) => (
                                                <motion.div
                                                    key={video.id}
                                                    whileHover={{ scale: 1.02 }}
                                                    className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                                                    onClick={() => {
                                                        setActivePhoto(professionalGallery.findIndex(v => v.id === video.id));
                                                        setIsPlaying(true);
                                                    }}
                                                >
                                                    <div className="flex">
                                                        <div className="w-1/3">
                                                            <div className="relative h-32">
                                                                {renderMediaContent(video, true)}
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                                            </div>
                                                        </div>
                                                        <div className="w-2/3 p-3">
                                                            <h5 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{video.title}</h5>
                                                            <p className="text-gray-600 text-xs mb-2 line-clamp-2">{video.description}</p>
                                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                                <span className="flex items-center gap-1">
                                                                    <Clock className="w-3 h-3" />
                                                                    {video.duration}
                                                                </span>
                                                                <span className="flex items-center gap-1">
                                                                    <Eye className="w-3 h-3" />
                                                                    {video.views}
                                                                </span>
                                                                <span>{video.date}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.section>

                        {/* Legal Compliance Initiatives Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="bg-white shadow-lg border border-gray-200 p-6 mb-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Landmark className="w-5 h-5 text-yellow-400" />
                                Legal Compliance Initiatives
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
                                                    <span className={`px-2 py-0.5 text-xs font-semibold ${post.category === 'Legal Compliance'
                                                        ? 'bg-green-100 text-green-800'
                                                        : post.category === 'Legal Documentation'
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : 'bg-purple-100 text-purple-800'
                                                        }`}>
                                                        {post.category}
                                                    </span>
                                                    <span className={`px-2 py-0.5 text-xs font-semibold ${post.status === 'Completed'
                                                        ? 'bg-green-100 text-green-800'
                                                        : post.status === 'Active'
                                                            ? 'bg-yellow-100 text-yellow-800'
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
                                                        href={zakkiKhanData.social.website}
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

                        {/* Related Legal Professionals Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="bg-white shadow-lg border border-gray-200 p-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Users className="w-5 h-5 text-yellow-400" />
                                Legal & Compliance Team
                            </h3>

                            <div className="grid grid-cols-3 gap-4">
                                {relatedProfessionals.map((professional, index) => (
                                    <motion.div
                                        key={professional.id}
                                        whileHover={{ y: -2 }}
                                        className="border border-gray-200 bg-gray-50 overflow-hidden group cursor-pointer rounded-lg"
                                    >
                                        <Link to={`/real-estate-influence/${professional.slug}`}>
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
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Connect With Us</h3>
                                <p className="text-gray-600 text-xs mb-3">
                                    Follow Majestic Realties for latest legal updates and property compliance insights.
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

                            {/* Popular Legal Insights Section */}
                            <div className="bg-white shadow-lg border border-gray-200 p-4 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Legal Insights</h3>
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
                                <h3 className="text-lg font-bold mb-2">Stay Legally Informed</h3>
                                <p className="text-yellow-100 text-xs mb-3">
                                    Get the latest legal updates and property compliance insights delivered to your inbox.
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
                                            You'll receive our latest legal updates soon.
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
                                <p>The legal information provided is for educational purposes only and does not constitute legal advice. Consult with qualified legal professionals for specific legal matters.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-12 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Need <span className="text-yellow-800">Legal Guidance</span> for Your Property?
                        </h2>
                        <p className="text-lg text-yellow-100 mb-6">
                            Get expert legal consultation for property transactions, RERA compliance, and documentation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-yellow-600 text-white px-6 py-3 font-bold text-sm hover:bg-yellow-700 transition-colors inline-flex items-center gap-2"
                                >
                                    <Scale className="w-4 h-4" />
                                    Legal Consultation
                                </motion.button>
                            </Link>

                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent text-white px-6 py-3 font-bold text-sm border-2 border-white hover:bg-white hover:text-yellow-500 transition-colors inline-flex items-center gap-2"
                                >
                                    <FileText className="w-4 h-4" />
                                    Document Review
                                </motion.button>
                            </Link>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-yellow-200">
                            <div className="flex items-center justify-center gap-1">
                                <CheckCircle className="w-4 h-4" />
                                RERA Compliance
                            </div>
                            <div className="flex items-center justify-center gap-1">
                                <CheckCircle className="w-4 h-4" />
                                Legal Documentation
                            </div>
                            <div className="flex items-center justify-center gap-1">
                                <CheckCircle className="w-4 h-4" />
                                Consumer Protection
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ZakkiSirLegal;