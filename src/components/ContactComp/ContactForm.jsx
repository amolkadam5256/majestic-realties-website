import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
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
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
          <div className="flex items-center lg:mb-0 mb-10">
            <div className="w-full">
              <h2 className="text-gray-900 font-manrope text-4xl font-bold leading-10 mb-8 lg:text-left text-center">
                Contact Us
              </h2>

              <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
                <input type="hidden" name="access_key" value="c9bf8252-ac36-4dd6-b096-886c40f67d00" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-indigo-600 text-white py-3 px-6 rounded-md transition ${
                    loading ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {/* Success or Error Message */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 p-4 rounded-md bg-green-50 text-green-800 font-medium shadow"
                    >
                      ✅ Your message has been sent successfully! We’ll be in touch soon.
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 p-4 rounded-md bg-red-50 text-red-800 font-medium shadow"
                    >
                      ❌ {error}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

          {/* Map with Overlay */}
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7566.939207833448!2d73.79342557393534!3d18.507669169570725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb35bfc955f%3A0xd31660777e44519a!2sBandal%20Spaces%2C%20Paud%20Rd%2C%20Paud%20Road%2C%20Bharti%20Nagar%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1753853215025!5m2!1sen!2sin"
              className="w-full h-full rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute -bottom-14 left-0 bg-white px-4 py-2 rounded-md shadow-md flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                We typically respond within 1 hour
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
