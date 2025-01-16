import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaSkype } from "react-icons/fa";
import bgimage from "../../Assets/Images/bgimage.jpg";
import sary from "../../Assets/Images/images.png"


const socialLinks = [
  {
    href: "https://www.facebook.com/Rasolofoniaina.Mickaelio/",
    label: "Facebook",
    icon: <FaFacebook size={40} className="sm:w-12 sm:h-12" />,
  },
  {
    href: "https://www.linkedin.com/in/rasolofoniaina-tsiheje-marie-mickaelio3/",
    label: "LinkedIn",
    icon: <FaLinkedin size={40} className="sm:w-12 sm:h-12" />,
  },
  {
    href: "https://github.com/tsiheje",
    label: "GitHub",
    icon: <FaGithub size={40} className="sm:w-12 sm:h-12" />,
  },
  {
    href: "https://join.skype.com/invite/IPIhGiQpePER",
    label: "Skype",
    icon: <FaSkype size={40} className="sm:w-12 sm:h-12" />,
  },
];

const Homepage = () => {
  return (
    <section id="home" className="h-screen w-full">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src={bgimage}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/95" />
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-16 py-36 lg:py-40">
        <div className="w-full lg:w-1/2 max-w-2xl lg:mr-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Hello!👋
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">I`&apos;`m, <span className="text-blue-400 mt-2 text-5xl sm:text-7xl lg:text-8xl">Mickaelio</span></h1>
            </div>
            <p className="text-base sm:text-lg text-gray-200">
              🌟 A dedicated front-end developer and web integrator with a passion for crafting seamless user experiences. 
              Specializing in <span className="text-blue-400">React</span>, I transform ideas into impactful and memorable digital solutions. 🚀
            </p>
            <div className="pt-12 sm:pt-16 lg:pt-24">
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {socialLinks.map(({ href, label, icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300"
                    aria-label={label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        {/* Cacher l'image sur les petits écrans */}
        <div className="w-full lg:w-1/2 flex justify-center lg:block hidden">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src={sary} 
              alt="Profile Picture" 
              width={350}
              height={350}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Homepage;
