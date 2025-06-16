import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      year: "2022-2023",
      company: "DSR (Daily Status Report)",
      position: "Full Stack Developer",
      location: "Remote",
      description:
        "I developed and enhanced a system for managing daily status reports, including features for tracking work updates, leave management, and storing employee details. I implemented modules for daily submissions, admin views, and report generation. Focused on creating a responsive UI and ensuring data accuracy with integrated validations. This streamlined employee reporting and improved overall system efficiency.",
      technologies: ["React", "Node.js", "Express.js", "JavaScript", "MySQL"],
      type: "full-time",
    },
    {
      id: 2,
      year: "2023-2024",
      company: "Kaitongo",
      position: "Frontend Developer",
      location: "Remote",
      description:
        "At Kaitongo, I enhanced advanced search functionality, implemented role-based interfaces, and optimized the mobile experience. I improved newsletter rendering using Jinja, added custom templates, and advanced report filtering and scheduling. I worked on optimizing API performance, implementing prompt updates, and enhancing news accuracy through AI retries. I also contributed to performance tuning in Weaviate and OpenSearch and collaborated with cross-functional teams to refine UI, newsletters, and system tracking features.",
      technologies: [
        "React",
        "GrapesJS",
        "JavaScript",
        "Weaviate",
        "OpenSearch",
        "Jinja Templates",
        "Responsive Design",
        "Prompt Engineering",
        "AI Integration",
      ],
      type: "full-time",
    },
    {
      id: 3,
      year: "2025",
      company: "ClearVault",
      position: "Frontend Developer & UI Improver",
      location: "Remote",
      description:
        "At ClearVault, I improved UI consistency for file uploads across various modules, including CR requests, chat, and projects. Redesigned modals and layouts to streamline the user experience. Additionally, I maintained the notification system and collaborated on API integration and system responsiveness improvements, ensuring a smooth flow of the entire construction site building process.",
      technologies: [
        "React",
        "CSS3",
        "UI/UX Design",
        "JavaScript",
        "Responsive Design",
      ],
      type: "full-time",
    },
    {
      id: 4,
      year: "2025 - Present",
      company: "Resume Builder",
      position: "UI/UX Developer",
      location: "Remote",
      description:
        "I developed and refined resume templates while enhancing preview page layout and wireframe consistency. I improved template selection flows, admin-level controls, and implemented responsive UI updates. My work included testing modules for performance and integrating AI-based document upload and content rephrasing. I also implemented smart summary generation and automated skill suggestions using AI.",
      technologies: [
        "React",
        "Figma",
        "JavaScript",
        "Responsive Design",
        "AI Integration",
        "UI/UX Design",
      ],
      type: "full-time",
    },
    {
      id: 5,
      year: "2025",
      company: "Bleubird (Oil & Gas)",
      position: "UI Developer",
      location: "Remote",
      description:
        "As part of the Oil & Gas project, I developed and integrated a financial performance dashboard featuring industry, company, and ratio-based comparisons. I implemented AI-generated insights based on real-time chart data and optimized validation logic through refined code changes. Team collaboration was crucial in enhancing the dashboard’s data intelligence features.",
      technologies: [
        "React",
        "Chart.js",
        "JavaScript",
        "AI Integration",
        "Responsive Design",
        "AI Insights",
        "Data Visualization",
      ],
      type: "full-time",
    },
    {
      id: 6,
      year: "2025",
      company: "Ace AI",
      position: "UI/UX Designer",
      location: "Remote",
      description:
        "I redesigned UI wireframes to enhance user experience and streamline layout structures. I collaborated closely with developers and designers to implement a modern, consistent interface. My focus on testing cycles and bug resolution helped ensure smooth transitions from legacy systems to the updated platform.",
      technologies: [
        "Figma",
        "UI Design",
        "Prototyping",
        "Responsive Design",
        "User Testing",
      ],
      type: "full-time",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            {/* <motion.div
              className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl font-bold">03</span>
              <span>EXPERIENCE</span>
            </motion.div> */}

            <motion.h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Work Experience
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My career progression and key contributions in the tech industry
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-600"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:space-x-8`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    style={{ left: "49.3%" }}
                    className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  />

                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-600">
                      {/* Year Badge */}
                      <motion.div
                        className="inline-flex items-center space-x-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: -10 }
                        }
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{exp.year}</span>
                      </motion.div>

                      {/* Company & Position */}
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                      >
                        {exp.company}
                      </motion.h3>

                      <motion.div
                        className="flex items-center space-x-4 mb-4 text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                      >
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.position}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            exp.type === "full-time"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                          }`}
                        >
                          {exp.type === "full-time" ? "Full-time" : "Contract"}
                        </span>
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                      >
                        {exp.description}
                      </motion.p>

                      {/* Technologies */}
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 10 }
                        }
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.9 }}
                      >
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
