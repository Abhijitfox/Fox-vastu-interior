import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const points = [
    {
        title: "Experienced & Reliable",
        desc: "With over a decade of experience and more than 100+ projects completed across Pune, we know what it takes to deliver designs that last and delight."
    },
    {
        title: "Premium, Yet Practical",
        desc: "We believe great design shouldn’t come with a heavy price tag. Our team creates high-end interiors using smart, cost-effective solutions that make the most of every rupee."
    },
    {
        title: "Transparent at Every Step",
        desc: "We are not charging any hidden costs. From design plans to material choices, everything is clear, detailed, and discussed with you upfront."
    },
    {
        title: "Recognized for Creativity",
        desc: "Our work has been featured among the top interior designers in Pune, celebrated for innovation, attention to detail, and craftsmanship."
    },
    {
        title: "Built on Strong Partnerships",
        desc: "We collaborate with trusted brands like Asian Paints, Livspace, and Hafele to ensure the highest quality in every finish, fixture, and fitting."
    }
];

const WhyChooseSection = () => {
    return (
        <section className="w-full py-20 px-4 md:px-20 bg-[#0b2545] text-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
                
                {/* Left Side: Header */}
                <div className="md:w-1/3">
                    {/* Heading: use same sizes & weight as Section1 */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                        Why Choose Vastu Vibes Design?
                    </h2>
                    {/* Paragraph: match Section1 body sizing */}
                    <p className="text-blue-100 text-base md:text-lg max-w-prose leading-relaxed mb-8">
                        Choosing Vastu Vibes Design means choosing peace of mind. We combine creativity, precision, and honesty to turn your ideas into spaces you’ll love, all while respecting your budget and timelines.
                    </p>
                    
                    {/* CTA included here */}
                    <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                        <h3 className="text-xl font-semibold mb-2">Ready to Design Your Dream Space?</h3>
                        <p className="text-sm text-blue-100 mb-4">
                            Experience why homeowners across Kothrud, Baner, Wakad, and Hinjewadi choose Vastu Vibes Design for elegant, functional interiors.
                        </p>
                        <button className="bg-white text-[#0b2545] px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-sm">
                            Get a Free Consultation
                        </button>
                    </div>
                </div>

                {/* Right Side: Points */}
                <div className="md:w-2/3 grid grid-cols-1 gap-6">
                    {points.map((point, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="mt-1 flex-shrink-0 text-green-400">
                                <FontAwesomeIcon icon={faCheckCircle} size="lg" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                                <p className="text-blue-100 leading-relaxed text-sm">
                                    {point.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;