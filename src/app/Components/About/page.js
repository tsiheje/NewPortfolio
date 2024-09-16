import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">À propos de moi</h1>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            🚀 Je suis Mickaelio, un développeur front-end enthousiaste spécialisé en React.js et un intégrateur web passionné ! 💻 Mon objectif est de transformer des idées en expériences digitales captivantes et performantes. 🌟 Que ce soit pour créer des interfaces intuitives ou optimiser la vitesse de chargement, je mets tout en œuvre pour offrir des solutions web innovantes qui émerveillent les utilisateurs tout en respectant les standards de qualité les plus élevés.
        </p>
        <p className="text-lg text-gray-600 mt-4">
            Pour en savoir plus sur moi et mes compétences, découvrez mon <a href="/path-to-your-cv.pdf" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">CV</a> !
        </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-12">
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Développement Front-End</h2>
          <p className="text-gray-600">
            Création d'interfaces utilisateur réactives et modernes avec React.js, en mettant l'accent sur la performance et l'accessibilité.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intégration Web</h2>
          <p className="text-gray-600">
            Intégration de maquettes et de designs en HTML/CSS avec une attention particulière aux détails et à la compatibilité multi-navigateurs.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Optimisation des Performances</h2>
          <p className="text-gray-600">
            Optimisation des sites pour une vitesse de chargement rapide et une performance maximale, en minimisant les fichiers et en optimisant les images.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Mon Expérience</h2>
        <div className="relative border-l-2 border-gray-300">
          <motion.div
            className="absolute -left-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-white font-bold text-lg">1</span>
          </motion.div>
          <div className="pl-12 mb-12">
            <h3 className="text-xl font-semibold text-gray-800">Stage de Développeur Front-End</h3>
            <p className="text-gray-600 mb-2">Entreprise XYZ, Janvier 2023 - Juin 2023</p>
            <p className="text-gray-600">
              Pendant ce stage, j'ai travaillé sur le développement d'applications web interactives en utilisant React.js et d'autres technologies front-end. J'ai également participé à l'optimisation des performances et à l'intégration de maquettes.
            </p>
          </div>

          <motion.div
            className="absolute -left-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span className="text-white font-bold text-lg">2</span>
          </motion.div>
          <div className="pl-12 mb-12">
            <h3 className="text-xl font-semibold text-gray-800">Développeur Front-End Actuel</h3>
            <p className="text-gray-600 mb-2">Entreprise ABC, Juillet 2023 - Présent</p>
            <p className="text-gray-600">
              Dans mon poste actuel, je développe des applications web complexes avec React.js, en travaillant étroitement avec les équipes de conception pour créer des interfaces utilisateur modernes et intuitives. Je suis également responsable de l'amélioration continue des performances des applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
