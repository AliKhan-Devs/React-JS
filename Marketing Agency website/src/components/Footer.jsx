import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center md:grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6"><a href="/">Digital Dreamscape</a></h3>
            <p className="text-gray-400">
              Transform your digital presence with our cutting-edge marketing solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Content Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Social Media</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center"
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer