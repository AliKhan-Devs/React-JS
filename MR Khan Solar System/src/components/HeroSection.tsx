import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';




export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
       
          autoPlay
          loop
          muted
          playsInline
          className="w-full min-h-screen object-cover"
        >
          <source
            src='../public/video.mp4'
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Power the <span className="text-[#fca903] ">Future</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8 ">
            Revolutionary solar solutions for a sustainable tomorrow. Join the clean energy revolution.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#fca903] to-[#FFEA00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
          >
            <Link to="/contact">Get Started</Link>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="float-animation">
            <Sun className="w-64 h-64 text-[#fca903] mx-auto rotate-3d" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FFEA00] opacity-20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}