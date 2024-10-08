import { useState } from 'react';
import { motion } from 'framer-motion';

const Barnav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const links = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ];

  const renderLink = (link) => (
    <a
      key={link.href}
      href={link.href}
      onClick={() => handleLinkClick(link.href)}
      className={`flex items-center text-white hover:text-blue-400 transition duration-300 ${
        activeLink === link.href ? 'font-bold' : ''
      } ${link.href === '#contact' && activeLink !== link.href ? 'bg-gray-700 px-3 py-2 rounded-md' : ''}`}
    >
      {link.label}
      {link.href === '#contact' && activeLink !== link.href && (
        <span className="ml-1 text-white text-xl">→</span>
      )}
    </a>
  );

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-white text-3xl font-bold">
            Mickaelio<span className="text-blue-400">.</span>
          </h1>
          <div className="hidden md:flex space-x-12">
            {links.map(renderLink)}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`flex items-center text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600 ${
                activeLink === link.href ? 'font-bold' : ''
              } ${link.href === '#contact' && activeLink !== link.href ? 'bg-gray-700' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Barnav;
