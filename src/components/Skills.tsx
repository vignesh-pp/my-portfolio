import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      category: "Frontend Technologies",
      technologies: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#E34F26",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#1572B6",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#F7DF1E",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "#61DAFB",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "#339933",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          color: "#7952B3",
        },
        {
          name: "Wix",
          icon: "https://www.wix.com/favicon.ico",
          color: "#0C6EFC",
        },
        {
          name: "Visily",
          icon: "https://app.visily.ai/favicon.ico",
          color: "#6366F1",
        },
        {
          name: "Postman",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
          color: "#FF6C37",
        },
        {
          name: "GrapesJS",
          icon: "https://grapesjs.com/img/grapesjs-logo.svg",
          color: "#E91E63",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "#F05032",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          color: "#47A248",
        },
        // {
        //   name: "MySQL",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        //   color: "#4479A1",
        // },
      ],
    },
    // {
    //   category: "Design & Development Tools",
    //   technologies: [
    //     {
    //       name: "Wix",
    //       icon: "https://www.wix.com/favicon.ico",
    //       color: "#0C6EFC"
    //     },
    //     {
    //       name: "Visily",
    //       icon: "https://app.visily.ai/favicon.ico",
    //       color: "#6366F1"
    //     },
    //     {
    //       name: "Postman",
    //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    //       color: "#FF6C37"
    //     },
    //     {
    //       name: "GrapesJS",
    //       icon: "https://grapesjs.com/img/grapesjs-logo.svg",
    //       color: "#E91E63"
    //     },
    //     {
    //       name: "Git",
    //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    //       color: "#F05032"
    //     }
    //   ]
    // }
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Technologies and tools I use to bring ideas to life
            </motion.p>
          </div>

          <div className="space-y-16">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {skillCategory.category}
                </h3> */}

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
                  {skillCategory.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      style={{ backgroundColor: "transparent" }}
                      className="group flex flex-col items-center space-y-3 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                    >
                      <div className="relative" style={{ borderRadius: "50%" }}>
                        <motion.div
                          className="w-16 h-16 p-2 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-50 dark:group-hover:bg-gray-600 transition-colors duration-300"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                          style={{ borderRadius: "50%" }}
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-10 h-10 object-contain"
                            onError={(e) => {
                              // Fallback to a colored div if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              const parent = target.parentElement;
                              if (parent) {
                                parent.style.backgroundColor = tech.color;
                                parent.innerHTML = `<span class="text-white font-bold text-lg">${tech.name.charAt(
                                  0
                                )}</span>`;
                              }
                            }}
                          />
                        </motion.div>

                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{
                            backgroundColor: tech.color,
                            filter: "blur(8px)",
                          }}
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1.2 }}
                        />
                      </div>

                      <motion.span
                        className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{
                          delay: categoryIndex * 0.2 + index * 0.1 + 0.3,
                        }}
                      >
                        {tech.name}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
