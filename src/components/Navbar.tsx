import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RiCodeSSlashFill } from 'react-icons/ri';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Me', href: '#me' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId as string);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-indigo-950 flex items-center gap-2">
          <RiCodeSSlashFill className="text-2xl" /> <span>SALMA MOHAMMED</span>
        </div>


        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={smoothScroll}
              className="text-gray-800 hover:text-indigo-800 transition-colors font-medium text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-indigo-950 focus:outline-none"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={smoothScroll}
                className="text-gray-800 hover:text-indigo-950 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}