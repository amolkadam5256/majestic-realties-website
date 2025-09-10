import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RoyalCasaContact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSubmitted(false);

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            if (result.success) {
                setSubmitted(true);
                e.target.reset();

                // ⏱ Auto-hide success message after 4 seconds
                setTimeout(() => {
                    setSubmitted(false);
                }, 4000);
            } else {
                setError("Something went wrong. Please try again later.");
                setTimeout(() => {
                    setError("");
                }, 4000);
            }
        } catch (err) {
            setError("Submission failed. Please check your internet connection.");
            setTimeout(() => {
                setError("");
            }, 4000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-white relative" id='contact'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 font-manrope">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Whether you have a question or just want to say hello, we're always happy to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
                    {/* Contact Form */}
                    <div className="flex items-center">
                        <div className="w-full">
                            <form onSubmit={handleSubmit} className="w-full">
                                <input type="hidden" name="access_key" value="c9bf8252-ac36-4dd6-b096-886c40f67d00" />
                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                                {/* Subject for the email */}
                                <input
                                    type="hidden"
                                    name="subject"
                                    value="New enquiry from Royal Casa Landing Page"
                                />


                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                                    />
                                </div>

                                <div className="mb-5">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                                    />
                                </div>

                                <div className="mb-5">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                                    />
                                </div>

                                <div className="mb-5">
                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="Write your message..."
                                        required
                                        className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full bg-yellow-400 text-white py-4 px-6 rounded-lg transition-all duration-300 font-semibold ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-500 transform hover:-translate-y-1"
                                        }`}
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : "Send Message"}
                                </button>

                                {/* Success or Error Message */}
                                <AnimatePresence>
                                    {submitted && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="mt-6 p-4 rounded-md bg-green-50 text-green-800 font-medium shadow border border-green-200"
                                        >
                                            ✅ Your message has been sent successfully! We'll be in touch soon.
                                        </motion.div>
                                    )}

                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="mt-6 p-4 rounded-md bg-red-50 text-red-800 font-medium shadow border border-red-200"
                                        >
                                            ❌ {error}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information and Map */}
                    <div className="flex flex-col">
                        {/* Contact Details */}
                        <div className="mb-10 p-6 bg-gray-50 rounded-xl">
                            <div className="mb-8">
                                <h6 className="text-gray-500 text-sm font-medium leading-5 pb-2">Email Address</h6>
                                <h3 className="text-black text-xl font-semibold leading-8">zakki@majesticrealties.com</h3>
                            </div>
                            <div className="mb-8">
                                <h6 className="text-gray-500 text-sm font-medium leading-5 pb-2">Phone Number</h6>
                                <h3 className="text-black text-xl font-semibold leading-8">+91 78430 77794</h3>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-yellow-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm font-medium text-gray-700">
                                    We typically respond within 1 hour
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoyalCasaContact;