// components/Loader.js
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 z-10"
      // Le className "bg-gray-800" utilise la couleur Tailwind
    >
      <motion.h1
        animate={{ rotate: 360 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        onAnimationComplete={onComplete}
        className="text-3xl font-semibold text-white"
        // Utilisation de classes Tailwind pour le style du texte
      >
        Mickaelio
      </motion.h1>
    </div>
  );
};

export default Loader;
