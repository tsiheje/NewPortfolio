"use client";
import Image from "next/image";
import sary from "../../Assets/Images/sariko.png";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

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
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center lg:px-16 w-full pt-24" id="about">
      <div className="mb-12 w-full">
        <motion.h1
          className="text-4xl font-bold text-gray-800 text-center flex items-center gap-5 ml-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FaUser className="text-blue-500" />
          About Me
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto mt-10 px-4">
          <div className="w-full md:w-1/3">
            <Image
              src={sary}
              width={260}
              height={260}
              className="rounded-lg mx-auto"
              alt="Profile picture"
            />
          </div>
          <div className="hidden md:flex items-center flex-col gap-5">
            <div className="w-1 h-40 bg-gray-800 rounded"></div>
            <div className="w-5 h-5 rounded-full border-4 border-gray-800"></div>
            <div className="w-1 h-40 bg-gray-800 rounded"></div>
          </div>
          <div className="w-full md:w-2/3">
            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              🚀 I&apos;m Mickaelio, an enthusiastic front-end developer specializing in React.js and a
              passionate web integrator! 💻 My goal is to transform ideas into captivating and
              high-performing digital experiences. 🌟 Whether it&apos;s creating intuitive interfaces or
              optimizing loading speeds, I strive to deliver innovative web solutions that delight users
              while adhering to the highest quality standards.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4 mb-5 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Would you like to explore my full range of skills, experience, and the diverse projects
              I&apos;ve worked on, showcasing my expertise and passion for creating impactful digital
              solutions?
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <a
                href="/files/Rasolofoniaina Tsiheje Marie Mickaelio.pdf"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-xl py-3 px-5 rounded-lg shadow-lg transition-colors duration-300 mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </motion.p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-8 w-full mb-12 px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`${skill.bgColor} rounded-lg shadow-lg p-6 w-full sm:w-[400px] md:w-[520px] h-[200px] transition-transform duration-300 transform hover:scale-105`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h2 className={`text-2xl font-semibold ${skill.textColor} mb-2`}>{skill.title}</h2>
            <p className={`${skill.textColor === "text-white" ? "text-white" : "text-gray-600"}`}>
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
