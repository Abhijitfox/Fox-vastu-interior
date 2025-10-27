import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services", dropdown: true },
    // { label: "Projects", href: "/projects", dropdown: true },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact-us" },
  ];

 const services = [
  {
    title: "Showroom Interior Service",
    description: "Stylish and functional showroom designs.",
    href: "/services/showroom-interior-design",
  },
  {
    title: "Residential Interior Service",
    description: "Elegant interiors for homes.",
    href: "/services/residential-interior-design",
  },
  {
    title: "Corporate/ Office Interior Service",
    description: "Smart and professional office spaces.",
    href: "/services/corporate-office-interior-design",
  },
  {
    title: "Hotel Interior Service",
    description: "Luxurious and comfortable hotel interiors.",
    href: "/services/hotel-interior-design",
  },
];


  // const projects = [
  //   { title: "Residential", description: "Luxury homes and apartments", href: "/projects/residential" },
  //   { title: "Commercial", description: "Offices, shops, and showrooms", href: "/projects/commercial" },
  //   { title: "Hospitality", description: "Hotels, resorts, restaurants", href: "/projects/hospitality" },
  // ];

const renderDropdown = (items) => (
  <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white text-black shadow-lg rounded-lg w-[250px] z-50 overflow-hidden">
    {items.map((item) => (
      <Link
        key={item.href}
        to={item.href}
        className="flex flex-col p-3 rounded-md hover:bg-gray-50 transition-all duration-300 ease-in-out"
      >
        <h4 className="font-semibold text-sm">{item.title}</h4>
        <p className="text-xs text-gray-500">{item.description}</p>
      </Link>
    ))}
  </div>
);



  return (
    <header className="absolute top-0 left-0 w-full h-[60px] md:h-[90px] z-50">
      <div
        className={`w-full h-full flex items-center justify-between px-6 md:px-14 transition-all duration-300 border-b
        ${
          menuOpen
            ? "backdrop-blur-md bg-white text-black border-gray-200"
            : "backdrop-blur-md bg-white/10 border-white/20 text-white"
        }`}
      >
       

        {/* Logo */}
        <div className="flex items-center h-full">
          <Link to="/">
            <img
              src="/assets/logo/vastu-logo.png"
              alt="Logo"
              className="h-10 w-auto md:h-16 lg:h-18 object-contain"
            />
          </Link>
        </div>
 {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg transition-transform duration-300"
        >
          <div
            className={`transition-transform duration-300 ${
              menuOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
            }`}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </button>
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium md:ml-12 lg:ml-20 relative">
          {links.map((link) =>
            link.dropdown ? (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() =>
                  link.label === "Services"
                    ? setServicesOpen(true)
                    : setProjectsOpen(true)
                }
                onMouseLeave={() =>
                  link.label === "Services"
                    ? setServicesOpen(false)
                    : setProjectsOpen(false)
                }
              >
                <button className="flex items-center gap-1 px-2 py-2 transition-colors duration-300 hover:text-gray-300">
                  {link.label} <ChevronDown className="w-4 h-4" />
                </button>
                {link.label === "Services" && servicesOpen && renderDropdown(services)}
                {link.label === "Projects" && projectsOpen && renderDropdown(projects)}
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="relative px-2 py-2 transition-colors duration-300 hover:text-gray-300"
              >
                {link.label}
              </Link>
            )
          )}

          {/* “Let’s Talk” Button */}
          <Link
            to="/contact-us"
            className="ml-4 px-5 py-2 bg-white/90 text-[#0b2545] rounded-full font-medium text-sm hover:bg-white transition shadow-sm hover:shadow-md duration-300"
          >
            Let’s Talk
          </Link>
        </nav>
      </div>

   {/* Mobile Dropdown */}
  <div
  className={`md:hidden absolute left-0 w-full bg-white text-black overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
    ${menuOpen ? "max-h-[600px] opacity-100 border-b border-gray-200" : "max-h-0 opacity-0"}
  `}
>
  <nav className="flex flex-col mt-20 px-6 space-y-2 text-[16px] font-medium">
    {links.map((link) =>
      link.dropdown ? (
        <div key={link.href} className="w-full">
          <button
            onClick={() =>
              link.label === "Services"
                ? setServicesOpen(!servicesOpen)
                : setProjectsOpen(!projectsOpen)
            }
            className="w-full flex justify-between items-center py-2 border-b border-gray-200"
          >
            {link.label} <ChevronDown className={`w-4 h-4 transition-transform ${((link.label === "Services" && servicesOpen) || (link.label === "Projects" && projectsOpen)) ? "rotate-180" : ""}`} />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              (link.label === "Services" && servicesOpen) ||
              (link.label === "Projects" && projectsOpen)
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {(link.label === "Services" ? services : projects).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 pl-6 text-gray-700 hover:text-gray-900 transition"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link
          key={link.href}
          to={link.href}
          onClick={() => setMenuOpen(false)}
          className="block py-2 border-b border-gray-200 text-gray-700 hover:text-gray-900 transition"
        >
          {link.label}
        </Link>
      )
    )}

    {/* “Let’s Talk” in Mobile Menu */}
    <Link
      to="/contact-us"
      onClick={() => setMenuOpen(false)}
      className="m-4 px-5 py-2 bg-[#0b2545] border text-white border-gray-300 rounded-full font-medium text-sm  transition shadow-sm text-center"
    >
      Let’s Talk
    </Link>
  </nav>
</div>

    </header>
  );
};

export default Navbar;
