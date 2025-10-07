import React from "react";

const ProjectInquirySection = () => {
    return (
        <section
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
                    Have a project in mind?
                </h2>
                <p className="text-lg md:text-2xl mb-8 opacity-90">
                    Do not hesitate to say Zdravst
                </p>

                <button
                    className="border border-white text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black transition duration-300 flex items-center gap-2 mx-auto"
                >
                    Let’s Talk
                    <span className="text-xl">↗</span>
                </button>
            </div>
        </section>
    );
};

export default ProjectInquirySection;
