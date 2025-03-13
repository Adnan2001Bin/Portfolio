import React, { useState } from "react";
import { motion } from "framer-motion";
import myImage2 from "../../assets/image2.png"

import "./About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  const educationDetails = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Daffodil International University",
      year: "2021 - 2025 (Expected)",
      description:
        "Currently completing my BSc with a focus on web development, software engineering, and modern programming practices. Expected to graduate with honors in 2025.",
    },
    {
      degree: "Online Course in Advanced React",
      institution: "Udemy",
      year: "2024",
      description:
        "Completed a comprehensive course on React, Redux, and modern web development practices.",
    },
  ];

  const experienceDetails = [
    {
      role: "Full-Stack Developer (Personal Project)",
      company: "AB-TECH Gadget Shop",
      year: "2024 - 2025",
      description:
        "Designed and developed a full-stack e-commerce platform for gadgets like earbuds, smartwatches, and headphones using the MERN stack (React, Node.js, Express.js, MongoDB) and Tailwind CSS. Implemented features like product listings, shopping cart, and user authentication.",
    },
    {
      role: "Student Developer",
      company: "Daffodil International University",
      year: "2021 - 2025",
      description:
        "Completed academic projects and coursework in web development, software engineering, and database management. Gained hands-on experience with technologies like React, Node.js, and MongoDB through assignments and capstone projects.",
    },
  ];

  return (
    <motion.div
      id="about"
      className="min-h-screen px-4 w-full md:px-10 lg:px-30 flex flex-col-reverse lg:flex-row lg:justify-between items-center mt-10 md:mt-15 lg:mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-white w-full lg:w-[40%] mb-6 lg:mb-0 lg:mt-0 mt-10 flex flex-col lg:justify-center lg:items-start justify-center items-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
          About Me
        </h2>
        <p className="text-sm sm:text-base lg:text-lg lg:text-start md:text-center">
          Ambitious <span className="text-green-500">Full-Stack</span> Web
          Developer passionate about building user-centric applications and
          automating workflows. Proficient in both{" "}
          <span className="text-green-500">frontend</span> and{" "}
          <span className="text-green-500">back-end</span> development.
        </p>

        <div className="mt-6 flex flex-col lg:items-start items-center">
          <div className="flex space-x-4 mb-4">
            <motion.button
              className={`px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                activeTab === "Experience"
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("Experience")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Experience
            </motion.button>
            <motion.button
              className={`px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                activeTab === "Education"
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("Education")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Education
            </motion.button>
          </div>

          <motion.div
            className="bg-gray-800 p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {activeTab === "Experience" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {experienceDetails.map((exp, index) => (
                  <div
                    key={index}
                    className="mb-4 last:mb-0 flex flex-col lg:items-start items-center"
                  >
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-green-400 lg:text-start text-center">
                      {exp.role} at {exp.company}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-400">
                      {exp.year}
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base lg:text-start text-center">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
            {activeTab === "Education" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {educationDetails.map((edu, index) => (
                  <div
                    key={index}
                    className="mb-4 last:mb-0 lg:text-start text-center"
                  >
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-green-400">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-400">
                      {edu.institution} | {edu.year}
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="relative w-full sm:w-[80%] lg:w-[60%] flex lg:items-center lg:justify-end justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative w-[16rem] sm:w-[20rem] lg:w-[40rem] h-[16rem] sm:h-[20rem] lg:h-[40rem] rounded-full overflow-hidden border-4 border-green-400/80">
          <div className="absolute inset-0 rounded-full border-2 border-green-400/50 m-2"></div>
          <img
            className="w-full h-full object-cover"
            src={myImage2}
            alt="Profile"
          />
        </div>
        <motion.div
          className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full top-0 sm:top-4 lg:top-6 left-4 sm:left-6 lg:left-15"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full bottom-4 sm:bottom-6 lg:bottom-8 right-2 sm:right-4 lg:right-6"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div
          className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full bottom-10 sm:bottom-12 lg:bottom-16 right-0 sm:right-2 lg:right-4"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default About;