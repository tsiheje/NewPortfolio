"use client";
import Image from "next/image";
import sary from "../../Assets/Images/sariko.png";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Hook personnalisé pour détecter la visibilité
const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Réinitialise l'animation quand la section sort de la vue
        if (!entry.isIntersecting) {
          setIsInView(false);
        } else {
          setIsInView(true);
        }
      },
      {
        threshold: 0.2, // Déclenche quand 20% de l'élément est visible
        rootMargin: "-50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

const skills = [
  {
    title: "Front-End Development",
    description:
      "Designing and developing responsive, modern user interfaces with React.js, ensuring optimal performance, seamless user experiences.",
    bgColor: "bg-white",
    textColor: "text-gray-800",
  },
  {
    title: "Back-End Development",
    description:
      "Building robust and secure architectures, managing databases, and developing efficient APIs to ensure a smooth and responsive user experience.",
    bgColor: "bg-blue-400",
    textColor: "text-white",
  },
  {
    title: "Web Integration",
    description:
      "Transforming mockups and designs into pixel-perfect HTML/CSS implementations, ensuring attention to detail, multi-browser compatibility.",
    bgColor: "bg-gray-800",
    textColor: "text-white",
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing website performance and loading speed by implementing file optimization techniques, compressing images.",
    bgColor: "bg-white",
    textColor: "text-gray-800",
  },
];

const About = () => {
  const [sectionRef, isInView] = useInView();

  const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gray-100 flex flex-col items-center w-full pt-24 px-4 lg:px-16" 
      id="about"
    >
      <div className="mb-12 w-full">
        <motion.h1
          className="text-4xl font-bold text-gray-800 flex items-center gap-5"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <FaUser className="text-blue-500" />
          About Me
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto mt-10">
          <motion.div 
            className="w-full md:w-1/3"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={sary}
              width={260}
              height={260}
              className="rounded-lg mx-auto"
              alt="Profile picture"
            />
          </motion.div>

          <div className="hidden md:flex items-center flex-col gap-5">
            <div className="w-1 h-40 bg-gray-800 rounded"></div>
            <div className="w-5 h-5 rounded-full border-4 border-gray-800"></div>
            <div className="w-1 h-40 bg-gray-800 rounded"></div>
          </div>

          <motion.div 
            className="w-full md:w-2/3"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              🚀 I&apos;m Mickaelio, an enthusiastic front-end developer specializing in React.js and a
              passionate web integrator! 💻 My goal is to transform ideas into captivating and
              high-performing digital experiences. 🌟 Whether it&apos;s creating intuitive interfaces or
              optimizing loading speeds, I strive to deliver innovative web solutions that delight users
              while adhering to the highest quality standards.
            </p>
            <p className="text-lg text-gray-700 mt-4 mb-5 leading-relaxed">
              Would you like to explore my full range of skills, experience, and the diverse projects
              I&apos;ve worked on, showcasing my expertise and passion for creating impactful digital
              solutions?
            </p>
            <a
              href="/files/Rasolofoniaina Tsiheje Marie Mickaelio.pdf"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-xl py-3 px-5 rounded-lg shadow-lg transition-all duration-300 mt-4 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-7xl mb-12 px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`${skill.bgColor} rounded-lg shadow-lg p-6 h-auto min-h-[180px] transition-all duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <h2 className={`text-2xl font-semibold ${skill.textColor} mb-4`}>{skill.title}</h2>
            <p className={`${skill.textColor === "text-white" ? "text-white" : "text-gray-600"}`}>
              {skill.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;