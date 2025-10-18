import React from "react";
import { motion } from "framer-motion";

const ResidentialFeatures = () => {
  const features = [
    {
      title: "Elegant Living Rooms",
      description:
        "Warm and sophisticated spaces designed to bring families together in comfort and style.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/sofa.png", // online icon
    },
    {
      title: "Modern Kitchens",
      description:
        "Combining functionality with design to create perfect cooking and social areas.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/kitchen.png", // online icon
    },
    {
      title: "Luxury Bedrooms",
      description:
        "Personalized spaces that promote relaxation and reflect your unique personality.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/bed.png", // online icon
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0b2545] mb-4"
        >
          Designed for Modern Living
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Every corner of your home deserves thoughtful design, blending comfort
          and aesthetics in perfect harmony.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              <motion.img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mx-auto mb-4"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.3,
                }}
              />
              <h3 className="text-[#0b2545] font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidentialFeatures;
