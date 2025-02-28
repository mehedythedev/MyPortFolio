import React from "react";
import { motion } from "framer-motion";


function Hero() {
  return (
    <>
  
    <motion.section
    
      className="text-center py-20 bg-gray-100 dark:bg-gray-800"
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hello, I’m a MERN Stack Developer
      </motion.h2>
      <motion.p
        className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I specialize in creating full-stack web applications with a focus on efficiency and user experience.
      </motion.p>
      <motion.button
        className="mt-8 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View My Work
      </motion.button>
    </motion.section>
    </>
  );
}

export default Hero;
