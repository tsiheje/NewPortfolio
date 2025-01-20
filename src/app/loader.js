'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 3100); 

    return () => clearTimeout(timer); 
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
        when: "beforeChildren",
      },
    },
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50">
      <motion.div
        className="text-white font-bold flex space-x-2 
                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {'Mickaelio'.split('').map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;
