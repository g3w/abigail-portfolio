"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 px-6 md:px-20 py-10">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Name & copyright */}
        <div className="text-center md:text-left">
          <p className="text-white font-semibold text-lg">
            Abigail Efua Tetteh
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://linkedin.com/in/abigail-tetteh-"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/g3w"
            target="_blank"
            className="hover:text-gray-200 transition"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:abigailtetteh077@gmail.com"
            className="hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-sm text-gray-500">
        Built with ❤️ by Abigail. View source on{" "}
        <a
          href="https://github.com/g3w/abigail-portfolio"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
