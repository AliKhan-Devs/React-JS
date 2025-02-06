import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold">Digital Dreamscape</Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-lg font-medium hover:text-gray-300 transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block py-2 text-lg hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;