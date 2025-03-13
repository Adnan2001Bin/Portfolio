import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "MongoDB", level: 85, color: "bg-green-500" },
  { name: "Express.js", level: 90, color: "bg-red-700" },
  { name: "React", level: 95, color: "bg-blue-500" },
  { name: "Node.js", level: 80, color: "bg-green-600" },
  { name: "JavaScript", level: 90, color: "bg-yellow-400" },
  { name: "Tailwind CSS", level: 85, color: "bg-teal-500" },
];

const Skills = () => {
  return (
    <motion.div
      id="skills"
      className="min-h-screen bg-gray-900 flex items-center justify-center p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl w-full">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Skills
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-between text-white mb-2">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className={`${skill.color} h-3 rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-gray-400 text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Full Stack MERN Developer with a passion for building scalable web applications.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Skills;