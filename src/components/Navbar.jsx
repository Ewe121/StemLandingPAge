import React, { useState } from 'react';
import { logo } from '../assets';
import NavButton from '../components/Buttons/NavButton';

const Navbarli = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Blog', href: '#' },
    { label: 'Platforms', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'Scholarships', href: '#' },
    { label: 'Shop', href: '#' },
    { label: 'FAQ', href: '#' },
  ];

  return (
    <nav className="w-full bg-white shadow-lg relative z-50">
      
      {/* Main bar */}
      <div className="flex justify-between items-center px-6 sm:px-12 lg:px-[100px] h-[60px]">

        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[140px] h-[33px] sm:w-[193px] sm:h-[45px]"
          />
        </div>

        {/* Desktop links */}
        <ul className="hidden lg:flex justify-end font-medium text-[16px] items-center gap-[24px] leading-[24px]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-red-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <NavButton />
        </ul>

        {/* Hamburger button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>

      </div>

      {/* Mobile & Tablet dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 bg-white">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block text-[16px] font-medium hover:text-red-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <NavButton />
        </ul>
      </div>

    </nav>
  );
};

export default Navbarli;