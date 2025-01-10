import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaSkype } from "react-icons/fa";
import sariko from "../../Assets/Images/profile-pic.png";
import bgimage from "../../Assets/Images/bgimage.jpg";

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
    <div id="home" className="relative min-h-screen w-full">
      {/* Background fixed */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src={bgimage}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>
      {/* Content of the home section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-16 py-36 lg:py-40">
        <div className="w-full lg:w-1/2 max-w-2xl lg:mr-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Hello, I'm <span className="text-blue-400 block mt-2 text-5xl sm:text-6xl lg:text-7xl">Mickaelio</span>
            </h1>
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
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <motion.div 
            className="rounded-full overflow-hidden ring-4 ring-blue-400/50 shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src={sariko} 
              alt="Profile Picture" 
              width={280}
              height={280}
              className="rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
