import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen m-5">
      <Navbar />
      <div className="flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }} 
          className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.5 }} 
            className="text-4xl font-bold text-gray-800 text-center mb-6"
          >
            Contact Us
          </motion.h2>

          <p className="text-gray-600 mb-6 text-lg text-center">
            Have questions? Feel free to reach out to us. We’d love to hear from you!
          </p>

          <form className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.3, duration: 0.6 }} 
            >
              <label className="block text-gray-700 font-semibold">Your Name</label>
              <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Suraj Kumar" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.4, duration: 0.6 }} 
            >
              <label className="block text-gray-700 font-semibold">Your Email</label>
              <input type="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="surajkumar@example.com" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.5, duration: 0.6 }} 
            >
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4" placeholder="Your message..."></textarea>
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
