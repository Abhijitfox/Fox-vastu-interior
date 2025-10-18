import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";


import Contact from "./components/pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowroomInterior from "./components/pages/ShowroomInterior";
import HeroSection from "./components/pages/HeroSection";
import About from "./components/pages/About";
import Footer from "./components/footer/Footer";
import ResidentialInterior from "./components/pages/ResidentialInterior";
import GalleryPage from "./components/pages/GalleryPage";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/services/showroom-interior-design" element={<ShowroomInterior/>} />
        <Route path="/services/residential-interior-design" element={<ResidentialInterior/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
