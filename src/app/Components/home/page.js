import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com/Rasolofoniaina.Mickaelio/",
    label: "Facebook",
    icon: <FaFacebook size={50} />,
  },
  {
    href: "https://www.linkedin.com/in/rasolofoniaina-tsiheje-marie-mickaelio3/",
    label: "LinkedIn",
    icon: <FaLinkedin size={50} />,
  },
  {
    href: "https://github.com/tsiheje",
    label: "GitHub",
    icon: <FaGithub size={50} />,
  },
];

const Homepage = () => {
  return (
    <div id="home" className="flex flex-col lg:flex-row items-center min-h-screen bg-gray-100 lg:px-16 w-full gap-16">
      <div className="w-full lg:w-1/2">
        <motion.div 
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
          <div className="flex gap-6">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110 hover:text-blue-500 duration-300"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.div 
          className="flex mt-12"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Image 
            src="/path-to-your-image.jpg" 
            alt="Mickaelio" 
            layout="responsive" 
            width={160} 
            height={160} 
            className="rounded-full" // Optionnel pour une image ronde
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
