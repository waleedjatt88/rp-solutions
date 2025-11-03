import React, { useState, useEffect } from 'react';
// Path ko apne logo ke hisab se theek karein
import logo from '../assets/header logo.png';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

// Active Tab Color
const ACTIVE_COLOR = '#ff9633'; 
// Navigation Items List
const NAV_ITEMS = ['HOME', 'ABOUT', 'PROJECTS', 'SERVICES', 'CONTACT', 'CORE'];

// Header Gradient for Scrolled State (Matching your main background)
const HEADER_SCROLLED_BG = 'bg-gray-800 shadow-md'; // Tailwind classes for gradient are too verbose, using a solid dark color for scroll
// If you want gradient on scroll, you need to use a single color for the Header or custom CSS.
// Using fixed dark color for better readability on scroll.

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Header visibility
  const [activeSection, setActiveSection] = useState('home'); 
  const [lastScrollY, setLastScrollY] = useState(0);

  // === Scroll Direction & Background Change Logic ===
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      // Background Change Logic
      setIsScrolled(window.scrollY > 50);

      // Scroll Direction/Visibility Logic
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Header ko sirf tab hide/show karein jab scroll position 50px se zyada ho
          if (currentScrollY > 50) {
            // Scroll Down (Hide Header)
            if (currentScrollY > lastScrollY && isVisible) {
              setIsVisible(false);
            } 
            // Scroll Up (Show Header)
            else if (currentScrollY < lastScrollY && !isVisible) {
              setIsVisible(true);
            }
          } else {
            // Top of the page (Always show header)
            setIsVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Observer setup (Remains the same for active link tracking)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        root: null, 
        rootMargin: '-50% 0px -50% 0px', 
        threshold: 0 
      }
    );

    NAV_ITEMS.forEach(item => {
      const idName = item.replace(/\s+/g, '-').toLowerCase();
      const targetElement = document.getElementById(idName);
      if (targetElement) {
        observer.observe(targetElement);
      }
    });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      NAV_ITEMS.forEach(item => {
        const idName = item.replace(/\s+/g, '-').toLowerCase();
        const targetElement = document.getElementById(idName);
        if (targetElement) {
          observer.unobserve(targetElement);
        }
      });
    };
  }, [lastScrollY, isVisible]); // Dependencies updated

  // === Smooth Scroll and Active Link Logic (Click) ===
  const handleLinkClick = (e) => {
    e.preventDefault(); 
    
    const targetHref = e.currentTarget.getAttribute('href');
    const targetId = targetHref.replace('#', '');
    
    setActiveSection(targetId); 
    
    gsap.to(window, { 
      duration: 1.5, 
      scrollTo: targetHref, 
      ease: 'power2.inOut' 
    });
  };
  
  // Header Classes for smooth show/hide animation
  const headerVisibilityClass = isVisible ? 'translate-y-0' : '-translate-y-full';


  return (
    <header 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${headerVisibilityClass}
        ${isScrolled 
          ? HEADER_SCROLLED_BG + ' text-gray-200' 
          : 'bg-transparent text-gray-300' 
        }
    `}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo Container - Logo Height reduced to h-10 for better fit */}
        <div>
          {/* Logo ki height kam ki gayi hai taaki nav padding ko maintain kiya ja sake */}
          <img src={logo} alt="Company Logo" className="h-10 w-auto" /> 
        </div>
        
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => { 
            const idName = item.replace(/\s+/g, '-').toLowerCase();
            const isActive = activeSection === idName;

            return (
              <a 
                href={`#${idName}`}
                key={item} 
                className={`
                  font-medium transition-colors cursor-pointer relative group py-2
                  ${isActive ? `text-[${ACTIVE_COLOR}]` : 'hover:text-[#ff9633]'}
                `}
                onClick={handleLinkClick}
              >
                {item}
                {/* Active Tab Underline */}
                <span 
                  style={{ backgroundColor: ACTIVE_COLOR }}
                  className={`
                    absolute bottom-[3px] left-0 w-full h-[2px] transition-transform duration-500 origin-left 
                    ${isActive 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100' 
                    }
                  `}
                ></span>
              </a>
            );
          })}
        </div>

        <div className="md:hidden">
          {/* Mobile Button */}
          <button className="text-gray-300 focus:outline-none">
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