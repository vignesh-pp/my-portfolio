import React from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import bg from "../images/my_bg.png";
import resume from "../files/VIGNESH-P--RESUME.pdf";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    // Trigger file download

    const link = document.createElement("a");
    link.href = resume; // Make sure this file exists in /public/files/
    link.download = "vignesh_p_resume.pdf";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    // Show the success modal
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          // src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          src={bg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400/70 to-blue-700/80 dark:from-gray-900/80 dark:to-gray-700/70"></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8"
        style={{ marginLeft: "25%", marginTop: "5%" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm{" "}
            <span className="text-blue-300 dark:text-blue-400">Vignesh P</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full-stack Developer & UI/UX Designer
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto text-blue-100 dark:text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Creating beautiful, functional digital experiences with modern
            technologies
          </motion.p>

          <motion.button
            className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
          >
            <span className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ y: -5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
