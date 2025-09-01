import React, { useState, useEffect } from 'react';
import { Github,  Mail, Linkedin } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-lg font-semibold mb-4 md:mb-0">
            Kenneth<span className="text-blue-400">Dev</span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} KennethDev. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;