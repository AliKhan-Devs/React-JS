import React from 'react';
import { motion } from 'framer-motion';

// Replace these URLs with your actual project images
const projects = [
  {
    title: 'Project One',
    image: 'https://static.dezeen.com/uploads/2021/08/University-for-the-Creative-Arts_dezeen_2364_col_2-2.jpg',
    direction: 'down', // This can be 'up' or 'down'
  },
  {
    title: 'Project Two',
    image: 'https://web.dev/static/learn/accessibility/card.png',
    direction: 'up', // This can be 'up' or 'down'
  },
  {
    title: 'Project Three',
    image: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp',
    direction: 'down', // This can be 'up' or 'down'
  },
  {
    title: 'Project Four',
    image: 'https://cwcreative.com/assets/image-cache/blog/self_promotion_for_graphic_designers.65284766.jpg',
    direction: 'up', // This can be 'up' or 'down'
  },
];

const Feature = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-5xl font-bold mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative flex justify-center items-center ${project.direction === 'up' ? 'md:mt-16' : 'md:mb-16'}`}
              whileHover={{ scale: 1.05, rotate: project.direction === 'up' ? -3 : 3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl shadow-xl transform transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
