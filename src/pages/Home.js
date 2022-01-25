import React from "react";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
