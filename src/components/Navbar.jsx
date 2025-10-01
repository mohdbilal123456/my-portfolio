import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Navigation links array for easy maintenance
const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'education', title: 'Education' },
  { id: 'projects', title: 'Projects' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'contact', title: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle link click (closes menu on mobile and scrolls)
  const handleLinkClick = (id) => {
    // Scroll to the section with the matching ID. 'smooth' gives a nice animation.
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Mobile menu band kar de
  };

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-purple-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={() => handleLinkClick('home')} className="text-3xl font-extrabold text-white tracking-wider">
              <span className="text-purple-400">Mohd</span> <span className="text-cyan-400">Bilal</span>
            </a>
          </div>

          {/* Desktop Navigation Links (Visible on medium screens and up) */}
          <div className="hidden md:flex space-x-6 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition duration-300 relative group"
              >
                {link.title}
                {/* Underline hover effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (Visible only on small screens) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel (Hidden by default, shown when isOpen is true) */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-purple-900">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-200"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
