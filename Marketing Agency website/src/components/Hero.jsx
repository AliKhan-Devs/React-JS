import { motion } from 'framer-motion';
import { FaBullhorn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative h-screen flex flex-col md:flex-row items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2016/08/22/4760-179739327_large.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-lg text-center md:text-left"
          >
            <h1 className="text-6xl py-20 md:py-0 md:text-8xl font-bold mb-6 flex items-center justify-center md:justify-start">
              Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Transform your digital presence with cutting-edge marketing solutions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 text-lg font-bold rounded-full hover:bg-gray-200 transition-colors"
            >
             <Link to="/contact"> Get Started</Link>
            </motion.button>
          </motion.div>
          <div className="mt-8 md:mt-0">
          <motion.div animate={{ rotate: [-30, -20, -40, -30] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="text-white text-9xl md:text-[20rem]" > <FaBullhorn /> </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
