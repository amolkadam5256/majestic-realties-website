import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

const InfoModal = ({ isOpen, onClose }) => {
  const [showToast, setShowToast] = useState(false);
  const [activeSection, setActiveSection] = useState("enquiry");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Add subject based on active section
    const subject = activeSection === "enquiry"
      ? "New Property Enquiry - Majestic Realties"
      : "New Career Application - Majestic Realties";

    formData.append("subject", subject);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setShowToast(true);
        onClose();
        form.reset();

        setTimeout(() => {
          setShowToast(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-12 flex items-center justify-center bg-opacity-60 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-lg mx-auto bg-white dark:bg-black rounded-xl shadow-xl p-4 md:p-6 relative"
            >
              {/* Section Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveSection("enquiry")}
                  className={`flex-1 py-1.5 text-sm font-medium ${activeSection === "enquiry"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-gray-500 dark:text-gray-400"
                    }`}
                >
                  Enquiry
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSection("career")}
                  className={`flex-1 py-1.5 text-sm font-medium ${activeSection === "career"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-gray-500 dark:text-gray-400"
                    }`}
                >
                  Career Inquiry
                </button>
              </div>

              <h2 className="text-xl font-bold text-yellow-400 mb-2 text-center">
                {activeSection === "enquiry" ? "Contact Us" : "Career Opportunities"}
              </h2>
              <p className="text-xs text-gray-700 dark:text-gray-300 text-center mb-4">
                {activeSection === "enquiry"
                  ? "Please enter your details. We'll contact you shortly."
                  : "Interested in joining our team? Share your details."
                }
              </p>

              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="hidden"
                  name="access_key"
                  value="c9bf8252-ac36-4dd6-b096-886c40f67d00"
                />
                <input
                  type="hidden"
                  name="section"
                  value={activeSection}
                />

                {/* Common Fields */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 w-full px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-1 w-full px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                  />
                </div>

                {/* Enquiry Specific Fields */}
                {activeSection === "enquiry" && (
                  <>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                        Property Type
                      </label>
                      <select
                        name="property_type"
                        required
                        className="mt-1 w-full px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                      >
                        <option value="">Select Property Type</option>
                        <option value="plots">NA Plots</option>
                        <option value="agriculture">Agriculture</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                        Budget Range (in Lacs)
                      </label>
                      <select
                        name="budget_range"
                        required
                        className="mt-1 w-full px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="3-5">3 Lac - 5 Lac</option>
                        <option value="5-7">5 Lac - 7 Lac</option>
                        <option value="7-10">7 Lac - 10 Lac</option>
                        <option value="10+">Above 10 Lac</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Career Specific Fields */}
                {activeSection === "career" && (
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                      LinkedIn Profile / Portfolio Link or Resume Link
                    </label>
                    <input
                      type="url"
                      name="linkedin_link"
                      className="mt-1 w-full px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />

                    <div className="text-gray-500 dark:text-gray-400 mt-5">
                      HR: <a href="tel:+919876543210">+91 88062 06442</a> | <a href="mailto:hr@majesticrealties.com">hr@majesticrealties.in</a>
                    </div>
                  </div>

                )}


                <div className="flex justify-between items-center pt-2">
                  {/* <Link
                    to="/contact"
                    className="text-xs text-gray-500 hover:text-yellow-400 dark:text-gray-400"
                  >
                    Learn about our privacy policy
                  </Link> */}

                </div>
                <div className="flex justify-end space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3 py-1 text-xs font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1 text-xs font-semibold text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-600 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showToast && (
        <div className="fixed top-20 right-5 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50">
          Submitted Successfully!
        </div>
      )}
    </>
  );
};

export default InfoModal;