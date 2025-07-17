import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import { Toaster } from 'react-hot-toast';
import Navbar from './sections/Navbar'

const App = () => {
  return (
    <>
     <Toaster position="top-center" reverseOrder={false} />
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
    </>
  );
};

export default App;
