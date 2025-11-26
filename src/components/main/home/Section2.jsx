import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ImageAnimation from "../../custom/ImageAnimation";
// Add Link import for client-side routing
import { Link } from "react-router-dom";

const Section2 = () => {
    return (
        <section className="w-full py-20 md:py-28 px-4 md:px-20 bg-white text-[#022c32] overflow-hidden">
            <div className="max-w-6xl mx-auto text-left">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-8">
                    Why Most Designs Don’t Work <br /> (And Why Yours Will)
                </h2>

                {/* Subheading */}
                <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-10">
                    <p className="text-base md:text-lg font-semibold">
                        Great design starts with communication.
                    </p>
                    {/* Use Link for client-side navigation; route set to /contact-us */}
                    <Link
                        to="/contact-us"
                        className="text-sm font-medium text-[#0b2545] hover:underline flex items-center gap-2"
                    >
                        Start Your Journey
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                    </Link>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    
                    {/* Left Image Slider */}
                    <ImageAnimation
                        images={[
                            "/assets/images/section-1-1.jpeg",
                            "/assets/images/section-1-2.jpeg",
                            "/assets/images/section-1-3.jpeg",
                        ]}
                    />

                    {/* Right Text Content */}
                    <motion.div
                        initial={{ x: 120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="md:w-[50%] w-full text-[#022c32]"
                    >
                        {/* Intro */}
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 font-medium">
                            You or your loved ones may have experienced it many times: A designer shows you a beautiful 3D render, but when the final space comes alive, it is somewhat very different than the design. It’s not you. It’s just because of the missing human layer. Here’s what most interior design companies in Pune forget: Great design doesn’t start with color palettes, but it starts with communication.
                        </p>
                        
                        <p className="text-xs text-gray-600 mb-4">
                            At Vastu Vibes Designs, our process begins with understanding:
                        </p>

                        {/* Progress Bars / Points */}
                        <div className="mt-4 space-y-6">
                            <ProgressBar label="How your family uses every corner of your home" width="100%" />
                            <ProgressBar label="At what time does sunlight hit your workspace?" width="90%" />
                            <ProgressBar label="Which colors make you feel calm?" width="85%" />
                            <ProgressBar label="What energy do you want your space to carry?" width="95%" />
                        </div>

                        {/* Conclusion */}
                        <p className="text-sm md:text-base text-[#0b2545] font-bold mt-8 italic">
                            That’s how we create spaces that don’t just look good, they feel right.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ProgressBar = ({ label, width }) => (
    <div>
        <p className="text-xs font-semibold mb-1 text-[#022c32]">{label}</p>
        <div className="w-full bg-gray-200 h-[3px] rounded-full">
            <div className="bg-[#0b2545] h-[3px] rounded-full" style={{ width }} />
        </div>
    </div>
);

export default Section2;