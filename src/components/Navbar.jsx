import React, { useEffect } from 'react';
// Path ko apne logo ke hisab se theek karein
import logo from '../assets/ChatGPT Image Oct 31, 2025, 11_24_12 AM.png';

// Step 1: GSAP aur ScrollToPlugin ko import karein
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Step 2: Plugin ko register karein (yeh GSAP ko batata hai ke ScrollToPlugin istemal karna hai)
gsap.registerPlugin(ScrollToPlugin);

const Header = () => {

  // Step 3: Click handle karne wala function banayein
  const handleLinkClick = (e) => {
    // a tag ke default behavior (turant jump karna) ko rokein
    e.preventDefault(); 
    
    // Jis link par click hua hai, uski href value haasil karein (e.g., "#about")
    const targetId = e.currentTarget.getAttribute('href');
    
    // GSAP ko istemal karke window ko aahista scroll karein
    gsap.to(window, { 
      duration: 1.5, // Scroll ki speed (1.5 second)
      scrollTo: targetId, // Kis element tak scroll karna hai
      ease: 'power2.inOut' // Scroll ka animation style (smooth start and end)
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 text-gray-400 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        <div>
          <img src={logo} alt="Company Logo" className="h-16 w-auto" />
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['HOME', 'ABOUT', 'PROJECTS', 'SERVICES', 'CONTACT','CORE'].map((item) => (
            <a 
              href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} // e.g., CONTACT US -> #contact-us
              key={item} 
              className="text-gray-300 font-medium  transition-colors cursor-pointer"
              // Step 4: Har link ke onClick event par hamara function call karein
              onClick={handleLinkClick}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;