import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Image */}
      <div
        className="relative w-full h-[450px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/images/contact-hero-img.jpg')",
        }}
      ></div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-start gap-16">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-[64px] font-bold text-[#00383f] leading-none">
            Let's Talk
          </h1>
          <p className="text-lg mt-4 text-gray-700">
            Got a project on your mind? Let’s discuss about the details.
          </p>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Call Us
            </p>
            <p className="text-2xl font-semibold text-[#00383f] mt-1">
+91 8879864151            </p>
          </div>

          <div className="flex items-center gap-4 mt-8 text-[#00383f] text-lg">
            <a href="#" className="hover:text-gray-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full">
          <form className="space-y-8">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 focus:border-[#00383f] outline-none py-2 text-gray-800 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 focus:border-[#00383f] outline-none py-2 text-gray-800 placeholder-gray-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border-b border-gray-300 focus:border-[#00383f] outline-none py-2 h-32 text-gray-800 placeholder-gray-500"
            ></textarea>

            <button
              type="submit"
              className="bg-[#00383f] text-white px-8 py-2 rounded-full hover:bg-[#01514f] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
