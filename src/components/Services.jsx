// src/components/Services.jsx

import React, { useState } from 'react';
import { services } from '../Data/servicedata'; 

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const [items, setItems] = useState(services);

  const handleNext = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.push(newItems.shift()); 
      return newItems;
    });
  };

  const handlePrev = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.unshift(newItems.pop()); 
      return newItems;
    });
  };

  return (
    
    <div id='services' className="relative w-full h-screen overflow-hidden">
      <div className="w-full h-full">
        {items.map((service, index) => (
          <div
            key={service.name}
            className="item absolute w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${service.image})`,
              transform: `translateX(${(index - 1) * 100}%)`, 
              opacity: index === 1 ? 1 : 0.7,
              zIndex: items.length - Math.abs(index - 1),
            }}
          >
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 text-white bg-gradient-to-t from-black/80 to-transparent">
              <div className="max-w-4xl">
                <h2 className="text-4xl sm:text-5xl font-black tracking-wider uppercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                  {service.name}
                </h2>
                <p className="mt-4 text-base sm:text-lg w-full md:w-3/4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                  {service.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group mt-6 flex items-center justify-center gap-3 rounded-full bg-[#ff9633] px-6 py-2 text-sm font-bold text-white shadow-lg transition-colors duration-300   sm:px-8 sm:py-3 sm:text-base"
                >
                  See More
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <FaArrowRight />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 z-50 flex gap-2 sm:bottom-10 sm:right-10 sm:gap-4 sm:px-8 sm:py-3 sm:text-base"
                >
        <button
          onClick={handlePrev}
          className="prev w-10 h-10 text-xl text-white bg-black/40 rounded-full hover:bg-[#ff9633] hover:text-black transition-all duration-300 flex items-center justify-center sm:w-14 sm:h-14 sm:text-2xl"
        >
          ◁
        </button>
        <button
          onClick={handleNext}
          className="next w-10 h-10 text-xl text-white bg-black/40 rounded-full hover:bg-[#ff9633] hover:text-black transition-all duration-300 flex items-center justify-center sm:w-14 sm:h-14 sm:text-2xl"
        >
          ▷
        </button>
      </div>
    </div>
  );
};

export default Services;