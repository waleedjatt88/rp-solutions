import React from 'react';
import { motion } from 'framer-motion';

// Sirf woh image import karein jo aapko background mein lagani hai
import backgroundImage from '../assets/ChatGPT Image Oct 31, 2025, 05_21_42 PM.png';

// Animation ke liye variants (yeh wese hi rahenge)
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const textItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};


const HeroSection = () => {
  return (
    <div id="home" className="relative w-full h-screen object-fit-cover ">
      
      
      <div
        className="absolute w-full h-full bg-cover " 
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true" 
      />
      
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center text-white z-10 w-full px-4">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={textItemVariants} className="text-lg tracking-widest">
            HIGH PERFORMANCE
          </motion.h2>
          <motion.h1 variants={textItemVariants} className="text-5xl md:text-6xl font-bold my-4">
            Robust and Speedy
          </motion.h1>
          <motion.button variants={textItemVariants} className="mt-4 px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors font-semibold">
            LEARN MORE
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;