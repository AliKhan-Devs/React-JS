import React from 'react';
import { FaSearch, FaLightbulb, FaCogs, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Processes = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-5xl font-bold mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our Proven Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Discovery Step */}
          <motion.div
            className="flex flex-col justify-center items-center bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaSearch className="text-6xl  mb-4 text-centere" />
            <h3 className="text-2xl font-semibold mb-4">1. Discovery</h3>
            <p className="text-lg">We dive deep into understanding your business, challenges, and goals to create a customized plan.</p>
          </motion.div>

          {/* Ideation Step */}
          <motion.div
            className="flex flex-col justify-center items-center bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaLightbulb className="text-6xl  mb-4" />
            <h3 className="text-2xl font-semibold mb-4">2. Ideation</h3>
            <p className="text-lg">We brainstorm creative strategies and solutions that align with your brand and target audience.</p>
          </motion.div>

          {/* Execution Step */}
          <motion.div
            className="flex flex-col justify-center items-center bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaCogs className="text-6xl  mb-4" />
            <h3 className="text-2xl font-semibold mb-4">3. Execution</h3>
            <p className="text-lg">We implement the plan, executing each step with precision and attention to detail.</p>
          </motion.div>

          {/* Launch Step */}
          <motion.div
            className="flex flex-col justify-center items-center bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaRocket className="text-6xl  mb-4" />
            <h3 className="text-2xl font-semibold mb-4">4. Launch</h3>
            <p className="text-lg">Finally, we launch your project to the world, optimizing for maximum impact and growth.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Processes;
