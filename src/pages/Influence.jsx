import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Icons - Using only available Lucide React icons
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
    Heart
} from "lucide-react";

const Influence = () => {
    const [activeTab, setActiveTab] = useState("influencers");
    const [selectedInfluencer, setSelectedInfluencer] = useState(null);

    const influencers = [
        {
            id: 1,
            name: "Rohan Property Guide",
            category: "YouTube Influencer",
            followers: "2.5M+",
            platform: "YouTube",
            specialty: "Luxury Villas & Plots",
            engagement: "4.8%",
            location: "Mumbai, Pune",
            image: "/images/influencer1.jpg",
            social: {
                youtube: "https://youtube.com/rohanproperty",
                instagram: "https://instagram.com/rohanproperty",
                facebook: "https://facebook.com/rohanproperty",
                twitter: "https://twitter.com/rohanproperty",
                linkedin: "https://linkedin.com/in/rohanproperty"
            },
            previousCollabs: [
                {
                    project: "Royal Vista",
                    type: "Project Launch",
                    date: "2024-01-15",
                    views: "2.3M",
                    engagement: "45K",
                    link: "/projects/royal_vista"
                },
                {
                    project: "Mount Castle",
                    type: "Farmhouse Campaign",
                    date: "2023-11-20",
                    views: "1.8M",
                    engagement: "38K",
                    link: "/projects/mount_castle"
                }
            ],
            rates: "₹2-5 Lacs per campaign",
            contentTypes: ["Property Tours", "Investment Guides", "Project Reviews"],
            rating: 4.9,
            projectsCompleted: 47,
            verified: true
        },
        
    ];

    const pastCollaborations = [
        {
            id: 1,
            project: "Royal Vista NA Plots",
            influencer: "Rohan Property Guide",
            type: "YouTube Series",
            date: "January 2024",
            platform: "YouTube",
            metrics: {
                views: "2.3M",
                engagement: "45K",
                leads: "320",
                conversions: "48"
            },
            content: [
                {
                    type: "video",
                    platform: "YouTube",
                    title: "Royal Vista Project Tour - Pondhe, Maharashtra",
                    url: "https://youtube.com/watch?v=royalvista",
                    views: "1.2M",
                    likes: "45K"
                },
                {
                    type: "reel",
                    platform: "Instagram",
                    title: "Site Location Reveal - Royal Vista",
                    url: "https://instagram.com/p/royalvista",
                    views: "890K",
                    likes: "32K"
                }
            ],
            projectLink: "/projects/royal_vista"
        },
        
    ];

    const collaborationBenefits = [
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Increased Brand Visibility",
            description: "Reach millions of potential buyers through trusted influencer networks for Majestic Realties projects"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Targeted Audience Reach",
            description: "Connect with specific demographic groups interested in farmhouse plots and premium real estate"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Credibility & Trust",
            description: "Leverage influencer credibility to build trust in Majestic Realties projects since 2014"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Multi-Platform Presence",
            description: "Amplify your message across YouTube, Instagram, Facebook for our Pune properties"
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: "High ROI Campaigns",
            description: "Proven track record of generating quality leads and conversions for our NA plots"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Quick Market Penetration",
            description: "Accelerate project launches and sales through influencer marketing"
        }
    ];

    const collaborationProcess = [
        {
            step: "01",
            title: "Strategy Planning",
            description: "Define campaign goals for your Majestic Realties project and key performance indicators",
            icon: <BarChart3 className="w-6 h-6" />
        },
        {
            step: "02",
            title: "Influencer Selection",
            description: "Choose the perfect influencers based on your project requirements at Majestic Realties",
            icon: <Users className="w-6 h-6" />
        },
        {
            step: "03",
            title: "Content Creation",
            description: "Collaborate on authentic content that showcases your premium plots and farmhouses",
            icon: <Video className="w-6 h-6" />
        },
        {
            step: "04",
            title: "Campaign Launch",
            description: "Execute multi-platform campaign with optimized posting schedule",
            icon: <Rocket className="w-6 h-6" />
        },
        {
            step: "05",
            title: "Performance Tracking",
            description: "Monitor engagement, leads, and ROI with detailed analytics",
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            step: "06",
            title: "Results Analysis",
            description: "Review campaign performance and plan future collaborations",
            icon: <Award className="w-6 h-6" />
        }
    ];

    const successStories = [
        {
            project: "Mount Castle Launch",
            influencer: "Rohan Property Guide",
            results: "250+ qualified leads in first week",
            metrics: "4.5M impressions, 12% engagement rate",
            icon: <Building className="w-8 h-8" />,
            revenue: "₹18.2 Cr",
            projectLink: "/projects/mount_castle"
        },
        {
            project: "Royal Vista Pre-launch",
            influencer: "Property With Priya",
            results: "98% pre-booking within 48 hours",
            metrics: "2.8M reach, 8.2% conversion rate",
            icon: <Home className="w-8 h-8" />,
            revenue: "₹12.7 Cr",
            projectLink: "/projects/royal_vista"
        },
        {
            project: "Royal Casa Campaign",
            influencer: "Investment Guru Ankit",
            results: "₹5.2 Cr sales generated",
            metrics: "3.1M views, 15% lead generation",
            icon: <MapPin className="w-8 h-8" />,
            revenue: "₹5.2 Cr",
            projectLink: "/projects/royal_casa"
        }
    ];

    // Social Icon Component
    const SocialIcon = ({ platform, url }) => {
        const icons = {
            youtube: <Youtube className="w-5 h-5" />,
            instagram: <Instagram className="w-5 h-5" />,
            facebook: <Facebook className="w-5 h-5" />,
            linkedin: <Linkedin className="w-5 h-5" />,
            twitter: <Twitter className="w-5 h-5" />
        };

        const colors = {
            youtube: "hover:bg-red-500 hover:border-red-500 hover:text-white",
            instagram: "hover:bg-pink-500 hover:border-pink-500 hover:text-white",
            facebook: "hover:bg-blue-600 hover:border-blue-600 hover:text-white",
            linkedin: "hover:bg-blue-700 hover:border-blue-700 hover:text-white",
            twitter: "hover:bg-blue-400 hover:border-blue-400 hover:text-white"
        };

        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 bg-gray-100 border-2 border-transparent  transition-all duration-300 text-gray-600 ${colors[platform] || 'hover:bg-gray-600 hover:border-gray-600 hover:text-white'}`}
            >
                {icons[platform] || <Globe className="w-5 h-5" />}
            </a>
        );
    };

    // Platform Icon Component
    const PlatformIcon = ({ platform, className = "w-4 h-4" }) => {
        const icons = {
            youtube: <Youtube className={className} />,
            instagram: <Instagram className={className} />,
            facebook: <Facebook className={className} />,
            linkedin: <Linkedin className={className} />,
            twitter: <Twitter className={className} />
        };

        return icons[platform.toLowerCase()] || <Globe className={className} />;
    };

    // Content Type Icon Component
    const ContentTypeIcon = ({ type }) => {
        const icons = {
            video: <Video className="w-4 h-4" />,
            reel: <Play className="w-4 h-4" />,
            story: <Image className="w-4 h-4" />,
            carousel: <FileText className="w-4 h-4" />
        };

        return icons[type] || <FileText className="w-4 h-4" />;
    };

    // Scroll to section function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700 text-white py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-600/20  blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-yellow-600/20  blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30  px-6 py-2 inline-flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                <span className="text-sm font-medium">Majestic Realties - Since 2014</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Majestic Realties <span className="text-yellow-400">Influencer</span> Collaborations
                        </h1>
                        <p className="text-xl md:text-2xl text-yellow-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Amplify your property sales with India's top real estate influencers.
                            Reach millions of potential buyers through trusted voices for our premium farmhouse & bungalow plots.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-yellow-500 text-gray-900 px-8 py-4 font-bold text-lg  hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 shadow-lg"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Start Collaboration
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-bold text-lg  hover:bg-white/20 transition-colors inline-flex items-center gap-2"
                                onClick={() => scrollToSection('past-collaborations')}
                            >
                                <Award className="w-5 h-5" />
                                View Our Success Stories
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 to-white"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: "320+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
                            { number: "7+", label: "Projects Delivered", icon: <Award className="w-8 h-8" /> },
                            { number: "₹85Cr+", label: "Sales Generated", icon: <DollarSign className="w-8 h-8" /> },
                            { number: "11+", label: "Years of Excellence", icon: <TrendingUp className="w-8 h-8" /> }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 bg-white  shadow-lg border border-gray-100"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 bg-yellow-100 text-yellow-600 ">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Collaborations Section */}
            <section id="past-collaborations" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Majestic Realties <span className="text-yellow-600">Success Stories</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Successful influencer campaigns that drove real results for our premium projects in Pune
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {pastCollaborations.map((collab, index) => (
                            <motion.div
                                key={collab.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white  shadow-lg border border-gray-200 overflow-hidden group"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                                                {collab.project}
                                            </h3>
                                            <p className="text-yellow-600 font-semibold">{collab.influencer}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Clock className="w-4 h-4" />
                                            {collab.date}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <PlatformIcon platform={collab.platform} />
                                            {collab.platform}
                                        </div>
                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium">
                                            {collab.type}
                                        </span>
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50">
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-gray-900">{collab.metrics.views}</div>
                                            <div className="text-xs text-gray-500">Views</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-gray-900">{collab.metrics.engagement}</div>
                                            <div className="text-xs text-gray-500">Engagement</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-green-600">{collab.metrics.leads}</div>
                                            <div className="text-xs text-gray-500">Leads</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-green-600">{collab.metrics.conversions}</div>
                                            <div className="text-xs text-gray-500">Conversions</div>
                                        </div>
                                    </div>

                                    {/* Content Links */}
                                    <div className="space-y-3 mb-6">
                                        <h4 className="font-semibold text-gray-900">Campaign Content:</h4>
                                        {collab.content.map((item, idx) => (
                                            <a
                                                key={idx}
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-3 bg-gray-50  hover:bg-yellow-50 transition-colors group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <ContentTypeIcon type={item.type} />
                                                    <div>
                                                        <div className="font-medium text-gray-900 group-hover:text-yellow-600">
                                                            {item.title}
                                                        </div>
                                                        <div className="flex items-center gap-4 text-xs text-gray-500">
                                                            <span className="flex items-center gap-1">
                                                                <Eye className="w-3 h-3" />
                                                                {item.views}
                                                            </span>
                                                            {item.likes && (
                                                                <span className="flex items-center gap-1">
                                                                    <ThumbsUp className="w-3 h-3" />
                                                                    {item.likes}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-yellow-600" />
                                            </a>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <Link
                                            to={collab.projectLink}
                                            className="flex-1 bg-yellow-600 text-white py-2 px-4  hover:bg-yellow-700 transition-colors text-center font-semibold inline-flex items-center justify-center gap-2"
                                        >
                                            View Project
                                            <ExternalLink className="w-4 h-4" />
                                        </Link>
                                        <button className="px-4 py-2 border border-gray-300  hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                                            <Share2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Collaborate with <span className="text-yellow-600">Majestic Realties</span>?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            "The best investment on earth is earth" - Join us in promoting premium farmhouse & bungalow plots
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {collaborationBenefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8  shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
                            >
                                <div className="p-3 bg-yellow-100 text-yellow-600  w-fit mb-6 group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Influencers Showcase */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-yellow-600">Trusted Influencer Partners</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Handpicked real estate influencers who understand the value of premium plots and farmhouse investments
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                        {influencers.map((influencer) => (
                            <motion.div
                                key={influencer.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white  shadow-lg hover:shadow-2xl transition-all border border-gray-200 overflow-hidden group"
                            >
                                <div className="relative">
                                    <div className="h-48 bg-gradient-to-br from-yellow-500 to-yellow-600 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/10"></div>
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-white/90 backdrop-blur-sm  px-3 py-1 inline-flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm font-bold text-gray-900">{influencer.rating}</span>
                                            </div>
                                        </div>
                                        {influencer.verified && (
                                            <div className="absolute top-4 left-4">
                                                <div className="bg-yellow-500 text-white  p-1">
                                                    <CheckCircle className="w-4 h-4" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute -bottom-6 left-6">
                                        <div className="w-16 h-16 bg-white border-4 border-white  shadow-lg flex items-center justify-center">
                                            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500  flex items-center justify-center text-white font-bold text-lg">
                                                {influencer.name.charAt(0)}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 mt-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{influencer.name}</h3>
                                            <p className="text-yellow-600 font-semibold mb-2">{influencer.category}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-500">Projects</div>
                                            <div className="font-bold text-gray-900">{influencer.projectsCompleted}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-600 flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                Followers:
                                            </span>
                                            <span className="font-semibold">{influencer.followers}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-600">Engagement:</span>
                                            <span className="font-semibold text-green-600 flex items-center gap-1">
                                                <TrendingUp className="w-4 h-4" />
                                                {influencer.engagement}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-600 flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                Location:
                                            </span>
                                            <span className="font-semibold">{influencer.location}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-600">Rates:</span>
                                            <span className="font-semibold text-yellow-600">{influencer.rates}</span>
                                        </div>
                                    </div>

                                    {/* Social Media Links */}
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex space-x-2">
                                            {Object.entries(influencer.social).map(([platform, url]) => (
                                                <SocialIcon key={platform} platform={platform} url={url} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Past Collaborations Preview */}
                                    {influencer.previousCollabs && influencer.previousCollabs.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Past Collaborations:</h4>
                                            <div className="space-y-2">
                                                {influencer.previousCollabs.slice(0, 2).map((collab, index) => (
                                                    <div key={index} className="flex items-center justify-between text-xs">
                                                        <span className="text-gray-600">{collab.project}</span>
                                                        <Link
                                                            to={collab.link}
                                                            className="text-yellow-600 hover:text-yellow-700 font-medium"
                                                        >
                                                            View →
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setSelectedInfluencer(influencer)}
                                        className="w-full bg-yellow-600 text-white py-3 font-semibold  hover:bg-yellow-700 transition-colors inline-flex items-center justify-center gap-2 group"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        Collaborate Now
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Majestic Realties <span className="text-yellow-600">Success Stories</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real results from our influencer collaboration campaigns for premium plots and farmhouses
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {successStories.map((story, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8  border border-yellow-200 group"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 bg-yellow-100 text-yellow-600 ">
                                        {story.icon}
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-600">Revenue Generated</div>
                                        <div className="text-2xl font-bold text-green-600">{story.revenue}</div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{story.project}</h3>
                                <p className="text-gray-600 mb-4 flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    <strong>Influencer:</strong> {story.influencer}
                                </p>
                                <div className="bg-green-50 border border-green-200  p-4 mb-4">
                                    <p className="text-green-700 font-semibold flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" />
                                        {story.results}
                                    </p>
                                </div>
                                <p className="text-sm text-gray-500 bg-white/50 p-3 mb-4">{story.metrics}</p>
                                <Link
                                    to={story.projectLink}
                                    className="w-full bg-yellow-600 text-white py-2 hover:bg-yellow-700 transition-colors text-center font-semibold inline-flex items-center justify-center gap-2"
                                >
                                    View Project Details
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Collaboration Process */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-yellow-600">Collaboration Process</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Simple, transparent process for successful influencer partnerships with Majestic Realties
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {collaborationProcess.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white p-8  shadow-lg border border-gray-100 text-center group"
                            >
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-yellow-600 text-white text-xl font-bold flex items-center justify-center mx-auto  group-hover:scale-110 transition-transform">
                                        {step.step}
                                    </div>
                                    <div className="absolute -top-2 -right-2 p-2 bg-yellow-100 text-yellow-600 ">
                                        {step.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Real Estate Focus */}
            <section className="py-20 bg-gradient-to-r from-yellow-900 to-yellow-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Sell Properties <span className="text-yellow-400">Faster</span> with Influencer Power
                        </h2>
                        <p className="text-xl text-yellow-100 mb-8">
                           Reach 5M+ potential buyers through trusted influencers promoting Majestic Realties projects
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-yellow-500 text-gray-900 px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-colors inline-flex items-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Collaborate with Majestic Realties
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent text-white px-8 py-4 font-bold text-lg border-2 border-white hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center gap-2"
                            >
                                <Calendar className="w-5 h-5" />
                                Free Project Consultation
                            </motion.button>
                        </div>
                        <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-yellow-200">
                            <div>✓ 320+ Happy Clients</div>
                            <div>✓ 7+ Projects Delivered</div>
                            <div>✓ 11+ Years Experience</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Influence;