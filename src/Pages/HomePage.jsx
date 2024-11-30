import React from "react";
import HeroSection from "../components/UI/HeroSection";
import About from "./AboutPage";
import { Contact } from "./ContactPage";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Contact/>
    </>
  );
}

export default Home;
