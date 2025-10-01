import React from "react";

// Education Data for Mohd Bilal
const EducationInfo = [
  {
    year: "2021 - 2025",
    title: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Allenhouse Institute Of Technology,", // Replace with your actual University name
    description:
      "I have completed my B.Tech in Computer Science and Engineering (2021–2025), where I developed a strong foundation in software development",
    color: "border-purple-500",
  },
  {
    year: "2025 (jan) - 2025 (Aug)",
    title: "MERN Stack Development Training",
    institution: "WS Cube Tech",
    description:
      "Completed intensive professional training in Full-Stack Web Development, gaining expertise in MongoDB, Express.js, React, and Node.js. Focused on building scalable, responsive, and secure web applications.",
    color: "border-pink-500",
  },
  
  {
    year: "2018 - 2020",
    title: "Higher Secondary (12th Grade)",
    institution: "Model Higher Secondary School, Kanpur,Uttar Pradesh", // Replace with your actual School name
    description:
      "Focused on Science stream (PCM) and successfully completed higher secondary education, building a strong foundation for technical studies.",
    color: "border-cyan-500",
  },
];

const Education = () => (
  <section
    id="education"
    className="bg-gray-950 py-20 px-4 sm:px-8 lg:px-16 font-sans text-white"
  >
    {/* Content Container: Max width and centered */}
    <div className="max-w-4xl mx-auto">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-400">
          EDUCATION & TRAINING
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          My academic background and specialized training that shaped my development journey.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative">
        {/* Vertical Line for Timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-700 hidden md:block"></div>

        {EducationInfo.map((item, index) => (
          <div
            key={index}
            className="mb-10 flex flex-col md:flex-row items-start md:items-center w-full"
          >
            {/* Left Side: Text Content or Year (for small screens) */}
            <div
              className={`md:w-1/2 p-4 rounded-xl shadow-lg transition-all duration-500 
                         transform hover:scale-[1.02] ${
                           index % 2 === 0
                             ? "md:pr-10 md:text-right"
                             : "md:pl-10 md:text-left md:order-2"
                         }`}
            >
              <div className={`block md:hidden mb-2 text-sm font-semibold ${
                item.color.includes('pink') ? 'text-pink-400' : 
                item.color.includes('purple') ? 'text-purple-400' : 
                'text-cyan-400'
              }`}>{item.year}</div>
              
              <div className="bg-gray-900/70 border border-gray-800 p-6 rounded-xl space-y-2">
                <h3 className="text-xl font-bold text-gray-100">{item.title}</h3>
                <h4 className="text-sm font-medium text-purple-300">{item.institution}</h4>
                <p className="text-gray-400 text-sm mt-2">{item.description}</p>
              </div>
            </div>

            {/* Center Circle (Only visible on medium and larger screens) */}
            <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2">
              <div
                className={`w-4 h-4 rounded-full bg-gray-950 border-4 ${item.color} shadow-lg`}
                style={{ marginTop: `${index * 170}px` }} // Adjust spacing for timeline
              ></div>
            </div>
            
            {/* Right Side: Year (Only visible on medium and larger screens) */}
            <div
              className={`hidden md:block md:w-1/2 p-4 text-2xl font-extrabold 
                         ${index % 2 === 0 ? "md:order-2 md:text-left pl-10 text-pink-400" : "md:text-right pr-10 text-purple-400"}`}
            >
              {item.year}
            </div>
            
          </div>
        ))}
        {/* Adjust the positioning of the timeline dots manually if spacing looks off */}
      </div>
    </div>
  </section>
);

export default Education;
