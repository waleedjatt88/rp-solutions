// src/servicesData.js

// IMPORTANT: Put your images in the 'src/assets' folder
// and update the import paths below.
import janitorialImg from '../assets/janitorial.png';
import carpenterImg from '../assets/carpenter.png';
import housekeeperImg from '../assets/house keeper.png';
import acTechnicianImg from '../assets/Ac tech.png';
import welderImg from '../assets/wellder.png';
import poolCleaningImg from '../assets/pool cleaner.png';
import plumberImg from '../assets/plumber.png';
import electricianImg from '../assets/electrition.png';

export const services = [
  {
    name: 'Janitorial Services',
    description: 'Maintaining cleanliness and hygiene in offices, homes, and public spaces to create healthier environments.',
    image: janitorialImg,
  },
  {
    name: 'Carpenter Services',
    description: 'Offering precision carpentry for repairs, installations, and custom furniture with craftsmanship you can trust.',
    image: carpenterImg,
  },
  {
    name: 'House Keeper Services',
    description: 'Dedicated housekeeping services to keep your space organized, clean, and welcoming with attention to detail.',
    image: housekeeperImg,
  },
  {
    name: 'AC-Technician Services',
    description: 'Expert AC installation, maintenance, and repair services to maintain optimal cooling performance.',
    image: acTechnicianImg,
  },
  {
    name: 'Welder Services',
    description: 'High-quality welding solutions for various materials and structures, ensuring durability and safety.',
    image: welderImg,
  },
  {
    name: 'Pool Cleaning',
    description: 'Comprehensive pool cleaning and maintenance to keep your swimming area pristine and safe.',
    image: poolCleaningImg,
  },
  {
    name: 'Plumber Services',
    description: 'Prompt and professional plumbing services for repairs, installations, and maintenance issues.',
    image: plumberImg,
  },
  {
    name: 'Electrician Services',
    description: 'Reliable electrical services from installations to troubleshooting for homes and businesses.',
    image: electricianImg,
  },
];