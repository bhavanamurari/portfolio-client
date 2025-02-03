import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import "./styles.css";

const sectionVariants = {
  hidden: { opacity: 0.05, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <motion.div
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>

        <motion.div
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>

        <motion.div
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Projects />
        </motion.div>

        <motion.div
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
