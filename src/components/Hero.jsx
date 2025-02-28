
import { motion } from "framer-motion";
import Particle from "./Particle";
// import myPicture from "../assets/my-picture.jpg"; // Adjust the path if necessary

function Hero() {


  return (
 
    <section className="text-center py-20 bg-green-300 dark:bg-gray-800" id="hero">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
       
        
        {/* Animated Image */}
        <motion.div
          className=" w-[40%] justify-items-center "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <img src={myPicture} alt="My profile" className="w-full h-full object-cover" /> */}
          <img src="https://i.ibb.co.com/KmX867Z/Whats-App-Image-2024-11-06-at-12-11-21-PM.jpg" alt="My profile" className="min-w-[330px] md:w-[500px] ring-4 ring-green-400 dark:ring-indigo-500 object-cover rounded-full  overflow-hidden shadow-lg" />
        </motion.div>

        {/* Text Section */}
        <div className="md:w-[55%] w-full justify-items-center " >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Hello, I’m a MERN Stack Developer
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            I specialize in creating full-stack web applications with a focus on efficiency and user experience.
          </motion.p>
          <motion.button
            className="mt-8 px-6 py-2 bg-green-400 dark:bg-indigo-700 text-white font-semibold rounded-lg hover:bg-green-500 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View My Work
          </motion.button>
        </div>
      </div>
    </section>

  );
}

export default Hero;
