import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectInquirySection from "../custom/ProjectInquirySection";
import BackgroundImageSwitcher from "../custom/BackgroundImageSwitcher";
import WhyChooseUsSection2 from "../custom/WhyChooseUsSection2";
import FeaturesSection from "../custom/FeaturesSection";
import GallerySection from "../custom/GallerySection";
import { Helmet } from "react-helmet-async";

const ResidentialInterior = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // --- DATA SECTIONS (Updated from Document) ---
  const questionsData = [
    {
      // H2
      question: "Q: What exactly do your residential interior services include?",
      // P
      intro: "We take care of everything your home needs from start to finish. Our house interior design services include:",
      // P
      items: [
        "Smart space planning and layout ideas.",
        "Custom-made furniture and modular carpentry.",
        "Well-planned lighting that sets the right mood.",
        "False ceiling design and electrical planning.",
        "Functional kitchen and wardrobe designs.",
        "Choosing colours, textures, and finishes that suit your style.",
        "Décor styling, soft furnishing, and final touches.",
        "Vastu-aligned planning, if you prefer.",
        "Complete project management until handover."
      ],
      // P
      outro: "You don’t need to coordinate with multiple vendors; our team handles the entire process to make it smooth and stress-free for you.",
      type: "list"
    },
    {
      // H2
      question: "Q: Who should choose Vastu Vibes?",
      // P
      intro: "You are the right fit if you want:",
      // P
      items: [
        "A home that feels personal, warm, and thoughtfully designed.",
        "Intelligent storage without bulky furniture",
        "A designer who respects budget limits",
        "Interiors aligned with Vastu without compromising aesthetics",
        "A stress-free, end-to-end execution"
      ],
      // P
      outro: "If you are searching for the best residential interior designers in Pune, you will feel at home with us.",
      type: "checklist"
    },
    {
      // H2
      question: "Q: What is your design and execution process?",
      intro: "Our step-by-step process ensures a smooth journey:",
      // H3 & P
      items: [
        { 
          number: "1", 
          title: "Understanding You & Your Space", 
          desc: "We begin by understanding your lifestyle, routines, family needs, and what matters most to you." 
        },
        { 
          number: "2", 
          title: "Concept & Layout Planning", 
          desc: "We create moodboards and layouts that solve your real day-to-day problems and make your space easier to live in." 
        },
        { 
          number: "3", 
          title: "3D Visualization", 
          desc: "You get to see your future home in 3D, including colours, materials, furniture, and the overall feel, before anything is built." 
        },
        { 
          number: "4", 
          title: "Clear Costs & Timelines", 
          desc: "We share transparent pricing and realistic timelines so you always know what to expect." 
        },
        { 
          number: "5", 
          title: "Execution & Supervision", 
          desc: "Our team manages the entire execution with quality checks, regular updates, and smooth progress at every stage." 
        },
        { 
          number: "6", 
          title: "Styling & Final Handover", 
          desc: "We complete the finishing, décor, lighting, and styling so your home is ready to move into with no extra hassle." 
        }
      ],
      outro: "",
      type: "process"
    }
  ];

  // --- FAQ DATA (Updated from Document) ---
  const faqData = [
    {
      // H3
      question: "Q. What do you include under “home interior design”?",
      // P
      answer: [
        "We handle everything your home needs from concept design to space planning, customised furniture, lighting, flooring, wall finishes, curtains, décor styling, optional Vastu guidance, and complete project management until handover."
      ]
    },
    {
      // H3
      question: "Q. Why should I hire residential interior designers in Pune instead of doing it myself?",
      // P
      answer: [
        "Professional designers help you avoid common issues such as poor space use, mismatched choices, hidden costs, and project delays.",
        "They know Pune’s apartment layouts, trusted vendors, and local challenges, which leads to smoother and faster execution."
      ]
    },
    {
      // H3
      question: "Q. What is the usual budget for a house interior design project in Pune?",
      // P
      answer: [
        "Budgets vary depending on the size of your home, materials, and customisation. For 2 BHK and 3 BHK homes, costs can differ across firms.",
        "We share a clear scope and a detailed estimate after understanding your specific requirements."
      ]
    },
    {
      // H3
      question: "Q. What makes a company one of the best home interior design companies in Pune?",
      // P
      answer: [
        "Strong residential experience, honest communication, transparent costing, strict quality control, in-house or well-managed execution, and a portfolio that reflects consistent results. These qualities set top firms apart."
      ]
    },
    {
      // H3
      question: "Q. Do you work on both small apartments and large villas?",
      // P
      answer: [
        "Yes, absolutely. For compact homes, we focus on smart storage and multi-functional design.",
        "For villas, we create spacious layouts, well-defined zones, and premium finishes to elevate the overall feel."
      ]
    }
  ];

  // H3 & P
  const residentialFeatures = [
    {
      title: "Understanding Your Lifestyle, Not Just Your Likes",
      description: `We start our process by understanding the details of how you live, not just what you like. That means your daily routines, your family’s requirements, your storage habits, and your preferred vibe.`,
      icon: "https://img.icons8.com/ios-filled/100/0b2545/sofa.png",
    },
    {
      title: "Designs That Balance Aesthetics, Function & Vastu",
      description: "We strike the right balance between aesthetics, function, and Vastu principles (if desired), providing you with a home that feels right, not just looks good.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/kitchen.png",
    },
    {
      title: "Full Transparency With 3D Visuals & Stage-Wise Planning:",
      description: "We will provide 3D visuals with a clear, stage-wise plan, and we’ll explain the cost implications of material or design choices upfront.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/bed.png",
    },
    {
      title: "Local Expertise for Smarter Budgets & Zero Surprises",
      description: `We are well-versed with the local market, including typical flat sizes, light orientation, traffic noise, local material availability, and timelines. That means fewer surprises, realistic schedules, and smarter budgets.`,
      icon: "https://img.icons8.com/ios-filled/100/0b2545/home.png",
    },
    {
      title: "Complete End-to-End Interior Solutions Under One Roof",
      description: "We provide all-in-one services from design, carpentry/fabrication, installation, finishing, and after-care. So you don’t have to juggle multiple vendors.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/wardrobe.png",
    },
    {
      title: "On-Time Delivery With Realistic Costs & Real Value",
      description: `We are committed to delivering during real timelines and aligning costs so you get value without compromising your dream. This is why many clients call us the best residential interior designers in Pune because we make your home feel personal, not templated.`,
      icon: "https://img.icons8.com/ios-filled/100/0b2545/interior.png",
    },
  ];

  // P
  const residentialFeaturesforwhychoseus = [
    {
      description: "“Our apartment is wonderful, but it still feels like a rented place. It has no personal vibes, and the layout doesn’t feel connected.”",
      image: "/assets/images/whychooseus1.jpg",
    },
    {
      description: "“We bought beautiful furniture, but together it looks mismatched. The rooms feel messy, and the space doesn’t support the way we actually live.”",
      image: "/assets/images/whychooseus2.jpg",
    },
    {
      description: "“Our budget went out of control. There were many hidden costs in the quotation, deadlines kept changing, and we ended up living in a dusty home for many days.”",
      image: "/assets/images/whychooseus3.jpg",
    },
    {
      description: "“In Pune flats, space is already limited. One wrong design choice makes the entire home feel unbalanced, so I’m constantly worried about choosing between style and practicality.”",
      image: "/assets/images/whychooseus4.jpg",
    },
  ];

  const residentialImages = [
    "/assets/images/residential-1.avif",
    "/assets/images/residential-2.avif",
    "/assets/images/residential-3.avif",
    "/assets/images/residential-4.avif",
    "/assets/images/residential-5.avif",
    "/assets/images/residential-6.avif",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questionsData.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Residential Interior Design Services | Vastu Vibes Design</title>
        <meta name="description" content="Vastu Vibes offers personalised home interior design in Pune—smart planning, custom furniture, lighting, Vastu alignment, and end-to-end execution." />
        <link rel="canonical" href="https://playful-cranachan-8efc2c.netlify.app/services/residential-interior-design" />
      </Helmet>

      <div className="w-full overflow-hidden text-gray-800 font-sans">
        
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/residential-hero.jpg')" }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-3xl px-6"
          >
            {/* H1 Tag */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4">
              Vastu Vibes — Home Interior Designer in Pune That Turns Your Daily Life Into a Comfort Experience.
            </h1>
            {/* P */}
            <p className="text-lg sm:text-xl md:text-1xl text-white/90 mb-6">
              Every home has a story. Maybe yours begins with “a cramped kitchen that slows your mornings, a living room that never feels complete, or a bedroom you’ve been meaning to fix someday.”
            </p>
            {/* P */}
            <p className="text-lg sm:text-xl md:text-1xl text-white/90 mb-6">
              At Vastu Vibes, we design spaces that simplify your routines, calm your mind, and finally make your home feel like you.
            </p>
            <Link to="/contact-us" className="inline-block px-8 py-3 bg-white text-[#0b2545] rounded-full font-semibold hover:bg-white/90 transition">
              Book Your Free Consultation Today
            </Link>
          </motion.div>
        </section>

        {/* FEATURES SECTION (H2 passed as title) */}
        <FeaturesSection 
          title="What makes your residential interior design service different?" 
          features={residentialFeatures} 
        />

        {/* GALLERY SECTION */}
        <GallerySection title="Residential Interior Gallery" images={residentialImages} />

        {/* WHY CHOOSE US (H2 passed as title) */}
        <WhyChooseUsSection2 
          title="Why do homeowners in Pune struggle with getting the right interior for their home?" 
          subtitle="Many Pune homeowners share the following concerns:" 
          features={residentialFeaturesforwhychoseus} 
        />

        {/* ==========================================================
            SEO / PROCESS SLIDER SECTION
           ========================================================== */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[550px] flex flex-col md:flex-row">
              {questionsData.map((qa, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentQuestion === index ? 1 : 0,
                    zIndex: currentQuestion === index ? 10 : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full flex flex-col md:flex-row bg-white"
                  style={{ pointerEvents: currentQuestion === index ? "auto" : "none" }}
                >
                  <div className="w-full md:w-4/12 bg-[#0b2545] p-10 flex flex-col justify-center relative">
                    <div className="mb-6">
                      <span className="bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        Question 0{index + 1}
                      </span>
                    </div>
                    {/* H2 Tags for Slider Headings */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
                      {qa.question}
                    </h2>
                    <div className="flex space-x-2 mt-auto">
                      {questionsData.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentQuestion(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentQuestion === i ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
                          }`}
                          aria-label={`Slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="w-full md:w-8/12 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
                    {qa.intro && (
                      <p className="text-lg text-gray-700 font-medium mb-6 leading-relaxed">
                        {qa.intro}
                      </p>
                    )}

                    <div className="grid grid-cols-1 gap-4 flex-grow content-start">
                      {qa.type === "process" ? (
                        /* Process items: H3 Titles */
                        qa.items.map((item, idx) => (
                          <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                             <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4 mt-0.5">
                               <span className="font-bold text-sm">{item.number}</span>
                             </div>
                             <div>
                               <h3 className="text-gray-900 font-bold text-lg mb-1">{item.title}</h3>
                               <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                             </div>
                          </div>
                        ))
                      ) : (
                        /* List & Checklist items */
                        qa.items.map((item, idx) => (
                          <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                             <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4 mt-0.5">
                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                               </svg>
                             </div>
                             <span className="text-gray-700 font-medium text-base leading-relaxed">
                                {item}
                             </span>
                          </div>
                        ))
                      )}
                    </div>

                    {qa.outro && (
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-[#0b2545] italic font-medium">
                          {qa.outro}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-6 mt-8">
               {questionsData.map((data, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setCurrentQuestion(idx)}
                   className={`text-sm font-semibold tracking-wide uppercase transition-colors ${
                     currentQuestion === idx ? "text-[#0b2545] border-b-2 border-[#0b2545]" : "text-gray-400 hover:text-gray-600"
                   }`}
                 >
                   {idx === 0 ? "Services" : idx === 1 ? "Why Us" : "Process"}
                 </button>
               ))}
            </div>
          </div>

          <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background-color: #e5e7eb;
              border-radius: 20px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background-color: #d1d5db;
            }
          `}</style>
        </section>

        {/* ==========================================================
            FAQ SECTION (H2 Title, H3 Questions)
           ========================================================== */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* H2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0b2545] mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-blue-50/50 transition-colors text-left focus:outline-none"
                  >
                    {/* H3 Tags */}
                    <h3 className="text-lg font-bold text-[#0b2545] pr-8">
                      {faq.question}
                    </h3>
                    <span className="flex-shrink-0">
                      <motion.div
                        animate={{ rotate: openFaqIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-6 h-6 text-[#0b2545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </motion.div>
                    </span>
                  </button>

                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 bg-gray-50 border-t border-gray-100">
                          {faq.answer.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-gray-600 leading-relaxed mb-3 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INQUIRY SECTION */}
        <ProjectInquirySection />

        {/* Background Transition */}
        <BackgroundImageSwitcher image="/assets/images/hero-slideimg-1.jpeg" />
      </div>
    </>
  );
};

export default ResidentialInterior;