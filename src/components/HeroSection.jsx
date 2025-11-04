import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaAngleDown } from 'react-icons/fa';

import backgroundImage from '../assets/Generated Image November 04, 2025 - 12_50PM.png';

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
    <div id="home" className="relative w-full h-screen  ">
      
      
      <div
        className="absolute w-full h-full bg-cover " 
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true" 
      />
      
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Content Container */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center text-white z-10 w-full px-4">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={textItemVariants} className="text-lg tracking-widest uppercase mb-2">
            5+ Years of Excellence
          </motion.h2>
          <motion.h1 variants={textItemVariants} className="text-4xl md:text-6xl font-extrabold my-4">
             Your Complete Service Partner
          </motion.h1>
          

          <motion.p variants={textItemVariants} className="max-w-3xl mx-auto text-m md:text-sm mb-6 hidden sm:block">
              We provide a wide range of professional services, dedicated to meeting all your needs with quality and expertise.
          </motion.p>

          <motion.div variants={textItemVariants}>
            <ScrollLink
                to="services" 
                spy={true}
                smooth={true}
                offset={-70} 
                duration={2000} 
                className="group relative inline-block mt-4 px-8 py-3 border-2 border-white rounded-full transition-colors font-semibold cursor-pointer overflow-hidden"
            >
                <span 
                    className="absolute inset-0 bg-white transition-all duration-500 ease-in-out transform scale-y-0 group-hover:scale-y-100 origin-bottom"
                    aria-hidden="true"
                ></span>

                <span className="relative z-10 transition-colors duration-500 group-hover:text-black text-sm sm:text-base">
                    EXPLORE SERVICES
                </span>
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
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
                <FaAngleDown className="w-6 h-6" style={{ color: '#ff9633' }} /> {/* Orange arrow */}
            </motion.div>
        </ScrollLink>
      </div>
      
    </div>
  );
};

export default HeroSection;