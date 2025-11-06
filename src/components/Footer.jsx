import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaWhatsapp,
  FaInstagram
} from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', link: 'home' },
  { name: 'About', link: 'about' },
  { name: 'Services', link: 'services' },
  { name: 'Projects', link: 'projects' },
  { name: 'Contact', link: 'contact' },
];

const servicesLinks = [
  'Carpenter Services',
  'House Keeper Services',
  'AC-Technician Services',
  'Welder Services',
  'Electrician Services',
];

export default function Footer() {
  const phoneNumber = '0314 0840821';
  const [tooltipText, setTooltipText] = useState(` Click to copy`);

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setTooltipText('Copied!');
      setTimeout(() => {
        setTooltipText(` Click to copy`);
      }, 2000); 
    });
  };

  return (
    <footer 
        className="text-gray-400 py-16"
        style={{ background: 'linear-gradient(145deg, #55566a 0%, #131318 76%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-gray-200">RP</span> 
              <span className="text-[#ff9633]"> Solutions</span> 
            </h3>
            <div className="pr-4 text-sm text-justify leading-relaxed space-y-4">
              <p>WE BELIEVE IN PROVIDING RELIABLE AND EFFICIENT SERVICES THAT ELEVATE THE STANDARD OF LIVING FOR OUR CLIENTS.</p>
              <p> WITH A FOCUS ON QUALITY AND PROFESSIONALISM, WE STRIVE TO BUILD LASTING RELATIONSHIPS BASED ON TRUST AND SATISFACTION.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#ff9633] mb-4">Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.link} 
                    smooth={true} 
                    duration={800}
                    className="flex items-center hover:text-[#ff9633] transition-colors cursor-pointer"
                  >
                    <span className="mr-2">&#8594;</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#ff9633] mb-4">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((service) => (
                <li key={service} className="flex items-center">
                  <span className="mr-2">&#8594;</span> {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#ff9633] mb-4">Have a Questions?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#ff9633] mt-1 mr-3 flex-shrink-0" />
                <span>Islamabad, Pakistan</span>
              </li>
              <li className="relative flex items-center group">
                <FaPhoneAlt className="text-[#ff9633] mr-3" />
                <span onClick={handleCopy} className="cursor-pointer">
                  {phoneNumber}
                </span>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2  bg-gray-600 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tooltipText}
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#ff9633] mr-3" />
                <a href="mailto:rpsolution21@gmail.com" className="hover:text-[#ff9633] transition-colors">
                  rpsolution21@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://linkedin.com/in/your-profile-url" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#ff9633] transition-all duration-300 active:scale-90">
                <FaInstagram className="text-white" />
              </a>
              
              <a href="https://www.facebook.com/share/p/1Bog2PJqEK/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#ff9633] transition-all duration-300 active:scale-90">
                <FaFacebookF className="text-white" />
              </a>
              <a href="https://wa.me/923345477738" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#ff9633] transition-all duration-300 active:scale-90">
                <FaWhatsapp className="text-white" />
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-14 pt-8 border-t border-gray-700 text-center text-gray-400"> {/* Added default text-gray-400 for general footer text */}
  <p className="text-sm md:text-base"> 
    &copy; {new Date().getFullYear()}{' '}
    <span className="text-gray-300 text-sm md:text-base">Rp</span> {/* Rp in gray-300 */}
    <span className="text-[#ff9633] text-sm md:text-base"> Solutions</span> {/* Solutions in active color */}
    <span className="text-xs md:text-sm"> Pvt.Ltd</span> {/* Pvt.Ltd smaller */}
  </p>
  <p className="mt-2 text-xs md:text-sm"> {/* Base text size, larger on desktop */}
    Made by{' '}
    <a href="mailto:Sendtomadnan@gmail.com" className="hover:text-[#ff9633] transition-colors text-xs md:text-sm">
      Sendtomadnan@gmail.com
    </a>
  </p>
</div>

      </div>
    </footer>
  );
}