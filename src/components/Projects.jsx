// src/components/Projects.jsx

import React, { useState,  useCallback } from 'react';
import { FaArrowRight } from 'react-icons/fa'; 
import { motion } from 'framer-motion'; 

import janitorialImage from '../assets/janitorial.png'; 
import carpenterImage from '../assets/Ac tech.png'; // Ac technician image
import housekeeperImage from '../assets/wellder.png'; // Welder services image
import acTechImage from '../assets/plumber.png'; // Plumber services image
import welderImage from '../assets/pool cleaner.png';// Pool cleaning image
import poolCleaningImage from '../assets/electrition.png';// Electrician services image
import plumberImage from '../assets/govt.png';//Carpenter services image 
import electricianImage from '../assets/houserenovation (1).png';// genral services image
import generalServicesImage from '../assets/janitorialproject.png';// Janitorial services image

const cardImages = [
    janitorialImage, 
    carpenterImage,
    housekeeperImage,
    acTechImage,
    welderImage,
    poolCleaningImage,
    plumberImage,
    electricianImage,
    generalServicesImage,
];

const contentData = [
        { name: 'CARPENTER SERVICES', text: 
            'In August 2025, RP Solutions Private Limited successfully completed the furnishing work at Pakistan Council of Scientific & Industrial Research (PCSIR) Laboratory, Islamabad. The project included providing chairs, tables, glass installation, & curtains.' 
        },
        { name: 'GENERAL SERVICES', text:
         'Project Delivered in Pakistan Town Islamabad. -Paint-Polish work -Electrical work -Wood Work -Carpenter -General Cleaning work  or a wide range of general maintenance services to meet various household and commercial needs. No task is too small or complex for our skilled team.#maintanance #project #houserenovation #clientclosed #islamabad #pakistan' 
        },
    { name: 'JANITORIAL SERVICES', text: 
'Providing top-quality cleaning services across Islamabad, Rawalpindi, and Lahore — including house cleaning, office cleaning, dusting, gardening, and solar panel cleaning. Our trained team ensures a hygienic, fresh, and spotless environment every time.'     },
    { name: 'HOUSE KEEPER SERVICES', text:
         'Dedicated housekeeping services to keep your space organized, clean, and welcoming. Our reliable housekeepers work with attention to detail, ensuring your comfort.' 
        },
    { name: 'AC-TECHNICIAN SERVICES', text:
         'Expert AC installation, maintenance, and repair services. We help maintain optimal cooling performance while saving on energy costs.' 
        },
    { name: 'WELDER SERVICES', text: 
        'High-quality welding solutions for various materials and structures. Our skilled welders ensure durability and safety in every project.' 
    },
    { name: 'POOL CLEANING', text: 
        'Comprehensive pool cleaning and maintenance services to keep your swimming area pristine and safe. From debris removal to water treatment, we handle it all.'
     },
    { name: 'PLUMBER SERVICES', text:
         'Prompt and professional plumbing services for repairs, Installations, and maintenance. We address inalo, blockages, and other issues to ensure smooth water flow.' 
        },
    { name: 'ELECTRICIAN SERVICES', text:
         'Reliable electrical services from installations to troubleshooting. We ensure safe and efficient solutions for homes and businesses.'
         },
    
];

const cardStyles = [
    { '--x': 'calc(-50% + 150px)', 'transform': 'translate(var(--x), -50%) scale(0.75)', 'zIndex': 1 },
    { '--x': 'calc(-50% + 90px)', 'transform': 'translate(var(--x), -50%) scale(0.85)', 'zIndex': 2 }, 
    { '--x': 'calc(-50% + 60px)', 'transform': 'translate(var(--x), -50%) scale(0.9)', 'zIndex': 3 },  
    { '--x': 'calc(-50% + 30px)', 'transform': 'translate(var(--x), -50%) scale(0.95)', 'zIndex': 4 }, 
    { '--x': 'calc(-50%)', 'transform': 'translate(var(--x), -50%) scale(1)', 'zIndex': 5 },           
    { '--x': 'calc(-50% - 30px)', 'transform': 'translate(var(--x), -50%) scale(1.05)', 'zIndex': 6 }, 
    { '--x': 'calc(-50% - 60px)', 'transform': 'translate(var(--x), -50%) scale(1.1)', 'zIndex': 7, 'boxShadow': '0 1px 5px 5px rgba(255, 193, 111, 0.5)' }, // 1st (Front)
];


