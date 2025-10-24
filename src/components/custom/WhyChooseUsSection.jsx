    import { motion } from "framer-motion";

    const WhyChooseUsSection = () => {
    const features = [
        {
        title: "Creative & Functional Designs",
        description:
            "Our spaces balance aesthetics and practicality, ensuring every showroom captivates customers while serving business goals.",
        icon: "/assets/images/whychooseus1.jpg",
        },
        {
        title: "Detail-Oriented Approach",
        description:
            "From textures to lighting, we focus on every small detail that makes your showroom stand out and feel premium.",
        icon: "/assets/images/whychooseus2.jpg",
        },
        {
        title: "Timely Delivery",
        description:
            "We prioritize deadlines without compromising on quality, delivering stunning interiors on time and on budget.",
        icon: "/assets/images/whychooseus3.jpg",
        },
        {
        title: "Trusted Expertise",
        description:
            "With years of experience in luxury interior design, we bring proven excellence to every commercial space.",
        icon: "/assets/images/whychooseus4.jpg",
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Heading */}
            <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#0b2545] mb-14"
            >
            Why Choose Us
            </motion.h2>
            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((item, idx) => (
                <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                >
                {/* Background Image */}
                <motion.img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/80 via-[#0b2545]/50 to-transparent opacity-90"></div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.25 + 0.2, duration: 0.6 }}
                    className="absolute bottom-0 p-6 text-left"
                >
                    <h3 className="text-white font-semibold text-xl mb-2">
                    {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                    {item.description}
                    </p>
                </motion.div>

                {/* Animated Border Highlight */}
                <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-white/40 transition-all duration-500"
                    whileHover={{ scale: 1.03 }}
                />
                </motion.div>
            ))}
            </div>
        </div>

        {/* Background Decorative Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -left-20 w-80 h-80 bg-[#b3c7e6]/20 blur-3xl rounded-full"
            />
            <motion.div
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -right-20 w-96 h-96 bg-[#0b2545]/10 blur-3xl rounded-full"
            />
        </div>
        </section>
    );
    };

    export default WhyChooseUsSection;
