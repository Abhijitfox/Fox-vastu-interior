import React from "react";
import { motion } from "framer-motion";

import Showcase from "../main/aboutus/Showcase";
import ImageAnimation from "../custom/ImageAnimation";
import ProjectInquirySection from "../custom/ProjectInquirySection";
import BackgroundImageSwitcher from "../custom/BackgroundImageSwitcher";
import { Link } from "react-router-dom";


const About = () => {
             

 
    return (
        <>
            {/* Hero Background Section */}
              <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('assets/images/footerimg.jpeg')",
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl px-6"
        >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
  About Vastu Interior
</h1>
<p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 drop-shadow-md">
  Creating harmonious interiors that blend modern design with timeless Vastu principles.
</p>

            <Link
            to="/contact-us"
            className="inline-block px-8 py-3 bg-white text-[#0b2545] rounded-full font-semibold hover:bg-white/90 transition"
          >
            Let’s Talk
          </Link>
        </motion.div>
      </section>
            {/* About Section */}
            <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 bg-white">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 lg:gap-20 max-w-7xl mx-auto pt-10">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left space-y-4 px- md:px-0">
  <h1 
        className="display-3 fw-bold mb-1"
        style={{ color: '#00334d' }}
      >
        About Us
      </h1>

  <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
    Where Imagination Meets Interiors
  </p>

  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md md:max-w-lg">
    We design spaces that reflect your personality and create harmony
    between aesthetics and comfort. Our expert designers turn your
    vision into timeless interiors tailored to your lifestyle.
  </p>
</div>


                    {/* Right Image Section */}
                            <ImageAnimation
                                images={[
                                    "/assets/images/section-1-1.jpeg",
                                    "/assets/images/section-1-2.jpeg",
                                    "/assets/images/section-1-3.jpeg",
                                ]}
                            />

                </div>
               <p className="mt-6 text-[#4F696B] text-[16px] leading-relaxed tracking-wide ">
  Renovatio, we believe that every space has the potential to be transformed
  into a work of art. With a passion for design and a commitment to excellence,
  we strive to create captivating interiors that reflect the unique
  personalities and aspirations of our clients. Our team of talented designers,
  architects, and craftsmen collaborates closely with each client to understand
  their vision and bring it to life. Whether it’s a residential project,
  commercial space, or a hospitality establishment, we approach each project
  with creativity, professionalism, and a commitment to excellence. Our
  portfolio showcases a diverse range of projects that highlight our versatility
  and ability to adapt to different design styles and requirements. What sets us
  apart is our attention to detail and our commitment to delivering exceptional
  results. We meticulously plan every aspect of the design process, from space
  planning and furniture selection to material choices and lighting design. Our
  goal is to create harmonious environments that not only inspire but also
  enhance the daily lives of those who inhabit them.
</p>

<Showcase/>
            </div>
            <ProjectInquirySection   />

 <BackgroundImageSwitcher
                image="/assets/images/bg-1.jpeg"

            />
 
        </>
    );
};

export default About;
