import React from "react";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
