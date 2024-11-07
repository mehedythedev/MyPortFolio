import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaUsers, FaTasks, FaBriefcase, FaComments, FaCloud } from "react-icons/fa"; // Import icons

// Define projects with icons
const projects = [
  { 
    title: "E-commerce Store", 
    description: "An online store built with React and Node.js.",
    icon: <FaShoppingCart className="text-4xl dark:text-indigo-700 text-green-500 mb-4" /> // E-commerce icon
  },
  { 
    title: "Social Media App", 
    description: "A social platform with real-time chat and feeds.",
    icon: <FaUsers className="text-4xl dark:text-indigo-700 text-green-500 mb-4" /> // Social media icon
  },
  { 
    title: "Project Management Tool", 
    description: "A tool to manage tasks and projects.",
    icon: <FaTasks className="text-4xl dark:text-indigo-700 text-green-500 mb-4" /> // Task management icon
  },
  { 
    title: "Portfolio Website", 
    description: "A personal portfolio to showcase my skills and projects.",
    icon: <FaBriefcase className="text-4xl dark:text-indigo-700 text-green-500 mb-4" /> // Portfolio icon
  },
  { 
    title: "Chat Application", 
    description: "A real-time chat application with MERN stack.",
    icon: <FaComments className="text-4xl dark:text-indigo-700 text-green-500 mb-4" /> // Chat icon
  },
  { 
    title: "Weather App", 
    description: "An app to get the current weather information.",
    icon: <FaCloud className="text-4xl dark:text-indigo-700 text-green-500 mb-4" /> // Weather icon
  }
];

function Projects() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="projects">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">My Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-green-200 transition transform hover:-translate-y-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {/* Icon */}
            <div className="flex justify-center">
              {project.icon}
            </div>

            {/* Project Title */}
            <h3 className="text-xl text-center font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>

            {/* Project Description */}
            <p className="text-gray-600 text-center dark:text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
