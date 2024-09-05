import { useState } from 'react';
import { motion } from 'framer-motion';

const Barnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white text-3xl font-bold">
              Mickaelio<span className="text-blue-400 text-3xl">.</span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-blue-400 transition duration-300">Home</a>
            <a href="#about" className="text-white hover:text-blue-400 transition duration-300">About</a>
            <a href="#skills" className="text-white hover:text-blue-400 transition duration-300">Skills</a>
            <a href="#projects" className="text-white hover:text-blue-400 transition duration-300">Projects</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition duration-300">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Home</a>
          <a href="#about" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">About</a>
          <a href="#skills" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Skills</a>
          <a href="#projects" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Projects</a>
          <a href="#contact" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Barnav;
