"use client";
import { FaFolderOpen, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';
import { useState } from 'react';
import contact from "../../Assets/Images/contact.jpg";

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-48 w-full group">
      <div className="relative h-full w-full">
        <Image
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FaChevronLeft className="w-3 h-3" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FaChevronRight className="w-3 h-3" />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white w-3' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ images, title, description, technologies }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] w-full p-2">
      <ImageGallery images={images} />
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      images: [contact, contact, contact],
      title: "Ancien Portfolio",
      description: "To showcase my projects and skills, demonstrating my creativity and ability to craft attractive interfaces.",
      technologies: ["React.js", "Tailwind CSS", "GSAP Animation"],
    },
    {
      images: [contact, contact, contact],
      title: "Critical Path Methode",
      description: "Developing a web application for task scheduling using the Critical Path Method (CPM)",
      technologies: ["React.js", "Tailwind CSS", "Reactflow"],
    },
    {
      images: [contact, contact, contact],
      title: "One Note",
      description: "Creating a web platform for easy access to information, courses, and assignments, enhancing communication and education.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
    },
    {
        images: [contact, contact, contact],
        title: "RapidePrime",
        description: "Integration of Rapide Prime's website.",
        technologies: ["Next.js", "Tailwind CSS", "GSAP Animation"],
    },
    {
        images: [contact, contact, contact],
        title: "Mi-krea",
        description: "Integration of Mi-Krea's website.",
        technologies: ["Next.js", "GSAP Animation"],
    },
    {
        images: [contact, contact, contact],
        title: "Enjoy'B",
        description: "Présentation du troisième projet et de ses aspects innovants.",
        technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    }
  ];

  return (
    <section className="min-h-screen bg-gray-100 px-6 lg:px-16 pt-24" id="projects">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
          <FaFolderOpen className="text-blue-500" />
          MY PROJECTS
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          🌟 Dive into my innovative projects, where I leverage my expertise in front-end development to design and implement distinctive, high-performing web solutions that not only meet but exceed user expectations, combining creativity, technical precision, and a user-centered approach to deliver exceptional digital experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;