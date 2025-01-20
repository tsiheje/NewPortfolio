"use client";
import Image from "next/image";
import { FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import HTML from "../../Assets/Images/Html.png";
import Ai from "../../Assets/Images/Ai.png";
import MySQL from "../../Assets/Images/Mysql.png";
import Native from "../../Assets/Images/Native.png";
import CSS from "../../Assets/Images/Css.png";
import docker from "../../Assets/Images/docker.png";
import Figma from "../../Assets/Images/Figma.png";
import Ex from "../../Assets/Images/Ex.png";
import Git from "../../Assets/Images/Git.png";
import Js from "../../Assets/Images/Js.png";
import Next from "../../Assets/Images/Next.png";
import Node from "../../Assets/Images/Node.png";
import PHP from "../../Assets/Images/PHP.png";
import Postgre from "../../Assets/Images/Postgre.png";
import Tailwind from "../../Assets/Images/Tailwind.png";
import Ps from "../../Assets/Images/Ps.png";
import typescript from "../../Assets/Images/typescript.png";
import mui from "../../Assets/Images/mui.png";

const categorizedSkills = {
  "Frontend Development": [
    { id: 1, image: HTML, label: "HTML" },
    { id: 2, image: CSS, label: "CSS" },
    { id: 10, image: Js, label: "JavaScript" },
    { id: 17, image: typescript, label: "TypeScript" },
    { id: 15, image: Tailwind, label: "Tailwind CSS" },
  ],
  "Frameworks & Libraries": [
    { id: 2, image: Native, label: "React.js" },
    { id: 18, image: Native, label: "React Native" },
    { id: 11, image: Next, label: "Next.js" },
    { id: 12, image: Node, label: "Node.js" },
    { id: 8, image: Ex, label: "Express.js" },
    { id: 19, image: mui, label: "Material UI" },
  ],
  "Backend & Databases": [
    { id: 13, image: PHP, label: "PHP" },
    { id: 3, image: MySQL, label: "MySQL" },
    { id: 14, image: Postgre, label: "PostgreSQL" },
  ],
  "Design Tools": [
    { id: 7, image: Figma, label: "Figma" },
    { id: 4, image: Ai, label: "Adobe Illustrator" },
    { id: 16, image: Ps, label: "Adobe Photoshop" },
  ],
  "Development Tools": [
    { id: 9, image: Git, label: "Git" },
    { id: 6, image: docker, label: "Docker" },
  ],
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 lg:px-16 pt-24" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:text-left"
          >
             <h1 className="text-4xl font-bold text-gray-800 lg:text-left flex items-center gap-3">
              <FaTools className="text-blue-500" />
              My Skills
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              🌟 As a full-stack developer, I combine technical expertise with creative problem-solving to build comprehensive web solutions. My skill set spans front-end development, back-end architecture, and UI/UX design, allowing me to deliver complete, user-centered applications that meet modern development standards.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {Object.entries(categorizedSkills).map(([category, skills], categoryIndex) => (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {category}
                  </h2>
                  <div className="h-px flex-grow bg-gradient-to-r from-blue-200 to-transparent" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      variants={itemVariants}
                      className="group"
                    >
                      <div className="relative rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center gap-2">
                          <div className="relative  w-12 h-12">
                            <Image
                              src={skill.image}
                              alt={`${skill.label} logo`}
                              fill
                              className="object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <span className="text-xl font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                            {skill.label}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;