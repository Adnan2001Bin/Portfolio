import React from "react";
import { motion } from "framer-motion";
import myImage from "../../assets/image.png"
import CV from "../../assets/projects/Adnan.pdf"
import "./Home.css";

const Home = () => {
  return (
    <motion.div
      id="home"
      className="relative min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between lg:px-30 md:px-15 sm:px-6 absolute z-20">
        <motion.div
          className="w-1/4 text-white primaryFont order-2 lg:order-1 lg:mt-0 mt-10 flex flex-col lg:items-start items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h3
            className="lg:text-4xl md:text-2xl sm:text-xl text-md font-medium lg:mb-3 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            HELLO I'M
          </motion.h3>
          <motion.h1
            className="lg:text-9xl md:text-7xl sm:text-5xl text-4xl font-medium"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Adnan
          </motion.h1>

          
          <motion.a
            href={CV}
            download="Adnan-CV.pdf" 
            className="flex justify-center items-center lg:w-[60%] md:w-[80%] sm:w-[90%] w-[100%] lg:h-15 md:h-14 sm:h-14 h-10 bg-green-600 rounded-4xl font-medium lg:text-lg md:text-sm sm:text-sm text-[10px] md:px-3 sm:px-3 px-3 mt-6 md:mt-8 lg:mt-10"
            whileHover={{ scale: 1.05, backgroundColor: "#15803d" }} // Darker green on hover
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Download CV
            <span>
              <img
                className="lg:w-8 md:w-5 sm:w-5 w-4 lg:ml-3 md:ml-1 sm:ml-3"
                src="https://img.icons8.com/?size=100&id=82788&format=png&color=000000"
                alt="Download Icon"
              />
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          className="lg:w-[43%] md:w-[43%] sm:w-[50%] w-[80%] order-1 lg:order-2 lg:mt-0 mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={myImage} alt="Adnan's Image" />
        </motion.div>

        <motion.div
          className="w-1/4 text-white secendoryFont hidden sm:hidden md:hidden lg:flex lg:flex-col lg:order-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="font-medium lg:text-xl md:text-lg mb-4">About me</h1>
          <p className="lg:text-lg md:text-md">
            Ambitious <span className="text-green-500">Full-Stack</span> Web
            Developer passionate about building user-centric applications and
            automating workflows. Proficient in both{" "}
            <span className="text-green-500">frontend</span> and{" "}
            <span className="text-green-500">back-end</span> development
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center">
        <motion.div
          className="z-30 absolute flex w-[80%] justify-center lg:mt-[35%] md:mt-[35%] sm:mt-[50%] mt-[90%]"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="web-dev-text1 animate-up-down lg:text-[4rem] md:text-[3rem] sm:text-[2.3rem] text-[1.8rem]">
            WEB DEVELOPMENT
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center">
        <motion.div
          className="z-0 absolute flex w-[90%] justify-center lg:mt-[25%] md:mt-[25%] sm:mt-[40%] mt-[70%]"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="web-dev-text2 animate-up-down lg:text-[5rem] md:text-[3.5rem] sm:text-[3rem] text-[2rem]">
            WEB DEVELOPMENT
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;