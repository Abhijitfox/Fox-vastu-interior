import React from "react";
import { motion } from "framer-motion";

const WhyChooseUsforResidential = () => {
  const features = [
    {
      title: "Tailored Design Approach",
      description:
        "We listen, collaborate, and craft interiors that truly reflect your lifestyle and aspirations.",
      image: "/assets/images/whychooseus1.jpg",
    },
    {
      title: "Attention to Detail",
      description:
        "Every finish, texture, and lighting choice is made with precision and purpose.",
      image: "/assets/images/whychooseus2.jpg",
    },
    {
      title: "Sustainable Materials",
      description:
        "We integrate eco-friendly materials and methods to create long-lasting, responsible designs.",
      image: "/assets/images/whychooseus3.jpg",
    },
    {
      title: "Expert Team",
      description:
        "Our designers and craftsmen bring years of expertise to every project.",
      image: "/assets/images/whychooseus4.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0b2545] mb-4"
        >
          Why Choose Us
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Experience excellence through creative design, precision execution,
          and timeless appeal.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.3,
                }}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#0b2545] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsforResidential;
