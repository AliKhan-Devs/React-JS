import React from 'react';
import { FaCode, FaShieldAlt, FaCogs, FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesIntro = () => {
  return (
    <section className='bg-cover bg-center' style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUfUIJmFTD1kLefcrzSvGe-2dHdDrrsfQ_w&s)' }}>
    <motion.div
    className='relative flex flex-col md:flex-row items-center justify-between p-6'
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    viewport={{ once: false }}
  
    >
      
        <div className="md:w-1/3 text-white">
          <h2 className="text-4xl font-bold text-blue-600 mb-4" style={{ textShadow: '1px 1px 2px white' }}>Services We Provide</h2>
          <p className="text-lg mb-6">
            At NexSky, we offer a comprehensive suite of services designed to meet all your digital needs. Our expertise includes:
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300">
            <Link to="/services">More Services</Link>
          </button>
        </div>

       
        <div className="md:w-1/2 mt-8 md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="cursor-pointer service-card cursor-pointer flex flex-col items-center justify-center p-4 bg-black bg-opacity-75 rounded-lg shadow-lg h-56 w-full sm:w-50 transform transition-transform duration-300 hover:scale-105">
            <FaCode size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
          </div>
          <div className="cursor-pointer service-card cursor-pointer flex flex-col items-center justify-center p-4 bg-black bg-opacity-75 rounded-lg shadow-lg h-56 w-full sm:w-50 transform transition-transform duration-300 hover:scale-105">
            <FaShieldAlt size={48} className="text-blue-600 mb-4 " />
            <h3 className="text-center text-xl font-bold text-white mb-2">Cybersecurity Consulting</h3>
          </div>
          <div className="cursor-pointer fservice-card cursor-pointer flex flex-col items-center justify-center p-4 bg-black bg-opacity-75 rounded-lg shadow-lg h-56 w-full sm:w-50 transform transition-transform duration-300 hover:scale-105">
            <FaCogs size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">DSA/C++ Solutions</h3>
          </div>
          <div className="cursor-pointer fservice-card cursor-pointer flex flex-col items-center justify-center p-4 bg-black bg-opacity-75 rounded-lg shadow-lg h-56 w-full sm:w-50 transform transition-transform duration-300 hover:scale-105">
            <FaMobileAlt size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
          </div>
        </div>

     </motion.div>
    </section>
  );
};

export default ServicesIntro;
