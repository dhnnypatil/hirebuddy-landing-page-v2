import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-dark-900 shadow-sm backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-dark-100">
              Hire<span className="text-red-600">B</span>uddy
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
              Features
            </a>
            <a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
              For Job Seekers
            </a>
            <a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
              For Employers
            </a>
            <a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
              Pricing
            </a>
          </nav>
          
          {/* Right side buttons */}
          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-dark-800 mr-4 text-gray-700 dark:text-dark-200 hover:bg-gray-300 dark:hover:bg-dark-850"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 ml-2 bg-red-600 text-white rounded-lg text-sm font-medium"
            >
              Sign In
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 ml-2 bg-gray-800 dark:bg-dark-800 text-white rounded-lg text-sm font-medium"
            >
              Get Started
            </motion.button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-850 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatedMobileMenu isOpen={isMenuOpen} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </header>
  );
};

const AnimatedMobileMenu = ({ isOpen, toggleTheme, isDarkMode }) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
      className="md:hidden overflow-hidden bg-white dark:bg-dark-900"
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-850">
          Features
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-850">
          For Job Seekers
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-850">
          For Employers
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-850">
          Pricing
        </a>
        <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-dark-800">
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-dark-800 text-gray-700 dark:text-dark-200 hover:bg-gray-300 dark:hover:bg-dark-850 flex items-center"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium">
              Sign In
            </button>
            <button className="px-4 py-2 bg-gray-800 dark:bg-dark-800 text-white rounded-lg text-sm font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
