import React, { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Section1 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Track scroll to start number animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.4 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const stats = [
        { label: "Clients Around the World", value: 64 },
        { label: "Projects Completed", value: 124 },
        { label: "Square Feet", value: 244000 },
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 md:py-28 px-4 md:px-20 bg-white text-[#022c32]"
        >
            {/* Title */}
            <div className="max-w-6xl mx-auto text-left">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    Elevate Your <br /> Interiors
                </h1>

               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-300 pb-3 mb-10 text-center sm:text-left gap-3 sm:gap-0">
  <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 leading-snug">
    Designing Interiors That Leave a Lasting Impression
  </p>

  <a
    href="#"
    className="text-sm font-medium text-[#0b2545] hover:underline flex items-center justify-center sm:justify-end gap-2 transition-all"
  >
    All Services
    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
  </a>
</div>


                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 mb-20">
                    <div className="space-y-1">
                        <p className="flex items-center gap-2 text-sm">
                            <Plus size={12} /> Consultation
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <Plus size={12} /> Space Planning
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <Plus size={12} /> Concept Development
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="flex items-center gap-2 text-sm">
                            <Plus size={12} /> Design Development
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <Plus size={12} /> 3D Visualization
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <Plus size={12} /> Project Management
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="flex items-center gap-2 text-sm">
                            <Plus size={12} /> Furniture Selection and Procurement
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <Plus size={12} /> Lighting Design
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <Plus size={12} /> Custom Design Elements
                        </p>
                    </div>
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 text-center sm:text-left gap-10 md:gap-0">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center sm:items-start">
                            <AnimatedNumber target={stat.value} isVisible={isVisible} />
                            <p className="text-sm mt-1 text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AnimatedNumber = ({ target, isVisible }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const end = target;
        const duration = 1500;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, target]);

    // Format numbers like 244000 -> 244K
    const formatNumber = (num) => {
        if (num >= 1000) {
            return Math.floor(num / 1000) + "K";
        }
        return num;
    };

    return <h2 className="text-6xl font-bold text-[#0b2545]">{formatNumber(count)}</h2>;
};


export default Section1;
