import Image from "next/image";
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
    return (
        <section className="min-h-screen bg-gray-100 lg:px-16 pt-24" id="skills">
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-bold text-gray-800">My Skills</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    🌟 With a diverse background of experience, I excel in a wide range of technical and creative skills, enabling me to transform ideas into innovative solutions. Proficient in programming languages, database management, frameworks and libraries, and modern tools, I bring expertise, ingenuity, and a forward-thinking approach to tackle even the most complex challenges.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-2">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="flex items-center gap-3 py-2 px-3">
                            <Image
                                src={skill.image}
                                alt={skill.label}
                                width={80}
                                height={80}
                            />
                            <span className=" text-xl text-gray-800 font-medium ">{skill.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
