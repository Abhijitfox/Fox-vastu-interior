import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ImageAnimation from "../custom/ImageAnimation";



const Section2 = () => {


    return (
        <section className="w-full py-20 md:py-28 px-4 md:px-20 bg-white text-[#022c32] overflow-hidden">
            <div className="max-w-6xl mx-auto text-left">
                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    About Our Design <br /> Philosophy
                </h1>

                {/* Subheading */}
                <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-10">
                    <p className="text-lg md:text-xl font-semibold">
                        Your Vision, Our Design Expertise
                    </p>
                    <a
                        href="#"
                        className="text-sm font-medium text-[#0b2545] hover:underline flex items-center gap-2"
                    >
                        About Us
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                    </a>
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
                        {/* Tabs */}
                        <div className="flex gap-8 mb-5 text-sm font-medium text-[#022c32]">
                            <a href="#" className="hover:underline underline-offset-4">
                                History
                            </a>
                            <a href="#" className="hover:underline underline-offset-4">
                                Description
                            </a>
                            <a href="#" className="hover:underline underline-offset-4">
                                Reviews
                            </a>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-700 leading-relaxed mb-6">
                            Renovatio, we believe that every space has the potential to be
                            transformed into a work of art. With a passion for design and a
                            commitment to excellence, we strive to create captivating interiors
                            that reflect the unique personalities and aspirations of our clients.
                            Our team of talented designers, architects, and craftsmen collaborate
                            closely with each client to understand their vision and bring it to
                            life.
                        </p>

                        {/* Progress Bars */}
                        <div className="mt-8 space-y-5">
                            <ProgressBar label="Space Planning and Layout" width="95%" />
                            <ProgressBar label="Project Challenges and Solutions" width="85%" />
                            <ProgressBar
                                label="Sustainability and Eco-Friendly Features"
                                width="75%"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ProgressBar = ({ label, width }) => (
    <div>
        <p className="text-xs font-semibold mb-1 uppercase">{label}</p>
        <div className="w-full bg-gray-200 h-[3px]">
            <div className="bg-[#022c32] h-[3px]" style={{ width }} />
        </div>
    </div>
);

export default Section2;
