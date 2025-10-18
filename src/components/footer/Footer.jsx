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
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Our Projects", href: "/projects" },
    { label: "Our Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Get a Quote", href: "/contact-us" },
  ];

  return (
    <div className="relative w-full bg-cover bg-center bg-no-repeat text-white pt-12 pb-3 px-6 md:px-12" style={{ backgroundImage: `url("/assets/images/footerimg.jpeg")` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Address */}
        <div className="flex flex-col items-start text-left space-y-2">
          <h3 className="text-lg md:text-xl font-semibold mb-2">Address</h3>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} />
            <span className="text-sm">+91 8879864151</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="text-sm">info@foxaircomm.com</span>
          </div>
          <div className="flex items-start gap-2">
            <FontAwesomeIcon className="mt-1" icon={faLocationDot} />
            <span className="text-sm">
              SR. 171A, 171B, OFFICE NO.- BR 2-401, 402, JAI GANESH VISION, Akurdi, Pune, Maharashtra, 411035
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-6">
            <ul className="space-y-2 text-sm font-medium">
              {quickLinks.slice(0, 3).map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 group hover:text-white transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faAngleRight} className="text-gray-300 group-hover:text-white" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-sm font-medium">
              {quickLinks.slice(3, 6).map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 group hover:text-white transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faAngleRight} className="text-gray-300 group-hover:text-white" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
          <p className="text-sm opacity-90 mb-4">Stay connected for design inspiration & updates.</p>
          <div className="flex gap-4">
            {[faFacebookF, faInstagram, faPinterestP, faLinkedinIn].map((icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="relative mt-10 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Foxair Interiors. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
