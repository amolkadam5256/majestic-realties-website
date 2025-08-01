// components/Loader.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4); // cycle 0 → 3 dots
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const animatedText = `Loading${'.'.repeat(dotCount)}`;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-[#0f0f0f] z-[9999] flex flex-col justify-center items-center text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Grid Dots */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 z-0" />

          {/* Circular Spinner */}
          <div className="relative z-10 mb-4">
            <div className="w-16 h-16 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin"></div>
          </div>

          {/* Animated Loading Text */}
          <p className="text-sm text-gray-400 tracking-widest z-10 uppercase font-mono animate-pulse">
            {animatedText}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
