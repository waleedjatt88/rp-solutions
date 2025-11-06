import React from 'react';
import logo from '../assets/header logo.png';

const Logo = ({ isHeaderHidden }) => {
  return (
    <div
      className={`
        fixed z-[9999] // High z-index to ensure it's on top of the header
        transition-opacity duration-300 ease-in-out // Smooth transition for opacity
        
        // Corrected: Use opacity-0 for completely hidden, opacity-100 for fully visible
        ${isHeaderHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        
        // Desktop styles (md and larger) - These values are from your last provided code
        md:top-[-25px] md:left-[60px] md:h-[120px]

        // Mobile styles (smaller than md) - These values are from your last provided code
        // Note: You have 'top-0' and 'top-[-8px]' for mobile, which is a conflict.
        // I've kept the last one, top-[-8px], assuming it's the desired override.
        top-[-8px] left-4 h-[80px]
      `}
    >
      <img src={logo} alt="Company Logo" className="h-full w-auto" />
    </div>
  );
};

export default Logo;