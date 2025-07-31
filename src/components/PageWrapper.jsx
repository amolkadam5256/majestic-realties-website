// components/PageWrapper.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}       // Start position
      animate={{ opacity: 1, y: 0 }}        // In animation
      exit={{ opacity: 0, y: -20 }}         // Exit animation
      transition={{ duration: 0.5 }}        // Duration
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
