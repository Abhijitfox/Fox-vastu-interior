import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ShowroomFeatures = () => {
  // Accordion open state
  const [openIndex1, setOpenIndex1] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const section1 = [
    {
      title: "Space Planning",
      description:
        "Optimized layouts to ensure efficient use of space while maintaining aesthetics and comfort in your showroom or workspace.",
    },
    {
      title: "Interior Design Consultation",
      description:
        "Expert guidance in creating elegant interiors that align with your brand identity and design goals.",
    },
    {
      title: "Concept Development and Visualization",
      description:
        "Transform your ideas into realistic 3D renderings and concepts that help visualize your dream interiors before implementation.",
    },
  ];

  const section2 = [
    {
      title: "Material Selection and Specification",
      description:
        "We help you select the perfect materials, finishes, and textures to match your project’s style and functionality.",
    },
    {
      title: "Custom Furniture and Millwork",
      description:
        "Tailored furniture and detailed millwork solutions that bring craftsmanship and character to your space.",
    },
    {
      title: "Lighting Design",
      description:
        "Strategic lighting plans to enhance ambiance, highlight features, and create inviting interior experiences.",
    },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-28 py-20 bg-white">
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
        {/* Left: Image */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <img
            src="/assets/images/showroom-interior-design-1.jpg"
            alt="Luxury Interior"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-[#0b2545] font-semibold text-lg mb-2">
            Construction Services that Go Beyond Expectations
          </h2>

          <div className="border-t border-gray-200 mt-4">
            {section1.map((item, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                {/* Title Row */}
                <button
                  onClick={() =>
                    setOpenIndex1(openIndex1 === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-gray-700 font-medium text-sm md:text-base">
                    {item.title}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex1 === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#0b2545] text-lg font-bold"
                  >
                    +
                  </motion.span>
                </button>

                {/* Description */}
                <AnimatePresence>
                  {openIndex1 === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-[#0b2545] font-semibold text-lg mb-2">
            Expert services for development and interior design.
          </h2>

          <div className="border-t border-gray-200 mt-4">
            {section2.map((item, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                {/* Title Row */}
                <button
                  onClick={() =>
                    setOpenIndex2(openIndex2 === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-gray-700 font-medium text-sm md:text-base">
                    {item.title}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex2 === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#0b2545] text-lg font-bold"
                  >
                    +
                  </motion.span>
                </button>

                {/* Description */}
                <AnimatePresence>
                  {openIndex2 === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="flex justify-center"
        >
          <img
            src="/assets/images/showroom-interior-design-2.jpg"
            alt="Modern Interior"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ShowroomFeatures;
