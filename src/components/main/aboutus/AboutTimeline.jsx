import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AboutTimeline = () => {
  const timelineData = [
    {
      id: 1,
      title: "Renovatio Founding",
      description:
        "The company is founded by Armin Smith, an experienced interior designer with a passion for sustainable design.",
      year: "1896",
      img: "/assets/images/companytimeline-1.jpg",
    },
    {
      id: 2,
      title: "Completing The First Project",
      description:
        "The company completes its first major project, a LEED-certified office building that sets a new standard for environmentally friendly design.",
      year: "1973 - 1998",
      img: "/assets/images/companytimeline-2.jpg",
    },
    {
      id: 3,
      title: "Residential Projects",
      description:
        "In the residential sector, Renovatio Interior works closely with homeowners to understand their vision, preferences, and lifestyle requirements.",
      year: "2001",
      img: "/assets/images/companytimeline-3.jpg",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Timeline Line (hidden on mobile) */}
        <div className="absolute left-20 right-20 top-[55%] transform -translate-y-1/2 h-[2px] bg-gray-300 hidden md:block"></div>

        {/* Timeline Arrows (hidden on mobile) */}
        <div className="absolute top-[55%] left-12 transform -translate-y-1/2 text-[#00383f] text-lg cursor-pointer hidden md:block">
          <FaArrowLeft />
        </div>
        <div className="absolute top-[55%] right-12 transform -translate-y-1/2 text-[#00383f] text-lg cursor-pointer hidden md:block">
          <FaArrowRight />
        </div>

        {/* Timeline Content */}
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {timelineData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center md:text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[230px] sm:h-[200px] object-cover rounded-md shadow-md mb-6"
              />

              {/* Connector Dot (hide on mobile) */}
              <div className="relative flex items-center justify-center w-6 h-6 bg-white border-2 border-[#00383f] rounded-full mb-6 md:mb-8 hidden md:flex">
                <div className="w-3 h-3 bg-[#00383f] rounded-full"></div>
              </div>

              <h3 className="text-lg font-semibold text-[#00383f] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm max-w-sm">
                {item.description}
              </p>
              <p className="text-gray-500 mt-2 font-medium">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
