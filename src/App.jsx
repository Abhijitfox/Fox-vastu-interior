import React from "react";
import Navbar from "./components/header/Navbar";
import HeroSection from "./components/main/HeroSection";
import Section1 from "./components/main/Section1";
import Section2 from "./components/main/Section2";
import ScrollTextBridge from "./components/main/ScrollTextBridge";
import Section3 from "./components/main/Section3";
import Section4 from "./components/main/Section4";
import BackgroundImageSwitcher from "./components/main/BackgroundImageSwitcher";
import CustomCarousel from "./components/custom/CustomCarousel";
import ProjectInquirySection from "./components/custom/ProjectInquirySection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {/* Fixed dynamic background */}
      <BackgroundImageSwitcher />

      <Navbar />
      <HeroSection />

      {/* Scrollable sections */}
      <div className="relative z-10">
        <Section1 />
        <ScrollTextBridge />
        <Section2 />
        <CustomCarousel />
        <Section3 />
        <ProjectInquirySection />
        <Footer />
      </div>
    </>
  );
}

export default App;
