import React, { useState, useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const ACTIVE_COLOR = '#ff9633';
const NAV_ITEMS = ['HOME', 'ABOUT', 'PROJECTS', 'SERVICES', 'CONTACT', 'CORE'];

// Define your desired header scrolled background (dark gradient)
const HEADER_SCROLLED_BG_STYLE = {
  background: 'linear-gradient(145deg, #55566a 0%, #131318 76%)'
};

// Define your desired header top background (image)
const HEADER_TOP_BG_STYLE = {
  backgroundImage: 'url("https://via.placeholder.com/1500x400/000000/FFFFFF?text=Top+Page+Header")', // Replace with your actual image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};


const Header = ({ onVisibilityChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onVisibilityChangeRef = useRef(onVisibilityChange);
  useEffect(() => {
    onVisibilityChangeRef.current = onVisibilityChange;
  }, [onVisibilityChange]);

  // Effect to handle scroll and header visibility
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          let newIsVisible = isVisible;

          if (currentScrollY > 50) {
            if (currentScrollY > lastScrollY && newIsVisible) {
              newIsVisible = false;
            } else if (currentScrollY < lastScrollY && !newIsVisible) {
              newIsVisible = true;
            }
          } else {
            newIsVisible = true;
          }

          if (newIsVisible !== isVisible) {
            setIsVisible(newIsVisible);
            if (onVisibilityChangeRef.current) {
              onVisibilityChangeRef.current(newIsVisible);
            }
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for active section highlighting
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
  }, [lastScrollY, isVisible]);


  // Effect to manage body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; // Reset to default
    }
    return () => {
      document.body.style.overflow = ''; // Clean up on component unmount
    };
  }, [isMobileMenuOpen]);


  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on link click

    const targetHref = e.currentTarget.getAttribute('href');
    const targetId = targetHref.replace('#', '');

    setActiveSection(targetId);

    gsap.to(window, {
      duration: 1.5,
      scrollTo: targetHref,
      ease: 'power2.inOut'
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerVisibilityClass = isVisible ? 'translate-y-0' : '-translate-y-full';

  // Determine which background style to apply based on scroll position
  const currentHeaderBgStyle = isScrolled ? HEADER_SCROLLED_BG_STYLE : HEADER_TOP_BG_STYLE;

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${headerVisibilityClass}
        ${isScrolled
          ? 'text-gray-200'
          : 'text-gray-300' // Text color for the top header
        }
        h-[60px]
        md:h-[63px]
    `}
      style={currentHeaderBgStyle}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-end items-center h-full">
        {/* Desktop Navigation */}
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

        {/* Mobile Hamburger Icon (Visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              width="39"
              height="24"
              viewBox="0 0 39 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon h-4 w-auto"
            >
              <path
                d="M2 0.25C1.0335 0.25 0.25 1.0335 0.25 2C0.25 2.9665 1.0335 3.75 2 3.75V0.25ZM37 3.75C37.9665 3.75 38.75 2.9665 38.75 2C38.75 1.0335 37.9665 0.25 37 0.25V3.75ZM2 10.25C1.0335 10.25 0.25 11.0335 0.25 12C0.25 12.9665 1.0335 13.75 2 13.75V10.25ZM32 13.75C32.9665 13.75 33.75 12.9665 33.75 12C33.75 11.0335 32.9665 10.25 32 10.25V13.75ZM2 20.25C1.0335 20.25 0.25 21.0335 0.25 22C0.25 22.9665 1.0335 23.75 2 23.75V20.25ZM19.5 23.75C20.4665 23.75 21.25 22.9665 21.25 22C21.25 21.0335 20.4665 20.25 19.5 20.25V23.75ZM2 3.75H37V0.25H2V3.75ZM2 13.75H32V10.25H2V13.75ZM2 23.75H19.5V20.25H2V23.75Z"
                fill="#ff9633"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-[9999]                           /* Very high z-index */
          h-screen w-screen                               /* Explicitly full viewport */
          transform transition-transform duration-500 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={HEADER_SCROLLED_BG_STYLE} // Applying the dark gradient background
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMobileMenu} className="focus:outline-none text-gray-300">
            {/* Close (X) Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-10">
          {NAV_ITEMS.map((item) => {
            const idName = item.replace(/\s+/g, '-').toLowerCase();
            const isActive = activeSection === idName;

            return (
              <a
                href={`#${idName}`}
                key={item}
                className={`
                  font-medium text-2xl transition-colors cursor-pointer
                  ${isActive ? `text-[${ACTIVE_COLOR}]` : 'text-gray-300 hover:text-[#ff9633]'}
                `}
                onClick={handleLinkClick}
              >
                {item}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;