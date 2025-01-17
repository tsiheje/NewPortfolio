import Image from "next/image";
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
import { FaTools } from "react-icons/fa";

const skillsData = [
    { id: 1, image: HTML, label: "HTML" },
    { id: 2, image: CSS, label: "CSS" },
    { id: 10, image: Js, label: "JavaScript" },
    { id: 17, image: typescript, label: "Typescript" },
    { id: 2, image: Native, label: "React.Js" },
    { id: 11, image: Next, label: "Next.js" },
    { id: 12, image: Node, label: "Node.js" },
    { id: 8, image: Ex, label: "Express.js" },
    { id: 15, image: Tailwind, label: "Tailwind CSS" },
    { id: 13, image: PHP, label: "PHP" },
    { id: 3, image: MySQL, label: "MySQL" },
    { id: 14, image: Postgre, label: "PostgreSQL" },
    { id: 9, image: Git, label: "Git" },
    { id: 7, image: Figma, label: "Figma" },
    { id: 4, image: Ai, label: "Adobe Illustrator" },
    { id: 16, image: Ps, label: "Adobe Photoshop" },
    { id: 6, image: docker, label: "Docker" },
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const headerVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const textVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const skillVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const floatVariants = {
        hover: {
            y: -10,
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.section 
            className="min-h-screen bg-gray-100 px-6 lg:px-16 pt-24" 
            id="skills"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="flex flex-col gap-5">
                <motion.h1
                    className="text-4xl font-bold text-gray-800  lg:text-left flex items-center gap-3"
                    variants={headerVariants}
                    >
                    <FaTools className="text-blue-500" />
                    My Skills
                </motion.h1>
                <motion.p 
                    className="text-lg text-gray-700 leading-relaxed lg:text-left"
                    variants={textVariants}
                >
                    🌟 With a diverse background of experience, I excel in a wide range of technical and creative skills, enabling me to transform ideas into innovative solutions. Proficient in programming languages, database management, frameworks and libraries, and modern tools, I bring expertise, ingenuity, and a forward-thinking approach to tackle even the most complex challenges.
                </motion.p>
                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-2"
                    variants={containerVariants}
                >
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            className="flex items-center justify-center bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow cursor-pointer gap-2"
                            variants={skillVariants}
                            whileHover="hover"
                            // variants={floatVariants}
                            custom={index}
                        >
                            <motion.div
                                initial={{ rotate: 0 }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Image
                                    src={skill.image}
                                    alt={skill.label}
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </motion.div>
                            <motion.span 
                                className="text-md text-gray-800 font-medium mt-3 text-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                {skill.label}
                            </motion.span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Skills;