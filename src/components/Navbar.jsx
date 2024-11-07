import React, { useState } from "react";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-6 md:px-16">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-4xl font-extralight text-green-400 drop-shadow-2xl dark:text-indigo-400" style={{ fontFamily: 'Lobster, sans-serif' }}>
  MD. Mehedi Hasan
</h1>


        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li><a href="#projects" className="text-gray-700 font-bold dark:text-gray-300 hover:text-green-400 duration-300">Projects</a></li>
          <li><a href="#experiences" className="text-gray-700 font-bold dark:text-gray-300 hover:text-green-400 duration-300">Experiences</a></li>
          <li><a href="#contact" className="text-gray-700 font-bold dark:text-gray-300 hover:text-green-400 duration-300">Contact</a></li>
          <li><a href="#about" className="text-gray-700 font-bold dark:text-gray-300 hover:text-green-400 duration-300">About me</a></li>
          <DarkModeToggle />
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-100 dark:bg-gray-900 z-50 flex flex-col items-center space-y-6 pt-24"
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <a href="#projects" className="text-xl font-bold text-gray-700 dark:text-gray-300 hover:text-green-600" onClick={toggleMenu}>Projects</a>
            <a href="#experiences" className="text-xl font-bold text-gray-700 dark:text-gray-300 hover:text-green-600" onClick={toggleMenu}>Experiences</a>
            <a href="#contact" className="text-xl font-bold text-gray-700 dark:text-gray-300 hover:text-green-600" onClick={toggleMenu}>Contact</a>
            <a href="#about" className="text-xl font-bold text-gray-700 dark:text-gray-300 hover:text-green-600" onClick={toggleMenu}>About me</a>
            <DarkModeToggle />
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
