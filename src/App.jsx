import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import backgroundImage from "./assets/dark-background-abstract-background-network-3d-background-3840x2160-8324.png";
import Home from "./component/home/Home";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Services from "./component/Services/Services";
import Projects from "./component/Projects/Projects";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <div
        id="home"
        className="min-h-screen pt-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
