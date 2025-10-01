import React from "react";
import { motion } from "framer-motion";
import { Zap, Award, CheckCircle } from 'lucide-react';
// const certificates = [
//   {
//     id: 1,
//     title: "Full Stack Web Development",
//     institute: "WS Cube Tech",
//     image: "/certificates/certificate1.jpg",
//     link: "/certificates/certificate1.pdf",
//   },
//   {
//     id: 2,
//     title: "Node JS Developer",
//     institute: "PW Skills",
//     image: "/certificates/certificate2.png",
//     link: "/certificates/certificate2.png",
//   },
// ];


const CertificationsInfo = [
  {
    title: "MERN Stack Master Certification",
    issuer: "WS Cube Tech",
    date: "September 2025",
    link: "/certificates/certificate1.pdf", // Replace '#' with the actual verification URL or credential link
    description:
      "Comprehensive certification covering advanced topics in MongoDB administration, Express.js API development, dynamic React state management, and Node.js backend architecture.",
    icon: Zap,
    color: "text-pink-500",
  },
  {
    title: "Node Js Developer ",
    issuer: "Pw Skills", // Replace with actual platform
    date: "Aug 2023",
    link: "/certificates/certificate2.png", // Replace '#' with the actual verification URL or credential link
    description:
      "Specialized training in modern React concepts, including Hooks, Context API, and advanced component lifecycle management.",
    icon: Award,
    color: "text-purple-500",
  },
  // {
  //   title: "JavaScript (Intermediate)",
  //   issuer: "HackerRank / freeCodeCamp", // Replace with actual platform
  //   date: "May 2023",
  //   link: "#", // Replace '#' with the actual verification URL or credential link
  //   description:
  //     "Demonstrated proficiency in core JavaScript, asynchronous programming, ES6 features, and DOM manipulation.",
  //   icon: CheckCircle,
  //   color: "text-cyan-500",
  // },
];

const Certifications = () => {
  return (
     <section
    id="certifications"
    className="bg-gray-950 py-20 px-4 sm:px-8 lg:px-16 font-sans text-white"
  >
    {/* Content Container: Max width and centered */}
    <div className="max-w-4xl mx-auto">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-400">
          CERTIFICATIONS
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Validated skills and achievements from specialized courses and industry platforms.
        </p>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {CertificationsInfo.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`bg-gray-900/70 border border-gray-800 p-6 rounded-xl space-y-4 shadow-lg 
                          hover:shadow-2xl hover:shadow-purple-900/50 transition-all duration-300 transform hover:-translate-y-1`}
            >
              {/* Icon and Title */}
              <div className="flex items-center space-x-3">
                <Icon className={`w-6 h-6 ${item.color}`} />
                <h3 className="text-xl font-bold text-gray-100">{item.title}</h3>
              </div>

              {/* Issuer and Date */}
              <div className="text-sm font-medium text-gray-400">
                <p className="text-purple-300">Issued by: {item.issuer}</p>
                <p>Date: {item.date}</p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm">{item.description}</p>
              
              {/* Verification Link */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-1 font-semibold text-sm ${item.color} 
                           hover:underline transition-colors duration-200`}
              >
                <span>View Credential</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default Certifications;
