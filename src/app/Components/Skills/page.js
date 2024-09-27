import { useState } from "react";
import Image from "next/image";
import HTML from "../../Assets/Images/Html.png";
import Ai from "../../Assets/Images/Ai.png";
import MySQL from "../../Assets/Images/Mysql.png";
import Native from "../../Assets/Images/Native.png";

const skillsData = [
    {
        id: 1,
        title: "Technologie web et Langage de programmation",
        image: HTML,
        label: "HTML"
    },
    {
        id: 2,
        title: "Frameworks et Librairies",
        image: Native,
        label: "React.Js"
    },
    {
        id: 3,
        title: "Systèmes de gestion de base de données",
        image: MySQL,
        label: "MySQL"
    },
    {
        id: 4,
        title: "Outils",
        image: Ai,
        label: "Adobe Illustrator"
    },
];

const SkillItem = ({ skill, isOpen, toggle }) => (
    <div className="flex flex-col gap-8">
        <div onClick={toggle} className="flex items-center gap-8 cursor-pointer">
            <div className="flex items-center justify-center w-12 h-12 border-black border-2 rounded-full">
                <span className="font-semibold text-3xl">{skill.id}</span>
            </div>
            <h1 className="font-semibold text-3xl">{skill.title}</h1>
        </div>
        {isOpen && (
            <div className="flex items-center gap-4">
                <Image src={skill.image} alt={skill.label} />
                <p className="font-semibold text-xl">{skill.label}</p>
            </div>
        )}
        <div className="border border-black"></div>
    </div>
);

const Skills = () => {
    const [openSkills, setOpenSkills] = useState(Array(skillsData.length).fill(false));

    const toggleSkill = (index) => {
        setOpenSkills(prev => {
            const newOpenSkills = [...prev];
            newOpenSkills[index] = !newOpenSkills[index];
            return newOpenSkills;
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 lg:px-16" id="skills">
            <div className="flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-gray-800">Mes compétences</h1>
                <p>
                    Fort d'une expérience diversifiée, je maîtrise un large éventail de compétences techniques et créatives qui me permettent de transformer des idées en solutions innovantes.
                </p>
                <div className="flex flex-col gap-8">
                    {skillsData.map((skill, index) => (
                        <SkillItem 
                            key={skill.id} 
                            skill={skill} 
                            isOpen={openSkills[index]} 
                            toggle={() => toggleSkill(index)} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
