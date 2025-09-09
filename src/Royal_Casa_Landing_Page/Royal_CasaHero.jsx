import React, { useState, useEffect } from "react";
import { IoMdAddCircle, IoMdClose } from "react-icons/io";
import { IoPlayCircle, IoPauseCircle, IoChevronBack, IoChevronForward } from "react-icons/io5";
import images from "../assets/images/images";

const Royal_CasaHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // null, "success", "error"
    const [showForm, setShowForm] = useState(true); // Set to true by default

    // Create an array of all Mount Castle images
    const carouselImages = [
        images.RoyalCasa1,
        images.RoyalCasa2,
        images.RoyalCasa3,
        images.RoyalCasa4
    ];

    useEffect(() => {
        let interval;
        if (isAutoPlay) {
            interval = setInterval(() => {
                handleNextSlide();
            }, 100); // Change slide every 5 seconds
        }
        return () => clearInterval(interval);
    }, [isAutoPlay, currentSlide]);

    const handleNextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsTransitioning(false), 700);
    };

    const handlePrevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
        setTimeout(() => setIsTransitioning(false), 700);
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 700);
    };

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "c9bf8252-ac36-4dd6-b096-886c40f67d00", // Replace with your Web3Forms access key
                    subject: "New Enquiry from Royal Casa landing Page",
                    ...formData
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "" });

                // Auto hide success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="home"
            className="relative overflow-hidden group min-h-[100vh] flex items-center px-4 md:px-8 lg:px-16"
        >
            {/* Background Carousel */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                {carouselImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Royal Casa View ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                        {/* Gradient overlay for better text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 w-full lg:w-1/2 text-left text-white space-y-6">
                <h2 className="text-1xl md:text-1xl font-extrabold text-yellow-400 drop-shadow-lg leading-tight">
                    “Build Your Tomorrow with a Sound Investment Today!”
                </h2>

                <h1 className="text-4xl md:text-5xl font-bold">
                    Welcome to{" "}
                    <span className="text-yellow-300">
                        Royal Casa – N.A. Plots, Yavat – Malshiras
                    </span>
                </h1>

                <p className="text-md md:text-lg text-gray-200">
                    Royal Casa is a premium, collector-sanctioned N.A. plotting project near the
                    Pune–Solapur Highway at Yavat–Malshiras. It offers fully-equipped plots with
                    water, electricity, drainage, paved roads and street lighting in a secure
                    gated layout. Enjoy pollution-free surroundings with amenities like a club
                    house, party lawn, children’s play area and more — a perfect blend of nature
                    and modern convenience.
                </p>



                {/* Scroll Button */}
                <button
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 transition-all duration-300 hover:scale-105 shadow-md rounded"
                    aria-label="General Enquiry"
                >
                    Enquire Now
                    <IoMdAddCircle className="ml-2 text-xl" />
                </button>
            </div>


            {/* Contact Form Sidebar - Always visible on desktop, hidden on mobile */}
            <div className={`hidden lg:block absolute top-1/2 -right-0 transform -translate-x-1/2 -translate-y-1/2 
              h-auto w-96 bg-white shadow-2xl z-20`}>
                <div className="h-full overflow-y-auto">


                    <div className="p-6">
                        {submitStatus === "success" ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                                <strong className="font-bold">Success!</strong>
                                <span className="block sm:inline"> Your message has been sent successfully. We'll get back to you soon.</span>
                            </div>
                        ) : submitStatus === "error" ? (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
                                <strong className="font-bold">Error!</strong>
                                <span className="block sm:inline"> There was a problem sending your message. Please try again later.</span>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    placeholder="+91 1234567890"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="2"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4  transition-colors duration-300 flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : "Submit Enquiry"}
                            </button>
                        </form>

                    </div>
                </div>
            </div>

            {/* Mobile form overlay (appears when button is clicked on mobile) */}
            {showForm && (
                <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
                    <div
                        className="absolute inset-0 bg-transparent bg-opacity-50"
                        onClick={() => setShowForm(false)}
                    ></div>
                    <div className="relative h-full w-full sd:w-96 bg-white shadow-2xl transform transition-transform duration-500 z-50">
                        <div className="h-full overflow-y-auto">
                            <div className="p-6 bg-yellow-500 text-white flex justify-between items-center">
                                <h2 className="text-xl font-bold">Get in Touch</h2>
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="text-white hover:text-gray-200"
                                    aria-label="Close form"
                                >
                                    <IoMdClose className="text-2xl" />
                                </button>
                            </div>

                            <div className="p-6">
                                {submitStatus === "success" ? (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                                        <strong className="font-bold">Success!</strong>
                                        <span className="block sm:inline"> Your message has been sent successfully. We'll get back to you soon.</span>
                                    </div>
                                ) : submitStatus === "error" ? (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
                                        <strong className="font-bold">Error!</strong>
                                        <span className="block sm:inline"> There was a problem sending your message. Please try again later.</span>
                                    </div>
                                ) : null}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name-mobile" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name-mobile"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email-mobile" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email-mobile"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone-mobile" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone-mobile"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            placeholder="+91 1234567890"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message-mobile" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                        <textarea
                                            id="message-mobile"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows="4"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            placeholder="Tell us about your requirements..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : "Submit Enquiry"}
                                    </button>
                                </form>

                                <p className="mt-4 text-sm text-gray-500">
                                    We value your privacy and promise to never share your information with third parties.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Carousel Controls */}
            <div className="absolute z-10 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-yellow-400" : "bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={handlePrevSlide}
                className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full transition-all duration-300"
                aria-label="Previous slide"
            >
                <IoChevronBack className="text-2xl md:text-3xl" />
            </button>
            <button
                onClick={handleNextSlide}
                className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full transition-all duration-300"
                aria-label="Next slide"
            >
                <IoChevronForward className="text-2xl md:text-3xl" />
            </button>


        </section>
    );
};

export default Royal_CasaHero;