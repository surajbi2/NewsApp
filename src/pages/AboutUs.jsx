import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen m-5">
      <Navbar />
      <div className="flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl w-full text-center"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            About Us
          </motion.h2>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 mb-6 text-lg leading-relaxed"
          >
            Welcome to <strong>Latest News</strong>, your **trusted source** for real-time updates. 
            We bring you the latest stories from around the world, ensuring you stay informed at all times.
          </motion.p>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">🌍 Our Mission</h3>
            <p className="text-gray-600 mb-4">
              We aim to deliver **accurate, unbiased**, and **up-to-date news** from across the globe. 
              Our goal is to empower readers with well-researched and credible content.
            </p>
          </motion.div>

          {/* What We Offer */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">🚀 What We Offer</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>📢 **Live** news updates from trusted sources</li>
              <li>🌎 **Global** coverage across multiple categories</li>
              <li>📑 **Quick access** to full articles</li>
              <li>📱 A **seamless, mobile-friendly** experience</li>
            </ul>
          </motion.div>

          {/* Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">📩 Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              Have questions or suggestions? 
              <a href="/contact" className="text-blue-600 font-medium hover:underline"> Contact us here</a>.
            </p>
          </motion.div>

          {/* Call-to-Action Button */}
          <motion.a
            href="/contact"
            className="inline-block bg-blue-500 text-white px-6 py-3 mt-4 rounded-full font-semibold text-lg shadow-md 
                      hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            📩 Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
