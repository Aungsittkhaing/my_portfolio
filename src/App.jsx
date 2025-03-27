import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
