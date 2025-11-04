import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa'; 


import ceoImage from '../assets/ceo.jpg'; 
import partner1Image from '../assets/partner 1.jpg';
import partner2Image from '../assets/partner 2.jpg'; 
import partner3Image from '../assets/comp partner1.jpg'; 
import logoImage from '../assets/comp partner 2.jpg'; 


const carouselData = [
    {
        name: ' Riffat Prince',
        title: 'Chief Executive Officer',
        // des: 'A visionary leader with 05+ years of strategic experience, driving the company towards innovation and excellence.',
        image: ceoImage,
        type: 'CEO',
        fullDes: " A visionary leader with 05+ years of strategic experience, driving the company towards innovation and excellence Our CEO's commitment to integrity and client-centric solutions has been the cornerstone of RP Solutions' success. They foster a culture of continuous learning and growth, ensuring our team is always at the forefront of the industry. The long-term vision includes expanding our reach into global markets and investing heavily in sustainable technologies."
    },
    {
        name: 'Jinglecred ',
        title: 'jinglecred digital finance limited',
        // des: 'Expert in IT Solutions and Digital Transformation, ensuring project success.',
        image: partner1Image,
        type: 'Partner',
        fullDes:
"We are deeply thankful to Jinglecred Digital Finance Limited for inviting RP Solutions Pvt. Ltd. on the occasion of their successful two-year journey.It is a matter of great pride that RP Solutions Pvt. Ltd. has been providing services and standing as a trusted partner with Jinglecred for the past two years.On behalf of our (CEO), Riffat Prince, and the entire team, we extend warm congratulations to Jinglecred Digital Finance Limited. We look forward to continuing this strong partnership with even greater achievements in the future.✨🔥✌#rpsoutions #jinglecred"
  },
    {
        name: 'ThankFull ',
        title: 'Jinglecred Digital Finance Limited',
        // des: 'Driving financial growth and securing investments for future projects.',
        image: partner2Image,
        type: 'Partner',
        fullDes:
"We are deeply thankful to Jinglecred Digital Finance Limited for inviting RP Solutions Pvt. Ltd. on the occasion of their successful two-year journey.It is a matter of great pride that RP Solutions Pvt. Ltd. has been providing services and standing as a trusted partner with Jinglecred for the past two years.On behalf of our (CEO), Riffat Prince, and the entire team, we extend warm congratulations to Jinglecred Digital Finance Limited. We look forward to continuing this strong partnership with even greater achievements in the future.✨🔥✌ # rpsolutions #jinglecred"
    },
    {
        name: 'Mehwar Productions',
        title: 'Corporate Partner',
        // des: 'Focuses on team building and operational efficiency across all departments.',
        image: partner3Image,
        type: 'Partner',
fullDes: "We're delighted to extend our operations with a strong handshake to Mehwar Productions, building on the foundation set by Partnership. Partnership is truly the backbone of our internal success, ensuring a positive and productive work environment that directly elevates the quality of service we provide. Their top priorities, team morale and quick problem-solving, are crucial for both our internal teams and external partnerships."    },
    {
        name: 'The Bridge',
        title: 'Corporate Partner',
        // des: 'Our Commitment: Best Service, Right Time, Right Solution.',
        image: logoImage, 
        type: 'Partner',
fullDes: "At The Bridge Company, our name reflects our dedication to seamless transitions and unwavering support. We build sturdy connections between challenges and solutions, ensuring our clients can confidently cross any operational divide. We pride ourselves on creating clear pathways forward and anticipate a strong partnership with you."    },
];


