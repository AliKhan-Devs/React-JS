import { motion } from 'framer-motion';
import { FaBullhorn, FaPenFancy, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: FaBullhorn,
    title: 'Digital Strategy',
    description: 'Innovative solutions to transform your digital presence and drive results.',
  },
  {
    icon: FaPenFancy,
    title: 'Content Marketing',
    description: 'Create and distribute valuable content to attract and engage your target audience.',
  },
  {
    icon: FaChartLine,
    title: 'Social Media',
    description: 'Leverage social platforms to grow your brand and reach a wider audience.',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const iconVariants = {
  animate: { rotate: [-30, -20, -40, -30], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
};

function OurServices() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our Services
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <motion.div
                className="text-5xl text-black mb-6"
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: 'spring', stiffness: 300 }}
                variants={iconVariants}
              >
                <service.icon />
              </motion.div>
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OurServices;
