import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HTML from "../../Assets/Images/Html.png";
import Ai from "../../Assets/Images/Ai.png";
import MySQL from "../../Assets/Images/Mysql.png";
import Native from "../../Assets/Images/Native.png";
import { FaFolderOpen } from "react-icons/fa";

const images = [
    { src: HTML, alt: "Projet 1" },
    { src: Ai, alt: "Projet 2" },
    { src: MySQL, alt: "Projet 3" },
    { src: Native, alt: "Projet 4" },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
};

const ProjectSlider = () => (
    <Slider {...settings}>
        {images.map(({ src, alt }, index) => (
            <div key={index}>
                <Image src={src} alt={alt} className="rounded-lg w-[400px] h-[400px] object-cover" />
            </div>
        ))}
    </Slider>
);

const ProjectCard = () => (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 w-full h-[500px]">
        <ProjectSlider />
    </div>
);

const Projects = () => {
    return (
        <section className="min-h-screen bg-gray-100 lg:px-16 pt-24" id="projects">
            <div className="flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
                    <FaFolderOpen className="text-blue-500" />
                    My Projects
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    🌟 Dive into my innovative projects, where I leverage my expertise in front-end development to design and implement distinctive, high-performing web solutions that not only meet but exceed user expectations, combining creativity, technical precision, and a user-centered approach to deliver exceptional digital experiences.
                </p>
                <div className="flex flex-col items-center justify-center flex-wrap gap-3">
                    {[...Array(5)].map((_, index) => (
                        <ProjectCard key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
