import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaArrowRight } from 'react-icons/fa';

// Is component ko aap apne App.js mein istemal kar sakte hain
const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main container for two columns */}
        <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* Background Dotted Map Image */}
          {/* Note: background image ko 'public' folder mein rakhein ya import karein */}
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10 z-0"
            style={{ backgroundImage: "url('/dotted-map.png')" }}
          ></div>

          {/* Left Column: Contact Info */}
          <div className="lg:w-1/3 text-left z-10">
            <p className="text-gray-500 font-semibold tracking-wider">CONTACT US</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 my-4">
              Feel free to keep in touch with us!
            </h2>
            
            <div className="space-y-6 mt-8">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-teal-500 text-white rounded-full p-3">
                  <FaPhoneAlt size={20} />
                </div>
                <span className="text-gray-600 text-lg">010-020-0860</span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-teal-500 text-white rounded-full p-3">
                  <FaEnvelope size={20} />
                </div>
                <span className="text-gray-600 text-lg">info@company.com</span>
              </div>
              {/* Website */}
              <div className="flex items-center gap-4">
                <div className="bg-teal-500 text-white rounded-full p-3">
                  <FaGlobe size={20} />
                </div>
                <span className="text-gray-600 text-lg">www.company.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:w-2/3 z-10">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name *"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input 
                  type="text" 
                  placeholder="Your Phone"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input 
                  type="email" 
                  placeholder="Your Email *"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, backgroundColor: '#ff9633' }} // Active state color (teal-600)
                className="group flex items-center justify-center gap-3 bg-[#ff9633] text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 hover:bg-[#ff9633]"
              >
                SEND MESSAGE NOW
                <motion.div
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                >
                  <FaArrowRight />
                </motion.div>
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;