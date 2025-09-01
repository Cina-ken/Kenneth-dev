"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            <Link href="/">
              Kenneth<span className="text-blue-400">Dev</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href="#about"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
