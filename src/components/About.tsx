import React from "react";
import {
  Award,
  Users,
  Coffee,
  Clock,
  Code2,
  Database,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
// import { GrCertificate } from "react-icons/gr";
// import fiori from '../images/fiori.png';
// import capm from '../images/CAPM.png';
// import Build from '../images/Build.png';

const About = () => {
  const stats = [
    { icon: <Award size={32} />, number: "3+", label: "Years Experience" },
    // { icon: <Users size={32} />, number: "45+", label: "Object Completed" },
    // { icon: <GrCertificate size={32} />, number: '3+', label: 'SAP Certifications' },
    { icon: <Clock size={32} />, number: "24/7", label: "Support" },
  ];

  const skills = [
    { name: "SAP Fiori/UI5", percentage: 90 },
    { name: "SAP BTP CAPM", percentage: 85 },
    { name: "SAP Build Code", percentage: 75 },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                ABOUT ME
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"></p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm Vignesh, a Software Engineer with 3 years of experience in
                  full-stack web development. I specialize in React.js,
                  JavaScript, HTML, and CSS, with backend expertise in Node.js
                  and MongoDB.
                </p>
                <br />

                <p>
                  I'm skilled in UI/UX design using Figma and Visily, creating
                  intuitive and consistent user experiences. I work efficiently
                  with Git, Jira, and Planio for version control and project
                  management.
                </p>
                <br />

                <p>
                  I enjoy mentoring aspiring developers and contributing to
                  open-source and community growth. Passionate about building
                  scalable, user-friendly applications and continuously learning
                  new technologies.
                </p>
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">SE</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        Software Engineer
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        D-Aces India Private Limited (Data Aces)
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Passionate about building scalable and dynamic React
                    applications that enhance user experiences and drive digital
                    innovation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-gray-800 dark:text-white mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
