import Image from "next/image";
import HTML from "../../Assets/Images/Html.png";
import Ai from "../../Assets/Images/Ai.png";
import MySQL from "../../Assets/Images/Mysql.png";
import Native from "../../Assets/Images/Native.png";

const skillsData = [
    {
        id: 1,
        title: "Web Technologies and Programming Languages",
        image: HTML,
        label: "HTML"
    },
    {
        id: 2,
        title: "Frameworks and Libraries",
        image: Native,
        label: "React.Js"
    },
    {
        id: 3,
        title: "Database Management Systems",
        image: MySQL,
        label: "MySQL"
    },
    {
        id: 4,
        title: "Tools",
        image: Ai,
        label: "Adobe Illustrator"
    },    
];


const Skills = () => {
    return (
        <section className="min-h-screen bg-gray-100 lg:px-16 pt-24" id="skills">
            <div className="flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-gray-800">My Skills</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    🌟With a diverse background of experience, I excel in a broad range of technical and creative skills, enabling me to transform ideas into innovative solutions by combining expertise, ingenuity, and a forward-thinking approach to tackle even the most complex challenges.
                </p>
                <div className="flex flex-col gap-8">

                </div>
            </div>
        </section>
    );
};

export default Skills;
