import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AskMe from "./components/Askme";
import About from "./components/About";
import Stack from "./components/Stack";
import Contact from "./components/Contact";


const Home = () => {
  return (
    <main className="font-sans antialiased [scroll-behavior:smooth]">
      <Navbar />
      <Hero />
      <Projects />
      <AskMe />
      <About />
      <Stack />
      <Contact />
    </main>
  );
};

export default Home;