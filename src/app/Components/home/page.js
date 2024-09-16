import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div id="home" className="flex justify-center flex-wrap items-center min-h-screen bg-gray-100 px-15 w-full gap-16">
      <motion.div 
        className="w-[45%]"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bonjour !</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Je suis <span className="text-blue-500 text-6xl">Mickaelio</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Développeur front-end passionné et intégrateur web spécialisé en React, je transforme vos idées en expériences numériques mémorables. 🌟 Que vous soyez local ou international, je m'engage à créer des solutions web innovantes et performantes pour répondre à vos besoins. 🚀
        </p>

        <motion.button 
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          En savoir plus
        </motion.button>
      </motion.div>

      <motion.div 
        className="flex mt-12 space-x-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div 
          className="h-40 w-40 bg-gray-600 rounded-lg shadow-lg" 
          whileHover={{ scale: 1.05 }} 
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.div 
          className="h-40 w-40 bg-red-600 rounded-lg shadow-lg" 
          whileHover={{ scale: 1.05 }} 
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.div 
          className="h-40 w-40 rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }} 
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image 
            src="/path-to-your-image.jpg" 
            alt="Mickaelio" 
            layout="responsive" 
            width={160} 
            height={160} 
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Homepage;
