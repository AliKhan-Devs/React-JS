import React from 'react';
import { FaLaptopCode, FaChartLine, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-white text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-5xl font-bold mb-16 text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Innovative Solutions */}
          <motion.div
            className="bg-black p-8 flex flex-col justify-center items-center rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaLaptopCode className="text-6xl text-white mb-4" />
            <h3 className="text-3xl font-semibold mb-4">Innovative Solutions</h3>
            <p className="text-lg">We use cutting-edge technology and creative strategies to provide bespoke solutions for your brand.</p>
          </motion.div>

          {/* Proven Results */}
          <motion.div
            className="bg-black flex flex-col justify-center items-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaChartLine className="text-6xl text-white mb-4" />
            <h3 className="text-3xl font-semibold mb-4">Proven Results</h3>
            <p className="text-lg">Our data-driven approach ensures measurable results that enhance your ROI and business growth.</p>
          </motion.div>

          {/* Client-Centric Approach */}
          <motion.div
            className="bg-black flex flex-col justify-center items-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaUsers className="text-6xl text-white mb-4" />
            <h3 className="text-3xl font-semibold mb-4">Client-Centric Approach</h3>
            <p className="text-lg">We prioritize your goals and work closely with you to ensure tailored strategies that meet your needs.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
