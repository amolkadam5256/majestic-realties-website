import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet';

const Career = ({ selectedJob, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: selectedJob?.title || "",
        experience: "",
        currentCompany: "",
        currentSalary: "",
        expectedSalary: "",
        noticePeriod: "",
        resume: null,
        coverLetter: "",
        portfolio: "",
        linkedin: "",
        github: "",
        behance: "",
        otherLinks: "",
        hearAboutUs: "",
        referral: "",
        // Real Estate Specific Fields
        realEstateExperience: "",
        propertyTypes: "",
        salesAchievements: "",
        clientPortfolio: "",
        // Digital Marketing Specific Fields
        marketingSkills: "",
        toolsPlatforms: "",
        campaignResults: "",
        seoExperience: ""
    });

    const [showToast, setShowToast] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // HR Contact Information
    const hrContact = {
        name: "Pooja Patil",
        position: "HR Manager",
        phone: "+91 88062 06442",
        email: "hr@majesticrealties.in",
        availability: "Tue - Sun: 9:30 AM - 6:30 PM (Monday - CLOSED)"
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const formDataToSend = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend,
            });

            const result = await response.json();

            if (result.success) {
                setShowToast(true);
                form.reset();
                setTimeout(() => {
                    setShowToast(false);
                    onClose();
                }, 3000);
            }
        } catch (error) {
            console.error("Submission failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        {
            name: "linkedin",
            label: "LinkedIn Profile",
            placeholder: "https://linkedin.com/in/yourprofile",
            icon: "💼"
        },
        {
            name: "github",
            label: "GitHub Profile",
            placeholder: "https://github.com/yourusername",
            icon: "💻"
        },
        {
            name: "behance",
            label: "Behance/Dribbble",
            placeholder: "https://behance.net/yourportfolio",
            icon: "🎨"
        },
        {
            name: "portfolio",
            label: "Portfolio Website",
            placeholder: "https://yourportfolio.com",
            icon: "🌐"
        }
    ];

    // Real Estate specific roles
    const realEstatePositions = [
        "Real Estate Sales Manager",
        "Property Consultant",
        "Sales Executive",
        "Business Development Manager",
        "Relationship Manager",
        "Team Lead - Sales",
        "Senior Sales Consultant"
    ];

    // Digital Marketing specific roles
    const digitalMarketingPositions = [
        "Digital Marketing Specialist",
        "Social Media Manager",
        "SEO Specialist",
        "Content Marketing Manager",
        "PPC Specialist",
        "Digital Marketing Manager",
        "Marketing Coordinator"
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-25">


            <Helmet>
                <title>Career Application | Majestic Realties</title>

                <meta
                    name="description"
                    content="Apply for real estate and digital marketing jobs at Majestic Realties. Submit your application online for sales, marketing, and business development roles."
                />

                <meta
                    name="keywords"
                    content="Majestic Realties careers, real estate jobs Pune, real estate sales jobs, digital marketing jobs Pune, apply online Majestic Realties"
                />

                <meta property="og:title" content="Career at Majestic Realties" />
                <meta
                    property="og:description"
                    content="Join Majestic Realties. Explore openings in real estate sales, digital marketing, business development, and more."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://majesticrealties.com/career" />
                <meta
                    property="og:image"
                    content="https://majesticrealties.com/assets/career-banner.jpg"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Apply Online | Majestic Realties Careers" />
                <meta
                    name="twitter:description"
                    content="Submit your job application for Real Estate & Digital Marketing roles at Majestic Realties."
                />
                <meta
                    name="twitter:image"
                    content="https://majesticrealties.com/assets/career-banner.jpg"
                />
            </Helmet>


            {/* Success Toast */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed top-5 right-5 bg-green-600 text-white px-6 py-4  shadow-2xl z-50 flex items-center gap-3"
                    >
                        <div className="w-8 h-8 bg-white/20  flex items-center justify-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold">Application Submitted!</p>
                            <p className="text-sm opacity-90">We'll contact you shortly</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 bg-yellow-400 text-white px-4 py-2  text-sm font-medium mb-4">
                        Join Our Team
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Apply for{" "}
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                            {selectedJob?.title || "Your Dream Role"}
                        </span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Ready to build your career with Majestic Realties? Fill out the form below and let's create something amazing together.
                    </p>
                </motion.div>

                {/* HR Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-blue-50 border border-blue-200  p-6 mb-8"
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">HR Contact</h3>
                            <p className="text-blue-700 mb-1">
                                <strong>{hrContact.name}</strong> - {hrContact.position}
                            </p>
                            <p className="text-blue-600 mb-1">
                                📞 {hrContact.phone} | ✉️ {hrContact.email}
                            </p>
                            <p className="text-blue-600 text-sm">
                                Available: {hrContact.availability}
                            </p>
                        </div>
                        <div className="bg-white  p-4 text-center">
                            <p className="text-blue-800 font-semibold mb-2">Need Help?</p>
                            <p className="text-blue-600 text-sm">
                                Contact our HR team for any queries about the application process or position details.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Progress Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-center mb-12"
                >
                    <div className="flex items-center space-x-8">
                        {['Personal Info', 'Professional Details', 'Industry Experience', 'Review & Submit'].map((step, index) => (
                            <div key={step} className="flex items-center">
                                <div className="w-10 h-10  bg-yellow-500 text-white flex items-center justify-center font-semibold text-sm">
                                    {index + 1}
                                </div>
                                <span className="ml-3 text-sm font-medium text-gray-700 hidden sm:block">{step}</span>
                                {index < 3 && <div className="w-12 h-0.5 bg-gray-300 mx-4 hidden sm:block"></div>}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Application Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white  shadow-2xl p-6 md:p-8"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <input type="hidden" name="access_key" value="c9bf8252-ac36-4dd6-b096-886c40f67d00" />
                        <input type="hidden" name="subject" value={`Career Application: ${formData.position}`} />

                        {/* Personal Information */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-100 flex items-center justify-center">
                                    <span className="text-blue-600">👤</span>
                                </div>
                                Personal Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                        placeholder="Enter your full legal name as per government ID"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                        placeholder="user1234@gmail.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                        placeholder="+91 00000 00000 (Include country code)"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Position Applied For *
                                    </label>
                                    <select
                                        name="position"
                                        required
                                        value={formData.position}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 bg-gray-50"
                                    >
                                        <option value="">Select your desired position</option>
                                        <optgroup label="Real Estate Sales">
                                            {realEstatePositions.map(position => (
                                                <option key={position} value={position}>{position}</option>
                                            ))}
                                        </optgroup>
                                        <optgroup label="Digital Marketing">
                                            {digitalMarketingPositions.map(position => (
                                                <option key={position} value={position}>{position}</option>
                                            ))}
                                        </optgroup>
                                        <option value="Other">Other Position (Specify in cover letter)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Professional Information */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-100  flex items-center justify-center">
                                    <span className="text-green-600">💼</span>
                                </div>
                                Professional Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Total Experience *
                                    </label>
                                    <select
                                        name="experience"
                                        required
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                    >
                                        <option value="">Select your total professional experience</option>
                                        <option value="0-1 years">Fresher (0-1 years)</option>
                                        <option value="1-3 years">1-3 years</option>
                                        <option value="3-5 years">3-5 years</option>
                                        <option value="5-8 years">5-8 years</option>
                                        <option value="8+ years">8+ years (Senior)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Current Company
                                    </label>
                                    <input
                                        type="text"
                                        name="currentCompany"
                                        value={formData.currentCompany}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                        placeholder="Your current organization name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Current Salary (₹)
                                    </label>
                                    <input
                                        type="text"
                                        name="currentSalary"
                                        value={formData.currentSalary}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                        placeholder="Current annual CTC (Cost to Company)"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Expected Salary (₹) *
                                    </label>
                                    <input
                                        type="text"
                                        name="expectedSalary"
                                        required
                                        value={formData.expectedSalary}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                        placeholder="Expected annual CTC (Negotiable)"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Notice Period *
                                    </label>
                                    <select
                                        name="noticePeriod"
                                        required
                                        value={formData.noticePeriod}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                    >
                                        <option value="">Select your current notice period</option>
                                        <option value="Immediate">Immediate Joining</option>
                                        <option value="15 days">15 days</option>
                                        <option value="30 days">30 days (Standard)</option>
                                        <option value="45 days">45 days</option>
                                        <option value="60 days">60 days</option>
                                        <option value="90 days">90 days (Long)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Industry Specific Experience */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 bg-purple-100  flex items-center justify-center">
                                    <span className="text-purple-600">🏆</span>
                                </div>
                                Industry Experience
                            </h3>

                            {/* Real Estate Specific Fields */}
                            <div className="space-y-4 mb-6 p-4 bg-blue-50 ">
                                <h4 className="font-semibold text-blue-800 mb-3">Real Estate Experience</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Real Estate Industry Experience
                                        </label>
                                        <select
                                            name="realEstateExperience"
                                            value={formData.realEstateExperience}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                        >
                                            <option value="">Select real estate experience</option>
                                            <option value="No experience">No prior experience</option>
                                            <option value="0-2 years">0-2 years (Beginner)</option>
                                            <option value="2-5 years">2-5 years (Intermediate)</option>
                                            <option value="5+ years">5+ years (Expert)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Property Types Handled
                                        </label>
                                        <input
                                            type="text"
                                            name="propertyTypes"
                                            value={formData.propertyTypes}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                            placeholder="e.g., Residential Apartments, Commercial Spaces, Plots, Villas"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Sales Achievements & Targets
                                        </label>
                                        <textarea
                                            name="salesAchievements"
                                            rows="3"
                                            value={formData.salesAchievements}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                            placeholder="Describe your key sales achievements, monthly targets achieved, major deals closed, and recognition received..."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Digital Marketing Specific Fields */}
                            <div className="space-y-4 p-4 bg-green-50 ">
                                <h4 className="font-semibold text-green-800 mb-3">Digital Marketing Experience</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Marketing Skills & Specializations
                                        </label>
                                        <input
                                            type="text"
                                            name="marketingSkills"
                                            value={formData.marketingSkills}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                            placeholder="e.g., SEO, PPC, Social Media Marketing, Content Strategy, Email Marketing"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tools & Platforms Proficiency
                                        </label>
                                        <input
                                            type="text"
                                            name="toolsPlatforms"
                                            value={formData.toolsPlatforms}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                            placeholder="e.g., Google Analytics, Meta Ads, Google Ads, Canva, SEMrush, HubSpot"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Campaign Results & Performance Metrics
                                        </label>
                                        <textarea
                                            name="campaignResults"
                                            rows="3"
                                            value={formData.campaignResults}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                            placeholder="Describe successful marketing campaigns you've managed, key performance indicators (KPIs), ROI achieved, and growth metrics..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links & Portfolio */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 bg-pink-100  flex items-center justify-center">
                                    <span className="text-pink-600">🔗</span>
                                </div>
                                Online Presence & Portfolio
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {socialLinks.map((link) => (
                                    <div key={link.name}>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <span className="mr-2">{link.icon}</span>
                                            {link.label}
                                        </label>
                                        <input
                                            type="url"
                                            name={link.name}
                                            value={formData[link.name]}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                            placeholder={link.placeholder}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Other Professional Links (Blog, Publications, Certifications)
                                </label>
                                <input
                                    type="text"
                                    name="otherLinks"
                                    value={formData.otherLinks}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                    placeholder="https://yourblog.com, https://certification-portal.com"
                                />
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 bg-indigo-100  flex items-center justify-center">
                                    <span className="text-indigo-600">💬</span>
                                </div>
                                Additional Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        How did you hear about us? *
                                    </label>
                                    <select
                                        name="hearAboutUs"
                                        required
                                        value={formData.hearAboutUs}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                    >
                                        <option value="">Select referral source</option>
                                        <option value="LinkedIn">LinkedIn Job Posting</option>
                                        <option value="Indeed">Indeed Portal</option>
                                        <option value="Naukri.com">Naukri.com</option>
                                        <option value="Company Website">Company Career Page</option>
                                        <option value="Employee Referral">Employee Referral</option>
                                        <option value="Job Fair">Career Fair/Job Fair</option>
                                        <option value="Social Media">Social Media (Instagram/Facebook)</option>
                                        <option value="Real Estate Portal">Real Estate Industry Portal</option>
                                        <option value="Newspaper">Newspaper Advertisement</option>
                                        <option value="Other">Other Source</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Referral Name (if any)
                                    </label>
                                    <input
                                        type="text"
                                        name="referral"
                                        value={formData.referral}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                                        placeholder="Name of Majestic Realties employee who referred you"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-600 text-center sm:text-left">
                                By submitting this form, you agree to our privacy policy and consent to contact.
                                Our HR team will review your application and contact you within 3 business days.
                            </p>
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-8 py-3 text-gray-700 border border-gray-300  hover:bg-gray-50 transition-all duration-200 font-medium"
                                >
                                    Cancel Application
                                </button>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white  font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin"></div>
                                            Submitting Application...
                                        </>
                                    ) : (
                                        <>
                                            Submit Application
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </div>
                    </form>
                </motion.div>

                {/* Footer Note with HR Contact */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-8 text-gray-600"
                >
                    <p className="mb-2">We typically respond to applications within 1-2 business days</p>
                    <p className="text-sm">
                        For urgent queries, contact HR: {hrContact.email} | {hrContact.phone}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Career;