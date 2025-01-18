"use client";
import { FaFolderOpen } from "react-icons/fa";
import Image from 'next/image';


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
                    
                </div>
            </div>
        </section>
    );
};

export default Projects;
