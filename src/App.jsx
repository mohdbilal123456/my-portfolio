import React from "react";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        {/* <Hero /> */}
        <About />
        <Skills />
        <Projects />
        <Education />
         <Certifications />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
