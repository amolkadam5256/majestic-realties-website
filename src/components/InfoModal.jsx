import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InfoModal = ({ isOpen, onClose }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

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
              className="w-full max-w-lg mx-auto bg-white dark:bg-black rounded-xl shadow-xl p-6 md:p-8 relative"
            >
              <h2 className="text-3xl font-bold text-yellow-400 mb-4 text-center">
                Contact Information
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-6">
                Please enter your details. We’ll contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="hidden"
                  name="access_key"
                  value="c9bf8252-ac36-4dd6-b096-886c40f67d00"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                    // placeholder="majestic realties "
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                    // placeholder="zakki@majesticrealties.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                    // placeholder="+91 78430 77794"
                  />
                </div>

                <div className="flex justify-between items-center pt-4">
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-yellow-400 dark:text-gray-400"
                  >
                    Learn about our privacy policy
                  </a>
                </div>
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-sm font-semibold text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-600 rounded-lg"
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
          Submitted Successfully!.
        </div>
      )}
    </>
  );
};

export default InfoModal;
