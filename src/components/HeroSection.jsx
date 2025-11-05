import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaAngleDown, FaCheckCircle, FaStar, FaBuilding } from 'react-icons/fa';

import backgroundImage from '../assets/ChatGPT Image Oct 31, 2025, 05_21_42 PM.png';

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

const rotatingTextVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotatingSentences = [
    { text: '5+ Years of Excellence', icon: <FaStar className="inline-block mr-2" /> },
    { text: '09+ Govt. & Public Projects Completed', icon: <FaBuilding className="inline-block mr-2" /> },
    { text: '100% Project Success Rate (No Complaints)', icon: <FaCheckCircle className="inline-block mr-2" /> },
    { text: 'Positive Client Feedback', icon: <FaStar className="inline-block mr-2" /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingSentences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [rotatingSentences.length]);

  return (
    <div
      id="home"
      className="relative w-full h-screen object-cover overflow-hidden"
    >
      <div
        className="absolute w-full h-full bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* Adjusted bottom for mobile to push content higher */}
      {/* Removed mt-[-4rem] from h1 and rely on 'bottom' of parent div */}
      <div className="absolute bottom-32 md:bottom-28 left-1/2 -translate-x-1/2 text-center text-white z-10 w-full px-4">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={textItemVariants}
            className="text-3xl md:text-6xl font-extrabold my-4" // Removed mt-[-4rem]
          >
            Your Complete Service Partner
          </motion.h1>

          <motion.p variants={textItemVariants} className="max-w-4xl mx-auto text-sm md:text-m mb-6 hidden">
            We provide a wide range of professional services, dedicated to meeting all your needs with quality & expertise.
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.h2
              key={currentIndex}
              variants={rotatingTextVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-sm sm:text-lg tracking-widest uppercase mb-2"
            >
              {rotatingSentences[currentIndex].icon}
              {rotatingSentences[currentIndex].text}
            </motion.h2>
          </AnimatePresence>

          <motion.div variants={textItemVariants}>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
              // Changed mt-4 to mt-2 for slightly less space
              className="group relative inline-block mt-2
                          px-4 py-2 sm:px-8 sm:py-3
                          border-2 border-white rounded-full transition-colors font-semibold cursor-pointer overflow-hidden"
            >
              <span
                className="absolute inset-0 bg-white transition-all duration-500 ease-in-out transform scale-y-0 group-hover:scale-y-100 origin-bottom"
                aria-hidden="true"
              ></span>

              <span
                className="relative z-10 transition-colors duration-500 group-hover:text-black
                          text-xs sm:text-base
                "
              >
                EXPLORE SERVICES
              </span>
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Adjusted bottom for floating button. Kept it a bit higher */}
      <div className="absolute bottom-8 md:bottom-4 left-1/2 -translate-x-1/2 z-10">
        <ScrollLink
          to="profile"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1500}
          className="cursor-pointer"
        >
          <motion.div
            className="p-3 rounded-full bg-white shadow-lg"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <FaAngleDown className="w-6 h-6" style={{ color: '#ff9633' }} />
          </motion.div>
        </ScrollLink>
      </div>
    </div>
  );
};

export default HeroSection;