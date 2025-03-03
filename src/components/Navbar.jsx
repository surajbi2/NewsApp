import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-20 rounded-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Latest News
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          className="hidden md:flex gap-8 font-semibold"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {['Home', 'About', 'Contact'].map((item, index) => (
            <li key={index}>
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`}
                className="relative px-3 py-2 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-400 hover:before:w-full before:transition-all"
              >
                {item}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden flex flex-col bg-gray-900 text-white mt-4 p-4 rounded-lg space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {['Home', 'About', 'Contact'].map((item, index) => (
              <li key={index}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`}
                  className="block text-center py-2 hover:text-blue-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
