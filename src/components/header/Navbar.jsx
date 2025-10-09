import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const links = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "News", href: "/news" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className="absolute top-0 left-0 w-full h-[60px] md:h-[90px] z-50">
            {/* Navbar base */}
            <div
                className={`w-full h-full flex items-center justify-evenly px-6 transition-all duration-300 border-b
        ${menuOpen
                        ? "backdrop-blur-md bg-white text-black border-gray-200"
                        : "backdrop-blur-md bg-white/10 border-white/20 text-white"
                    }`}
            >
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 rounded-lg transition-transform duration-300"
                >
                    <div
                        className={`transition-transform duration-300 ${menuOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
                            }`}
                    >
                        {menuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </div>
                </button>

               {/* Logo */}
<div className="flex items-center h-full mx-auto md:mx-0">
  <img
    src="/assets/logo/vastu-logo.png"
    alt="RENOVATIO Logo"
    className="h-8 w-auto md:h-10 lg:h-12 object-contain"
  />
</div>


                {/* Desktop Nav Links */}
                <nav className="hidden md:flex gap-6 text-[15px] font-medium">
                    {links.map((link) => (
                        <Link
                            key={link}
                            className="relative px-4 py-2 transition-colors duration-300 hover:text-gray-300"
                            to={link?.href}
                        >
                            {link?.label}
                        </Link>
                    ))}
                    <button className="ml-4 hover:opacity-80 transition">
                        <Search className="w-5 h-5" />
                    </button>
                </nav>
            </div>

            {/* Mobile Dropdown Menu (slides from bottom) */}
            <div
                className={`md:hidden absolute left-0 w-full bg-white text-black overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
          ${menuOpen ? "max-h-[400px] opacity-100 border-b border-gray-200" : "max-h-0 opacity-0"}
        `}
            >
                <nav className="flex flex-col items-center py-4 space-y-4 text-[16px] font-medium">
                    {links.map((link) => (
                        <Link
                            key={link}
                            onClick={() => setMenuOpen(false)}
                            className="w-full text-center py-2 hover:text-gray-600 transition"
                            to={link?.href}

                        >
                            {link?.label}
                        </Link>
                    ))}

                    <button className="flex items-center gap-2 py-2 hover:opacity-80 transition">
                        <Search className="w-5 h-5" /> Search
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
