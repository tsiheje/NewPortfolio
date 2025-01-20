"use client";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaSkype } from "react-icons/fa";
import { motion } from "framer-motion"; // Importer framer motion
import bgimage from "../../Assets/Images/bgimage.jpg";
import sary from "../../Assets/Images/images.png";

const Homepage = () => {
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

  const handleSocialClick = (e, href) => {
    e.stopPropagation();
    window.open(href, "_blank", "noopener,noreferrer");
  };

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
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full px-4 sm:px-6 lg:px-16 py-36 lg:py-40"
        initial={{ opacity: 0 }} // Initial state
        animate={{ opacity: 1 }} // Final state
        transition={{ duration: 1 }} // Durée de l'animation
      >
        <div className="w-full lg:w-1/2 max-w-2xl lg:mr-8">
          <div className="space-y-6 lg:space-y-8">
            <div>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight"
                initial={{ y: -50, opacity: 0 }} // Initial position and opacity
                animate={{ y: 0, opacity: 1 }} // Final position and opacity
                transition={{ duration: 1 }}
              >
                Hello!👋
              </motion.h1>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                I&apos;m,{" "}
                <span className="text-blue-400 mt-2 text-5xl sm:text-7xl lg:text-8xl">
                  Mickaelio
                </span>
              </motion.h1>
            </div>
            <motion.p
              className="text-base sm:text-lg text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              🌟 A dedicated front-end developer and web integrator with a passion for crafting seamless
              user experiences. Specializing in{" "}
              <span className="text-blue-400">React</span>, I transform ideas into impactful and
              memorable digital solutions. 🚀
            </motion.p>
            <div className="pt-12 sm:pt-16 lg:pt-24">
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {socialLinks.map(({ href, label, icon }) => (
                  <button
                    key={label}
                    onClick={(e) => handleSocialClick(e, href)}
                    className="text-gray-300 hover:text-blue-400 transition-transform duration-300 transform hover:scale-110"
                    aria-label={label}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:block hidden">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={sary}
              alt="Profile Picture"
              width={350}
              height={350}
              priority
              className="ml-32"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Homepage;
