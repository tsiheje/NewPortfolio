import { motion } from "framer-motion";

const skills = [
  {
    title: "Front-End Development",
    description: "Creating responsive and modern user interfaces with React.js, focusing on performance and accessibility.",
    bgColor: "bg-white",
    textColor: "text-gray-800",
  },
  {
    title: "Back-End Development",
    description: "Building robust and secure architectures, managing databases, and developing efficient APIs to ensure a smooth and responsive user experience.",
    bgColor: "bg-blue-400",
    textColor: "text-white",
  },
  {
    title: "Web Integration",
    description: "Integrating mockups and designs into HTML/CSS with a keen eye for detail and multi-browser compatibility.",
    bgColor: "bg-gray-800",
    textColor: "text-white",
  },
  {
    title: "Performance Optimization",
    description: "Optimizing sites for fast loading speed and maximum performance by minimizing files and optimizing images.",
    bgColor: "bg-white",
    textColor: "text-gray-800",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center lg:px-16 w-full" id="about">
      <div className="mb-12">
      <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        <div>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          🚀 I'm Mickaelio, an enthusiastic front-end developer specializing in React.js and a passionate web integrator! 💻 My goal is to transform ideas into captivating and high-performing digital experiences. 🌟 Whether it's creating intuitive interfaces or optimizing loading speeds, I strive to deliver innovative web solutions that delight users while adhering to the highest quality standards.
        </p>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          To learn more about me and my skills, check out my <a href="/path-to-your-cv.pdf" className="bg-blue-500 text-white text-xl py-3 px-5 rounded-lg shadow-lg" target="_blank" rel="noopener noreferrer">Download CV</a>
        </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-8 w-full mb-12">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className={`${skill.bgColor} rounded-lg shadow-lg p-6 w-[500px]`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className={`text-2xl font-semibold ${skill.textColor} mb-4`}>{skill.title}</h2>
            <p className={`${skill.textColor === "text-white" ? "text-white" : "text-gray-600"}`}>
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
