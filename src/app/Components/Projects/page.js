import Image from 'next/image';
import HTML from "../../Assets/Images/Html.png";
import Ai from "../../Assets/Images/Ai.png";
import MySQL from "../../Assets/Images/Mysql.png";
import Native from "../../Assets/Images/Native.png";
import { FaFolderOpen } from "react-icons/fa";

const projects = [
    {
        src: HTML,
        alt: "Projet 1",
        description: "A web application built with HTML and CSS, focusing on responsive design.",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        src: Ai,
        alt: "Projet 2",
        description: "A machine learning project using AI technologies for data analysis.",
        technologies: ["Python", "TensorFlow", "AI/ML"],
    },
    {
        src: MySQL,
        alt: "Projet 3",
        description: "A full-stack application with MySQL for efficient database management.",
        technologies: ["Node.js", "Express", "MySQL"],
    },
    {
        src: Native,
        alt: "Projet 4",
        description: "A mobile app developed using React Native for cross-platform compatibility.",
        technologies: ["React Native", "Expo", "Firebase"],
    },
];

const ProjectCard = ({ project, index }) => (
    <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl p-6 w-full max-w-4xl mb-8 transition-all duration-300 hover:scale-105">
        {index % 2 === 0 ? (
            <>
                <div className="flex-1">
                    <Image
                        src={project.src}
                        alt={project.alt}
                        className="rounded-lg w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover mx-auto"
                    />
                </div>
                <div className="flex-1 pl-6 mt-4 lg:mt-0">
                    <h3 className="text-2xl font-semibold text-gray-800">{project.alt}</h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    <div className="mt-4">
                        <strong className="text-gray-800">Technologies:</strong>
                        <ul className="list-disc pl-5 text-gray-600">
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        ) : (
            <>
                <div className="flex-1 pr-6 mt-4 lg:mt-0">
                    <h3 className="text-2xl font-semibold text-gray-800">{project.alt}</h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    <div className="mt-4">
                        <strong className="text-gray-800">Technologies:</strong>
                        <ul className="list-disc pl-5 text-gray-600">
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                    <Image
                        src={project.src}
                        alt={project.alt}
                        className="rounded-lg w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover mx-auto"
                    />
                </div>
            </>
        )}
    </div>
);

const Projects = () => {
    return (
        <section className="min-h-screen bg-gray-100 px-6 lg:px-16 pt-24" id="projects">
            <div className="flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
                    <FaFolderOpen className="text-blue-500" />
                    My Projects
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    🌟 Dive into my innovative projects, where I leverage my expertise in front-end development to design and implement distinctive, high-performing web solutions that not only meet but exceed user expectations, combining creativity, technical precision, and a user-centered approach to deliver exceptional digital experiences.
                </p>
                <div className="flex flex-col items-center justify-center gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
