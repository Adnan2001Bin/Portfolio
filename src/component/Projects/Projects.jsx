import React from "react";
import { motion } from "framer-motion";
import './Projects.css'

const projects = [
  {
    title: "AB-TECH Gadget Shop",
    description:
      "A full-stack e-commerce platform specializing in gadgets like earbuds, smartwatches, and headphones, featuring product filtering, a shopping cart, secure Stripe payments, and an admin panel for stock updates.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
      "Redux",
    ],
    image: "src/assets/projects/Screenshot 2025-03-14 010850.png",
    link: "https://ab-tech-three.vercel.app/", // Example live link
  },
  {
    title: "Task Management App",
    description:
      "A responsive task manager with real-time updates, user authentication, and drag-and-drop functionality.",
    tech: ["React", "Node.js", "MongoDB", "WebSockets", "Material-UI"],
    image: "src/assets/taskmanager.png", // Replace with your project image path
    link: "https://github.com/yourusername/taskmanager", // Replace with your project link
  },
  {
    title: "Portfolio Website",
    description:
      "A dynamic personal portfolio showcasing my skills and projects, built with React and animated with Framer Motion.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "src/assets/portfolio.png", // Replace with your project image path
    link: "https://github.com/yourusername/portfolio", // Replace with your project link
  },
  {
    title: "Social Media Dashboard",
    description:
      "A dashboard for managing social media accounts with analytics, post scheduling, and user management features.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    image: "src/assets/dashboard.png", // Replace with your project image path
    link: "https://github.com/yourusername/dashboard", // Replace with your project link
  },
];

const Projects = () => {
  return (
    <motion.div
      id="project" // Matches your navLinks href="#project"
      className="min-h-screen bg-gray-900 flex items-center justify-center p-8 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl w-full secendoryFont">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Projects
        </motion.h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Project Image */}
              <div className="w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-green-400 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-green-600/20 text-green-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.p
          className="text-gray-400 text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Explore more of my work on{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            GitHub
          </a>
          .
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Projects;
