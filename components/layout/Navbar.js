"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <span className="text-white font-bold text-lg">
          Abigail Tetteh
        </span>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-200">
          <a href="#about" className="relative after:block after:h-[2px] after:w-0 
  after:bg-white after:transition-all after:duration-300 
  hover:after:w-full">About</a>
          <a href="#education" className="relative after:block after:h-[2px] after:w-0 
  after:bg-white after:transition-all after:duration-300 
  hover:after:w-full">Education</a>
          <a href="#experience" className="relative after:block after:h-[2px] after:w-0 
  after:bg-white after:transition-all after:duration-300 
  hover:after:w-full">Experience</a>
          <a href="#projects" className="relative after:block after:h-[2px] after:w-0 
  after:bg-white after:transition-all after:duration-300 
  hover:after:w-full">Projects</a>
          <a href="#contact" className="relative after:block after:h-[2px] after:w-0 
  after:bg-white after:transition-all after:duration-300 
  hover:after:w-full">Contact</a>
        </div>
      </div>
    </nav>
  );
}
