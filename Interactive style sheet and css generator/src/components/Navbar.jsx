import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaPalette, FaGithub, FaSave, FaCog, FaUser, 
  FaBookmark, FaMoon, FaSun, FaBell, FaFolder
} from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import SavedStyles from './SavedStyles';
import useStyleStore from '../store/styleStore';

function Navbar() {
  const [showSettings, setShowSettings] = useState(false);
  const [showSavedStyles, setShowSavedStyles] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();
  const { addStyle } = useStyleStore();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-gray-400' : 'hover:bg-gray-400';
  };

  const handleSaveStyle = () => {
    // Get current styles from your style panel
    const currentStyles = {
      elementType: 'Button', // This should be dynamic based on selected element
      styles: {
        'background-color': '#000000',
        'color': '#ffffff',
        'padding': '1rem 2rem',
        // Add more styles as needed
      }
    };

    addStyle(currentStyles);
    toast.success('Style saved successfully!');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    toast.success(`Switched to ${isDarkMode ? 'light' : 'dark'} mode`);
  };

  return (
    <>
      <Toaster position="top-right" />
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <FaPalette className="text-black dark:text-white text-3xl transform group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-black dark:text-white font-bold text-xl tracking-wide">CSSMaster</span>
              </Link>

              <div className="hidden md:flex space-x-1">
                <Link to="/interactive-lab" className={`px-4 py-2 rounded-lg text-black dark:text-gray-300 transition-colors ${isActive('/interactive-lab')}`}>
                  Lab
                </Link>
                <Link to="/tutorials" className={`px-4 py-2 rounded-lg text-black dark:text-gray-300 transition-colors ${isActive('/tutorials')}`}>
                  Tutorials
                </Link>
                <Link to="/challenges" className={`px-4 py-2 rounded-lg text-black dark:text-gray-300 transition-colors ${isActive('/challenges')}`}>
                  Challenges
                </Link>
                <Link to="/resources" className={`px-4 py-2 rounded-lg text-black dark:text-gray-300 transition-colors ${isActive('/resources')}`}>
                  Resources
                </Link>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleSaveStyle}
                className="flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-800 dark:hover:bg-gray-100"
              >
                <FaSave className="text-lg" />
                <span className="font-medium">Save Style</span>
              </button>

              <button
                onClick={() => setShowSavedStyles(true)}
                className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Saved Styles"
              >
                <FaFolder className="text-xl" />
              </button>

              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Toggle Theme"
              >
                {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setShowSettings(!showSettings)}
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <FaCog className="text-xl" />
                </button>

                {showSettings && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                    <button className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Account Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Preferences
                    </button>
                    <button className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Keyboard Shortcuts
                    </button>
                  </div>
                )}
              </div>

              <button className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                <FaUser className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SavedStyles isOpen={showSavedStyles} onClose={() => setShowSavedStyles(false)} />
    </>
  );
}

export default Navbar;