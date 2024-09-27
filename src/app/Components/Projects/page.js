import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import HTML from "../../Assets/Images/Html.png";
import Ai from "../../Assets/Images/Ai.png";
import MySQL from "../../Assets/Images/Mysql.png";
import Native from "../../Assets/Images/Native.png";

const images = [
    { src: HTML, alt: "Projet 1" },
    { src: Ai, alt: "Projet 2" },
    { src: MySQL, alt: "Projet 3" },
    { src: Native, alt: "Projet 4" },
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const ProjectSlider = () => (
    <Slider {...settings}>
        {images.map(({ src, alt }) => (
            <div key={alt}>
                <Image src={src} alt={alt} className="rounded-lg w-full h-[50px] object-cover" />
            </div>
        ))}
    </Slider>
);

const ProjectCard = () => (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 w-full h-[450px]">
        <ProjectSlider />
    </div>
);

const Projects = () => {
    return (
        <div className="min-h-screen bg-gray-100 lg:px-16" id="projects">
            <div className="flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-gray-800">Mes projets</h1>
                <p>
                    🌟 Explorez mes projets innovants, où j'applique mes compétences en développement front-end pour créer des solutions web uniques et performantes qui répondent aux besoins des utilisateurs.
                </p>
                <div className="flex flex-col items-center justify-center flex-wrap gap-3">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
};

export default Projects;
