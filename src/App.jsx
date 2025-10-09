import React from "react";
import Navbar from "./components/header/Navbar";
import HeroSection from "./components/main/HeroSection";
import Footer from "./components/footer/Footer";
import About from "./components/main/aboutus/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