const Projects = () => {
    const initialCards = cardImages.slice(0, contentData.length).reverse();
    const [currentCards, setCurrentCards] = useState(initialCards);
    const [currentContentIndex, setCurrentContentIndex] = useState(0); 
    const [isSwapping, setIsSwapping] = useState(false);
    
    const moveCard = useCallback(() => {
        if (isSwapping) return;
        setIsSwapping(true);
        
        const stackElement = document.querySelector('.stack');
        const frontCard = stackElement.lastElementChild;
        
        if (frontCard) {
             frontCard.classList.add('swap');
        }

        setTimeout(() => {
            setCurrentCards(prevCards => {
                const newCards = [...prevCards];
                const cardToMove = newCards.pop(); 
                newCards.unshift(cardToMove); 
                return newCards;
            });
            
            setCurrentContentIndex(prevIndex => (prevIndex + 1) % contentData.length);
            
            if (frontCard) {
                frontCard.classList.remove('swap');
            }
            setIsSwapping(false);
        }, 1500); 
    }, [isSwapping]);


    
    
    
    const handleNextClick = () => {
        moveCard();
    };

    const handleCardClick = (index) => {
        if (index === 0) {
            moveCard();
        }
    };


    return (
        <main id='projects' className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[4fr_3fr] lg:grid-rows-1 place-items-center min-h-screen bg-gradient-to-br from-[#55566a] to-[#131318]">
            
            <div className="content lg:pl-[120px] lg:pr-0 px-6 pt-6 pb-2 text-center lg:text-left text-[#c7c7c7c9] user-select-none lg:order-none order-2">
                <h1 
                    className="font-serif text-xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3"
                    style={{ 
                        background: '-webkit-linear-gradient(0deg, #ff9633, #ffc16f)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {contentData[currentContentIndex].name} 
                </h1>
                <p className="text-m md:text-lg text-justify leading-relaxed lg:pr-[100px] mb-4">
                    {contentData[currentContentIndex].text} 
                </p>
               <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center justify-center gap-3 bg-[#ff9633] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-200 cursor-pointer hover:shadow-xl hover:scale-[0.98] mx-auto lg:mx-0"
                    onClick={handleNextClick}
                >
                    NEXT
                    <div className="transition-transform duration-300 group-hover:translate-x-1">
                        <FaArrowRight className="w-4 h-4" /> 
                    </div>
                </motion.button>
            </div>

            <div className="stack relative w-full h-[500px] lg:h-full flex items-center justify-center lg:order-none order-1 mt-4">
                {currentCards.map((image, index) => {
                    const styleIndex = currentCards.length - 1 - index; 
                    const styles = cardStyles[styleIndex] || cardStyles[cardStyles.length - 1]; 

                    return (
                        <div
                            key={image} 
                            className={`card absolute transform-gpu w-[280px] h-[300px] sm:w-[450px] sm:h-[500px] rounded-[2rem] shadow-2xl transition-transform duration-600 ease-out`}
                            style={{
                                top: '',
                                left: '',
                             
                                transform: styles.transform,
                                zIndex: styles.zIndex,
                                boxShadow: styles.boxShadow || '0 5px 10px 0 rgba(0, 0, 0, 0.25), 0 15px 20px 0 rgba(0, 0, 0, 0.125)',
                            }}
                            onClick={() => handleCardClick(index)} 
                        >
                            <img src={image} alt={`Card ${index + 1}`} className="block w-full rounded-[2rem] h-full rounded-inherit object-cover pointer-events-none" />
                        </div>
                    );
                })}
            </div>
            
        </main>
    );
};

export default Projects;