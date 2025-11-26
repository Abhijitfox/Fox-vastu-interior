import React from "react";
import { Link } from "react-router-dom";

const ProjectInquirySection = () => {
    return (
        <section
        id="inquiry-section"
            className="relative flex items-center justify-center text-center h-[60vh] bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/images/project-bg.jpg')", // replace with your background
            }}
        >
            {/* Overlay for subtle transparency */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 text-white px-4">
                <h2 className="text-3xl md:text-6xl font-bold mb-4">
                    Ready to See Your Home Transform the Way You Imagine It?
                </h2>
                <p className="text-lg md:text-2xl mb-8 opacity-90">
                    Do not hesitate to say Vastu Interior
                </p>

             <Link
  to="/contact-us"
className="border border-white text-white px-6 py-3 rounded-full text-lg transition duration-300  items-center gap-2 mx-auto inline-flex hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-lg hover:border-white/60"
>
  Let’s Talk
  <span className="text-xl">↗</span>
</Link>
            </div>
        </section>
    );
};

export default ProjectInquirySection;
