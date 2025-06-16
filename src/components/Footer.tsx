import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/vignesh-pp",
      color: "hover:text-gray-900 dark:hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vignesh-p-65a758208/",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    // {
    //   name: "Twitter",
    //   icon: Twitter,
    //   url: "https://x.com/home",
    //   color: "hover:text-blue-400",
    // },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:pvignesh358@gmail.com",
      color: "hover:text-red-500 dark:hover:text-red-400",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-blue-400">Vignesh P</h3>
            <p className="text-gray-400 leading-relaxed">
              Full-stack developer passionate about creating beautiful,
              functional digital experiences that make a difference.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(`#${item.toLowerCase()}`)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-blue-400">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Let's build something amazing together!
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} Vignesh P. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            {/* <span>and lots of coffee</span> */}
          </div>

          {/* <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            <p>Built with React, TypeScript & Tailwind CSS</p>
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
