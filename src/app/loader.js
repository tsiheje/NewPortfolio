import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-10">
      <motion.div
        className="text-white text-6xl font-bold flex space-x-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.2, 
            },
          },
        }}
      >
        {'Mickaelio'.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;
