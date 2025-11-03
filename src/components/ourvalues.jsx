// src/components/OurValues.jsx

import React from 'react';
import { BsBullseye, BsLightbulb, BsGem, BsFlag } from 'react-icons/bs';

const OurValues = () => {
    
  const coreValues = [
    {
      title: "Our Mission",
      description: "We aim to deliver comprehensive services with a focus on quality and customer satisfaction. By staying adaptive and innovative, we strive to be the go-to choice for maintenance and technical services.",
      icon: <BsBullseye className="w-9 h-9 text-white" />, 
      iconColor: 'from-[#ff9633] to-[#ffb033]',
    },
    {
      title: "Our Vision",
      description: "To be recognized as a leader in quality and dependable services, supporting communities with innovative and professional solutions.",
      icon: <BsLightbulb className="w-9 h-9 text-white" />,
      iconColor: 'from-[#ff9633] to-[#ffb033]',
    },
    {
      title: "Why Choose Us",
      description: [ 
        "Skilled and trained technicians in every service area.",
        "Consistent and dependable solutions for every project.",
        "Dedicated to meeting and exceeding client expectations.",
        "Committed to maintaining the highest standards in all services.",
      ],
      icon: <BsGem className="w-9 h-9 text-white" />,
      iconColor: 'from-[#ff9633] to-[#ffb033]',
    },
  ];

  const themeColor = {
    primary: "text-[#ff9633]",
    bgGradient: "bg-gradient-to-br from-[#ff9633] via-[#ffb033] to-[#ffc400]",
  };

  return (
    <section id='core' className="bg-white font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <p className="mt-2 text-3xl font-extrabold text-[#ff9633] sm:text-4xl">
              Our Core Principles
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                Delivering Quality, Trust, and Exceptional Results Every Time.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {coreValues.map((value) => (
            <div key={value.title} className={`p-1.5 rounded-t-[60px] rounded-b-[20px] ${themeColor.bgGradient} shadow-2xl`}>
                <div className="relative bg-white rounded-t-[60px] rounded-b-[12px] h-full p-6 text-center flex flex-col items-center">
                    
                    <div className="absolute top-6 right-8">
                        <BsFlag className={`w-8 h-8 ${themeColor.primary}`}/>
                    </div>

                    <div className={`-mt-14 w-20 h-20 flex items-center justify-center bg-gradient-to-br ${value.iconColor} rounded-full shadow-lg border-4 border-white`}>
                        {value.icon}
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-gray-700">{value.title}</h3>

                    <div className="mt-3 text-gray-500 flex-grow">
                        {Array.isArray(value.description) ? (
                            <ul className="text-justify space-y-1">
                                {value.description.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        ) : (
                            <p className='text-justify'>{value.description}</p>
                        )}
                    </div>
                    
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;