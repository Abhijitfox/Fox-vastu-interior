import React from "react";
import { Home, Building2, Utensils, Armchair, PencilRuler } from "lucide-react";

const services = [
    {
        icon: <Home size={32} />,
        title: "Residential Interior Design in Pune",
        desc: "Your home should feel peaceful, balanced. As one of the Best residential interior designers in Pune, we design and decorate warm, comfortable homes that match your lifestyle through the blending of elegance, functionality, and Vastu harmony in every detail."
    },
    {
        icon: <Building2 size={32} />,
        title: "Commercial Interior Design Services in Pune",
        desc: "Did you know every workspace has its own rhythm? We design offices, studios, and retail spaces that enhance focus, creativity, and collaboration. Our team combines modern aesthetics with practical layouts to make your workplace truly inspiring."
    },
    {
        icon: <Utensils size={32} />,
        title: "Modular Kitchen Designer in Pune",
        desc: "A good kitchen must work as beautifully as it looks. We create smart, ergonomic kitchens with clean lines, ample storage, and smooth flow, which are designed to make cooking easier and more enjoyable every day."
    },
    {
        icon: <Armchair size={32} />,
        title: "Furniture Design & Custom Fabrication",
        desc: "Furniture should tell a story, not just fill space. Our designers craft bespoke pieces that fit perfectly into your interiors, that are elegant, durable, and built to reflect your personality and comfort."
    },
    {
        icon: <PencilRuler size={32} />,
        title: "Turnkey Interior Projects",
        desc: "From concept to completion, we handle everything, including design, materials, and execution. Our turnkey process keeps you stress-free with transparent costing, clear timelines, and consistent updates, so your dream space becomes reality without the chaos."
    }
];

const ServicesSection = () => {
    return (
        <section className="w-full py-20 px-4 md:px-20 bg-white text-[#0b2545]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b2545] mb-6 leading-tight">
                        What Are the Different Interior Design <br className="hidden md:block"/> Services Offered by Vastu Vibes Designs?
                    </h2>
                    <p className="text-gray-700 max-w-prose mx-auto text-base md:text-lg">
                        At Vastu vibes, we take care of everything, right from the first sketch to the final design. Our work is rooted in listening, understanding, and designing spaces that feel personal, functional, and alive.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-gray-50 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-[#0b2545] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-900/20">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-[#0b2545] mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;