"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Custom hook for scroll animation
const AnimationComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }} // Initial state with 0 opacity and scale
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }} // Animate when in view
        transition={{ type: "spring", damping: 20, stiffness: 150 }} // Use spring transition
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimationComponent;
