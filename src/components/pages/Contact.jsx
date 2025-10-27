import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "your_service_id",   // 🔹 Replace with your EmailJS service ID
        "your_template_id",  // 🔹 Replace with your EmailJS template ID
        form.current,
        "your_public_key"    // 🔹 Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setMessage("✅ Message sent successfully!");
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          setMessage("❌ Failed to send message. Try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <>
    <Helmet>
  <title>Contact VastuVibe | Start Your Interior Design Project</title>
  <meta
    name="description"
    content="Have a project in mind? Contact VastuVibe for residential, commercial, showroom, and hotel interior design services in India."
  />
  <link rel="canonical" href="https://playful-cranachan-8efc2c.netlify.app/contact-us" />
</Helmet>

    <div className="font-sans text-gray-800">
      {/* Hero Image */}
      <div
        className="relative w-full h-[450px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/contact-hero-img.jpg')",
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
    <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
      Call Us
    </h2>
    <p className="text-2xl font-semibold text-[#00383f] mt-1">
      +91 8879864151
    </p>
  </div>

  <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mt-10">
    Follow Us
  </h2>
  <div className="flex items-center gap-4 mt-3 text-[#00383f] text-lg">
    <a href="#" aria-label="Facebook" className="hover:text-gray-600">
      <FaFacebookF />
    </a>
    <a href="#" aria-label="Twitter" className="hover:text-gray-600">
      <FaTwitter />
    </a>
    <a href="#" aria-label="YouTube" className="hover:text-gray-600">
      <FaYoutube />
    </a>
  </div>
</div>


        {/* Right Section (Form) */}
        <div className="md:w-1/2 w-full">
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full border-b border-gray-300 focus:border-[#00383f] outline-none py-2 text-gray-800 placeholder-gray-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full border-b border-gray-300 focus:border-[#00383f] outline-none py-2 text-gray-800 placeholder-gray-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full border-b border-gray-300 focus:border-[#00383f] outline-none py-2 h-32 text-gray-800 placeholder-gray-500"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className={`bg-[#00383f] text-white px-8 py-2 rounded-full transition ${
                isSending ? "opacity-60 cursor-not-allowed" : "hover:bg-[#01514f]"
              }`}
            >
              {isSending ? "Sending..." : "Submit"}
            </button>

            {/* Success or Error Message */}
            {message && (
              <p className="text-sm mt-3 text-gray-700">{message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