const DetailsModal = ({ item, onClose }) => {
    const modalClasses = item 
        ? "translate-y-0 opacity-100" 
        : "translate-y-full opacity-0 pointer-events-none";

    return (
        <div 
            className={`fixed inset-0 bg-black/80 flex items-end justify-center z-[9999] transition-opacity duration-500 ${item ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <div 
                className={`w-full max-w-4xl bg-white p-6 sm:p-8 rounded-t-2xl shadow-2xl transform transition-transform duration-700 ease-out ${modalClasses}`}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-500 hover:text--[#ff9633] transition"
                >
                    <FaTimes className="w-6 h-6" />
                </button>
                
                <h2 className="text-lg sm:text-3xl font-extrabold text-gray-900 mb-2">{item?.name} <span className="text-sm sm:text-base font-medium text-gray-500">({item?.title})</span></h2>
                <h3 className="text-m sm:text-lg font-semibold text-[#ff9633] mb-4">{item?.type}</h3>
                
                <div className="flex flex-col md:flex-row gap-6 max-h-[70vh] overflow-y-auto">
                    <img 
                        src={item?.image} 
                        alt={item?.name} 
                        className="w-full md:w-1/3 h-48 md:h-64 object-cover rounded-xl shadow-lg"
                    />
                    <p className="text-gray-700 text-base text-justify sm:text-lg whitespace-pre-wrap md:w-2/3">
                        {item?.fullDes}
                    </p>
                </div>
            </div>
        </div>
    );
};



const Profile = () => {
    const [items, setItems] = useState(carouselData);
    const [selectedItem, setSelectedItem] = useState(null); 

    const handleNext = () => {
        setItems(prevItems => {
            const newItems = [...prevItems];
            const firstItem = newItems.shift();
            newItems.push(firstItem);
            return newItems;
        });
    };

    const handlePrev = () => {
        setItems(prevItems => {
            const newItems = [...prevItems];
            const lastItem = newItems.pop();
            newItems.unshift(lastItem);
            return newItems;
        });
    };

    const handleSeeMore = (item) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };


    const getItemStyles = (index) => {
        const isVisible = index < 4;
        const opacity = isVisible ? 1 : 0;
        const zIndex = items.length - index;

       
        
        let width = index === 0 ? '85vw' : '150px';
        let height = index === 0 ? '300px' : '220px';
        let left = '50%';
        let transform = index === 0 ? 'translateX(-50%)' : `scale(0.8) translateX(calc(-50% + ${index * 60}px))`;
        
        if (window.innerWidth >= 768) { 
            width = index === 0 ? '600px' : '200px';
            height = index === 0 ? '400px' : '300px';
            left = index === 0 ? '20%' : '65%';
            transform = {
                0: 'scale(1) translateX(0)',           
                1: 'scale(0.5) translateX(100%)',      
                2: 'scale(0.5) translateX(110%)',      
                3: 'scale(0.5) translateX(120%)',      
            }[index] || 'scale(0) translateX(100%)';
        }

        return {
            opacity,
            zIndex,
            left,
            transform,
            width,
            height,
        };
    };

    return (
        <div id="profile" className="relative h-screen w-full flex items-center justify-center bg-gray-900 overflow-hidden">
            
            <div className="relative w-full max-w-7xl h-[600px] md:h-[700px] lg:h-[800px]">
                
                <div className="absolute inset-0">
                    {items.map((item, index) => {
                        const styles = getItemStyles(index);
                        const isMainCard = index === 0;

                        return (
                            <div
                                key={item.name}
                                className={`
                                    item absolute top-1/4 -translate-y-1/2 
                                    bg-cover rounded-xl shadow-2xl transition-all duration-700
                                `}
                                style={{
                                    ...styles,
                                    backgroundImage: `url(${item.image})`,
                                }}
                            >
                                {isMainCard && (
                                    <div className="content absolute bottom-0 p-6 sm:p-8 text-white bg-gradient-to-t from-black/80 to-transparent w-full h-full flex flex-col justify-end">
                                        <div className="name text-xl sm:text-3xl font-extrabold mb-1">{item.name}</div>
                                        <div className="title text-m sm:text-lg font-semibold mb-2">{item.title}</div>
                                        <div className="des text-sm sm:text-m mb-2 sm:mb-6 max-w-md">{item.des}</div>
                                        
                                        <button
                                            onClick={() => handleSeeMore(item)}
                                            className="btn-14 relative inline-block  py-2 px-6 rounded-full text-base font-bold text-white overflow-hidden group w-fit"
                                        >
                                            <span 
                                                className="absolute inset-0 transition-all duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                                                style={{ 
                                                    backgroundImage: 'linear-gradient(315deg, #ff9633 45%, #f6fc9c 74%)', 
                                                    zIndex: -1,
                                                    filter: 'drop-shadow(2px 2px 2px rgba(255,255,255,.5)) drop-shadow(7px 7px 20px rgba(0,0,0,.1))' 
                                                }}
                                                aria-hidden="true"
                                            ></span>
                                            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                                                See More
                                            </span>
                                        </button>
                                    </div>
                                )}
                                
                                {!isMainCard && (
                                    <div className="w-full h-full bg-cover rounded-xl" style={{ backgroundImage: `url(${item.image})` }}></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-[calc(20%+300px)] md:translate-x-0 flex space-x-4 z-50">
                <button 
                    className="prev p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors duration-300"
                    onClick={handlePrev}
                >
                    <FaAngleLeft className="w-5 h-5" />
                </button>
                <button 
                    className="next p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors duration-300"
                    onClick={handleNext}
                >
                    <FaAngleRight className="w-5 h-5" />
                </button>
            </div>

            

            <DetailsModal item={selectedItem} onClose={handleCloseModal} />
        </div>
    );
};

export default Profile;