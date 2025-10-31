import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main grid for two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Button */}
          <div className="text-left">
            <p className="text-green-600 font-semibold tracking-wider mb-4">
              ABOUT US
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              We create meaningful space that benefits all
            </h2>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-3 px-6 rounded-full mt-8 transition-colors duration-300 hover:bg-green-600"
            >
              READ MORE
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <FaArrowRight />
              </div>
            </motion.button>
          </div>

          {/* Right Column: Paragraphs */}
          <div className="text-gray-600 text-base leading-relaxed space-y-4">
            <p>
              <strong className="font-bold text-blue-500">INDIGENOUS</strong> is a multidisciplinary design practice delivering 28+ years of design excellence in Australia and the Asia Pacific. We are committed to connecting people to place through design. From large to small projects, we offer meticulous design underpinned by a clearly defined process and efficiency of delivery. The result is creative and effective designs that are culturally, socially, and environmentally enduring, as well as functionally and commercially grounded.
            </p>
            <p>
              You will need to talk to us if you want to redistribute this template. Thank you,{' '}
              <a href="#" className="text-blue-500 underline hover:text-blue-700">
                talk to us
              </a>{' '}
              if you have anything.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;