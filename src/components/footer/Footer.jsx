import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
    faLocationDot,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
    faPinterestP,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const quickLinks = [
        "About Us",
        "Our Projects",
        "Our Services",
        "Gallery",
        "Contact Us",
        "Get a Quote",
    ];

    return (
        <div
            className="relative w-full bg-cover bg-center bg-no-repeat text-white py-16 px-6 md:px-12"
            style={{
                backgroundImage: `url("/assets/images/footerimg.jpeg")`,
            }}
        >
            {/* Overlay for blur effect */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
                
                {/* Address / Contact Info */}
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4">Address</h3>
                    <p className="text-sm opacity-90 mb-2">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91 8879864151
                    </p>
                    <p className="text-sm opacity-90 mb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@foxaircomm.com
                    </p>
                    <p className="text-sm mt-2 opacity-90 leading-relaxed">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                        SR. 171A, 171B, OFFICE NO.- BR 2-401, 402, <br />
                        JAI GANESH VISION, Akurdi, Pune, Maharashtra, 411035
                    </p>
                </div>

                {/* Quick Links (split into 2 columns) */}
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
                    <div className="grid grid-cols-2 gap-x-6">
                        {/* First column (first 3 links) */}
                        <ul className="space-y-3 text-sm font-medium">
                            {quickLinks.slice(0, 3).map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center md:justify-start group transition-all duration-300"
                                    >
                                        <FontAwesomeIcon
                                            icon={faAngleRight}
                                            className="mr-2 text-gray-300 group-hover:text-white transition-all duration-300"
                                        />
                                        <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                                            {item}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Second column (last 3 links) */}
                        <ul className="space-y-3 text-sm font-medium">
                            {quickLinks.slice(3, 6).map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center md:justify-start group transition-all duration-300"
                                    >
                                        <FontAwesomeIcon
                                            icon={faAngleRight}
                                            className="mr-2 text-gray-300 group-hover:text-white transition-all duration-300"
                                        />
                                        <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                                            {item}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
                    <p className="text-sm opacity-90 mb-4">
                        Stay connected for design inspiration & updates.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href="#"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                        >
                            <FontAwesomeIcon icon={faPinterestP} />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom note */}
            <div className="relative mt-10 text-center text-xs opacity-70">
                © {new Date().getFullYear()} Foxair Interiors. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
