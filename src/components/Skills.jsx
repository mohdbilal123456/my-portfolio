import React from "react";
// Assuming SkillsInfo is defined in a separate file (e.g., ../constants.js)
// If you don't have constants.js, please provide the array structure for SkillsInfo
// import { SkillsInfo } from "../constants.js"; 
import tailwindlogo from '../assets/tech_logo/tailwindcss.png'
// Placeholder data for SkillsInfo to ensure the component runs
const SkillsInfo = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", logo: tailwindlogo },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "REST APIs", logo: "https://img.icons8.com/color/48/api.png" },
    ],
  },
];

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-4 sm:px-8 lg:px-16 font-sans bg-[#0f0f1a] text-white"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-purple-400">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-purple-400 mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    {/* Skill Categories Grid */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-[#141422] rounded-2xl p-6 shadow-xl border border-gray-800 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-cyan-400">
            {category.title}
          </h3>

          {/* Skill Items - Enhanced styling for visual appeal */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-[1.03] cursor-pointer h-full"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-8 h-8 sm:w-10 sm:h-10 mb-1"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/40x40/334155/ffffff?text=?" }}
                />
                <span className="text-xs sm:text-sm text-gray-300 font-medium text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
