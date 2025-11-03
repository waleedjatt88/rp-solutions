import React from 'react';
import { motion } from 'framer-motion';
// FaMapMarkerAlt import kiya gaya hai
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'; 

// Is component ko aap apne App.js mein istemal kar sakte hain
const ContactSection = () => {
  const phoneNumber = '03345477736'; // Phone number variable
  const location = 'SHOP NO. 02. BASEMENT 02 BLOCPERVAIZ MARKET SECTOR C-8/4 ISLAMABAD'; 

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main container for two columns */}
        <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* Background Dotted Map Image */}
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10 z-0"
            style={{ backgroundImage: "url('/dotted-map.png')" }}
            aria-hidden="true" // Accessibility
          ></div>

          {/* Left Column: Contact Info */}
          <div className="lg:w-1/3 text-left z-10">
            <p className="text-[#ff9633] font-semibold tracking-wider">CONTACT US</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 my-4">
              Feel free to keep in touch with us!
            </h2>
            
            <div className="space-y-6 mt-8">
              {/* Phone (tel: link added for call) */}
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="flex items-center gap-4 group cursor-pointer hover:text-[#ff9633] transition-colors">
                <div className="bg-[#ff9633] text-white rounded-full p-3  transition-colors">
                  <FaPhoneAlt size={20} />
                </div>
                <span className="text-gray-600 group-hover:text-[#ff9633] transition-colors text-lg">{phoneNumber}</span>
              </a>
              
              {/* Email */}
              <a href="mailto:rpsolution21@gmail.com" className="flex items-center gap-4 group cursor-pointer hover:text-[#ff9633] transition-colors">
                <div className="bg-[#ff9633] text-white rounded-full p-3  transition-colors">
                  <FaEnvelope size={20} />
                </div>
                <span className="text-gray-600 group-hover:text-[#ff9633] transition-colors text-lg">rpsolution21@gmail.com</span>
              </a>
              
              {/* Location (Website ki jagah replace kiya gaya) */}
              <div className="flex items-center gap-4">
                <div className="bg-[#ff9633] text-white rounded-full p-3">
                  <FaMapMarkerAlt size={20} /> {/* Location Icon */}
                </div>
                <span className="text-gray-600 text-md">{location}</span>
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
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9633]"
                />
                <input 
                  type="text" 
                  placeholder="Your Phone"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9633]"
                />
                <input 
                  type="email" 
                  placeholder="Your Email *"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9633]"
                />
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9633]"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9633]"
              ></textarea>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} 
className="group inline-flex items-center justify-center gap-3 bg-[#ff9633] text-white font-bold py-3 px-6 rounded-full mt-8 transition-colors duration-300  cursor-pointer"              >
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