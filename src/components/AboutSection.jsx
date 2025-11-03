// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);


import aboutImage from '../assets/Workplace Focus and Determination.png'; 

const About = () => {
  
  const handleButtonClick = (e) => {
    e.preventDefault();
    
    gsap.to(window, { 
      duration: 1.5, 
      scrollTo: "#core", 
      ease: 'power2.inOut' 
    });
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="text-left"> 
            <p className="text-[#ff9633] font-semibold tracking-widest text-lg mb-4">
              ABOUT 
            </p>
            
           
            
            <div className="text-justify text-gray-500 leading-relaxed space-y-6">
                <p>
                    <strong className="font-bold text-[#ff9633]">RP Solutions</strong> is a trusted provider of diverse professional services, backed by 5+ years of dedicated experience in the industry. We are committed to enhancing quality and convenience in everyday life for our clients.
                
                
                    Our highly trained team excels in key areas like IT Solutions, Consulting, and Technical Support, ensuring every project meets the highest standards of care and attention. We pride ourselves on the values of integrity, transparency, and excellence.
                
                
                    We have successfully completed numerous major projects, with a significant portion being in the Government sector, where we maintain a strong and reliable reputation for timely and high-quality delivery. Our goal is to be the reliable partner that consistently meets and exceeds client expectations.
                </p>
            </div>

            <motion.a
              href="#core" 
              onClick={handleButtonClick} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
className="group inline-flex items-center justify-center gap-3 bg-[#ff9633] text-white font-bold py-3 px-6 rounded-full mt-8 transition-colors duration-300 hover:bg-gray-500 cursor-pointer" >
              LEARN MORE
              <div className="transition-transform  duration-300 group-hover:translate-x-1">
                <FaArrowRight />
              </div>
            </motion.a>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img 
              src={aboutImage} 
              alt="About Us Image" 
              className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.03]"
            />
            <div 
              className="absolute inset-0 bg-black/10 mix-blend-multiply opacity-50"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;