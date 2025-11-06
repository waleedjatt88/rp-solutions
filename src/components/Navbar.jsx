import React, { useState, useEffect, useRef } from 'react'; // Added useRef

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const ACTIVE_COLOR = '#ff9633';
const NAV_ITEMS = ['HOME', 'ABOUT', 'PROJECTS', 'SERVICES', 'CONTACT', 'CORE'];

const HEADER_SCROLLED_BG = 'bg-gray-800 shadow-md';

const Header = ({ onVisibilityChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Use a ref to store the onVisibilityChange callback
  // This helps avoid re-running the effect unnecessarily when only the callback changes
  const onVisibilityChangeRef = useRef(onVisibilityChange);
  useEffect(() => {
    onVisibilityChangeRef.current = onVisibilityChange;
  }, [onVisibilityChange]);


  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          let newIsVisible = isVisible; // Use a new variable for clarity

          if (currentScrollY > 50) { // If scrolled past the initial threshold
            if (currentScrollY > lastScrollY && newIsVisible) {
              // Scrolling down and currently visible -> hide
              newIsVisible = false;
            } else if (currentScrollY < lastScrollY && !newIsVisible) {
              // Scrolling up and currently hidden -> show
              newIsVisible = true;
            }
          } else {
            // At the very top of the page -> always visible
            newIsVisible = true;
          }

          // ONLY update state and call prop if visibility has actually changed
          if (newIsVisible !== isVisible) {
            setIsVisible(newIsVisible);
            // Call the callback using the ref
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
  }, [lastScrollY, isVisible]); // Removed onVisibilityChange from dependencies here

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

  const headerVisibilityClass = isVisible ? 'translate-y-0' : '-translate-y-full';


  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${headerVisibilityClass}
        ${isScrolled
          ? HEADER_SCROLLED_BG + ' text-gray-200'
          : 'bg-transparent text-gray-300'
        }
        // Explicitly set height for mobile and desktop
        h-[60px] // Default height for mobile
        md:h-[63px] // Taller height for desktop (adjust as needed)
    `}
      style={{ background: 'linear-gradient(145deg, #55566a 0%, #131318 76%)' }}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-end items-center h-full">
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

        {/* <div className="md:hidden">

          <button className="text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;