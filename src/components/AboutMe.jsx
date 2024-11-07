import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Title */}
        <h2  style={{ fontFamily: 'Playfair Display , sans-serif' }} className="text-4xl font-bold  text-center mb-8">About Me</h2>
        
        <div className="flex max-w-full flex-col md:flex-row-reverse justify-around items-center gap-12">
          
          {/* Image Section */}
          <motion.div
            className=" md:w-[50%] w-full rounded-xl bg-gray-200 dark:bg-gray-700 overflow-hidden shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://i.ibb.co.com/3s9xVBX/programming-home-118813-4357.jpg" // Replace with your own picture URL
              alt="Profile"
              className="w-[100%] md:w-full h-auto object-cover "
            />
          </motion.div>
          
          {/* Text Section */}
          <motion.div
            className="text-center md:w-[50%] w-full justify-items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="text-lg mb-4">

              Hello! I'm <span className="font-bold text-green-500">Md. Mehedi Hasan</span>, a passionate <span className="text-indigo-500">MERN stack developer</span> from Bangladesh. I love creating interactive, dynamic web applications and continuously strive to improve my skills.
            </p>
            <p
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="text-lg mb-4">
              With a strong foundation in <span className="font-semibold">javaScript,React, Node.js, Express js and MongoDB for DataBase</span>, I enjoy building projects that solve real-world problems and offer excellent user experiences.
            </p>
            <p
            
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="text-lg mb-4">
              When I'm not coding, I enjoy reading, playing sports, and exploring new technologies. I'm driven to succeed in the field of web development and am excited to bring innovative solutions to life!
            </p>
            
            {/* Add animated buttons for action */}
            <div className="flex justify-center md:justify-start mt-6 gap-4">
              <motion.a
                href="#projects"
                className="bg-green-500 dark:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600  transition"
                whileHover={{ scale: 1.05 }}
              >
                View My Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="border border-green-500 dark:border-indigo-600 text-green-500 dark:text-indigo-600 dark:hover:text-white  px-4 py-2 rounded-lg shadow-lg dark:hover:bg-indigo-600 hover:bg-green-600 hover:text-white transition"
                whileHover={{ scale: 1.05 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
