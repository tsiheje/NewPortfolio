'use client'; 

import { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
      if (onComplete) {
        onComplete();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-10">
      <div
        className={`text-white text-6xl font-bold flex space-x-4 transition-opacity duration-700 ${
          showText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {'Mickaelio'.split('').map((letter, index) => (
          <span
            key={index}
            className="transition-transform duration-500 ease-out transform"
            style={{
              transitionDelay: `${index * 100}ms`,
              transform: showText ? 'translateY(0)' : 'translateY(50px)',
              opacity: showText ? 1 : 0,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
