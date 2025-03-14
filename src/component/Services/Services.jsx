import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Application Development",
    description:
      "I design and build custom, scalable, and high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
    details:
      "With expertise in both front-end (React) and back-end (Node.js, Express.js) development, I create seamless full-stack solutions tailored to your needs.",
    value:
      "From concept to deployment, I deliver end-to-end development, ensuring your application is robust and ready for growth.",
  },
  {
    title: "Responsive Front-End Development",
    description:
      "I create dynamic, user-friendly, and responsive interfaces with React.js that work flawlessly across all devices.",
    details:
      "Using state management (Redux, Context API), component-based architecture, and modern UI libraries like Tailwind CSS or Material-UI, I craft interactive designs.",
    value:
      "Expect fast, visually appealing interfaces that prioritize excellent user experiences on any screen size.",
  },
  {
    title: "Back-End Development & API Integration",
    description:
      "I develop robust server-side applications and RESTful APIs using Node.js and Express.js, integrated with MongoDB databases.",
    details:
      "My skills include database design, CRUD operations, authentication (JWT, OAuth), and seamless third-party API integrations.",
    value:
      "I build secure, efficient, and scalable back-end systems to power your applications reliably.",
  },
  {
    title: "Database Management",
    description:
      "I design and manage NoSQL databases with MongoDB to store and retrieve data efficiently for your applications.",
    details:
      "With a focus on schema design, data modeling, and performance optimization, I ensure your data layer runs smoothly.",
    value:
      "Your application benefits from data integrity and scalability as it grows.",
  },
  {
    title: "Full-Stack Solutions",
    description:
      "I provide complete full-stack development services, connecting front-end interfaces with back-end logic for a cohesive application.",
    details:
      "I handle all layers—UI, server, and database—and deploy them using platforms like AWS, Heroku, or Vercel.",
    value:
      "As a one-stop solution, I deliver fully functional apps tailored to your business needs.",
  },
  {
    title: "Custom Features & Functionality",
    description:
      "I implement tailored features like user authentication, real-time updates, payment gateways, or dashboards based on your needs.",
    details:
      "Examples include Stripe for payments, WebSockets for real-time updates, or custom admin panels for data management.",
    value:
      "My flexibility ensures your project gets the exact functionality it requires.",
  },
  {
    title: "Maintenance & Optimization",
    description:
      "I offer ongoing support, bug fixing, and performance optimization for MERN-based applications.",
    details:
      "From refactoring code to improving load times and scaling for larger user bases, I keep your app running at its best.",
    value:
      "I’m your long-term partner, ensuring your project thrives beyond launch.",
  },
];

const Services = () => {
  return (
    <motion.div
      id="services"
      className="min-h-screen bg-gray-900 flex items-center justify-center p-8 secendoryFont"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Services
        </motion.h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold text-green-400 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-300 mb-2">{service.description}</p>
              <p className="text-sm text-gray-400 mb-2">
                <span className="font-semibold text-green-500">Details:</span>{" "}
                {service.details}
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-green-500">Value:</span>{" "}
                {service.value}
              </p>
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
          Let’s build something amazing together—tailored to your vision.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Services;