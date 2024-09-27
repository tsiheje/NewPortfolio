import { motion } from "framer-motion";

const skills = [
  {
    title: "Développement Front-End",
    description: "Création d'interfaces utilisateur réactives et modernes avec React.js, en mettant l'accent sur la performance et l'accessibilité.",
    bgColor: "bg-white",
    textColor: "text-gray-800",
  },
  {
    title: "Développement Back-End",
    description: "Mise en place d'architectures robustes et sécurisées, gestion des bases de données et développement d'API performantes pour garantir une expérience utilisateur fluide et réactive.",
    bgColor: "bg-blue-400",
    textColor: "text-white",
  },
  {
    title: "Intégration Web",
    description: "Intégration de maquettes et de designs en HTML/CSS avec une attention particulière aux détails et à la compatibilité multi-navigateurs.",
    bgColor: "bg-gray-800",
    textColor: "text-white",
  },
  {
    title: "Optimisation des Performances",
    description: "Optimisation des sites pour une vitesse de chargement rapide et une performance maximale, en minimisant les fichiers et en optimisant les images.",
    bgColor: "bg-white",
    textColor: "text-gray-800",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center lg:px-16 w-full" id="about">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800">À propos de moi</h1>
        <div>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            🚀 Je suis Mickaelio, un développeur front-end enthousiaste spécialisé en React.js et un intégrateur web passionné ! 💻 Mon objectif est de transformer des idées en expériences digitales captivantes et performantes. 🌟 Que ce soit pour créer des interfaces intuitives ou optimiser la vitesse de chargement, je mets tout en œuvre pour offrir des solutions web innovantes qui émerveillent les utilisateurs tout en respectant les standards de qualité les plus élevés.
          </p>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Pour en savoir plus sur moi et mes compétences, découvrez mon <a href="/path-to-your-cv.pdf" className="bg-blue-500 text-white text-xl py-3 px-5 rounded-lg shadow-lg" target="_blank" rel="noopener noreferrer">Télecharger CV</a>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-8 w-full mb-12">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className={`${skill.bgColor} rounded-lg shadow-lg p-6 w-[500px]`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className={`text-2xl font-semibold ${skill.textColor} mb-4`}>{skill.title}</h2>
            <p className={`${skill.textColor === "text-white" ? "text-white" : "text-gray-600"}`}>
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
