import React, { useState, useEffect } from "react";
import { Github, ExternalLink, X } from 'lucide-react';

// Placeholder image URLs for compilation, please replace these with your actual project screenshots
import placeholderImage1 from '../assets/project1.png'
import placeholderImage3 from '../assets/project3.png'
import placeholderImage2 from '../assets/project2.png'


const projects = [
  {
    id: 1,
    title: "OneCart E-Commerce Application",
    description: `I’ve recently built OneCart, a complete MERN stack e-commerce application. This project features full user authentication, product management, secure payment integration, and a comprehensive admin panel for order tracking and inventory management.`,
    image: placeholderImage1,
    tech: ["MERN Stack", "Context API", "Tailwind CSS"],
    liveLink: "https://new-one-cart-frontend.onrender.com/",
    codeLink: "https://github.com/mohdbilal123456/New-One-Cart",
  },
  {
    id: 2,
    title: "Food Delivery Application",
    description: "Frontend food ordering application simulating Zomato/Swiggy. It includes dynamic routing, menu display, cart functionality, and uses Redux Toolkit for efficient state management across components, providing a seamless ordering experience.",
    image: placeholderImage3,
    tech: ["React JS", "Redux Toolkit", "Tailwind CSS"],
    liveLink: "https://food-delivery-app-t7no.vercel.app/",
    codeLink: "https://github.com/mohdbilal123456/Food-Delivery-App",
  },
  {
    id: 3,
    title: "AI Virtual Assistance",
    description: `Voice-based AI virtual assistant built using React and the Gemini API. This application processes speech input, interacts with the LLM model to generate responses, and provides audio output, demonstrating proficiency in integrating advanced AI services.`,
    image: placeholderImage2,
    tech: ["React JS", "Vanilla CSS", "Gemini API", "Speech Recognition"],
    liveLink: "https://deluxe-macaron-3ecfda.netlify.app/",
    codeLink: "https://github.com/mohdbilal123456/Virtual-Assistant",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Effect to prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-[#0f0f1a] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-purple-400">
          PROJECTS
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-16"></div>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 px-4 text-lg">
          MERN Stack Developer ke roop mein, main complex problems ko solve karne aur user-centric applications banane mein vishwas rakhta hoon. Yeh mere kuch khaas projects hain:
        </p>

        {/* Projects Grid (Already fixed aspect ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#141422] rounded-xl p-5 cursor-pointer shadow-xl border border-gray-800 hover:border-cyan-500 transition-all duration-300 transform hover:scale-[1.03] group relative overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image - Fixed with 16:9 Aspect Ratio */}
              <div className="relative pt-[56.25%] mb-4 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition duration-500 group-hover:opacity-80"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x337/1e293b/ffffff?text=Project+Image+Missing" }}
                />
              </div>
              
              {/* Title and Description */}
              <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                {project.description}
              </p>
              
              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="bg-purple-900/50 text-xs px-3 py-1 rounded-full text-purple-300 font-medium border border-purple-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4 transition-opacity duration-300" onClick={() => setSelectedProject(null)}>
            <div 
              className="bg-gray-900 rounded-2xl w-full max-w-3xl p-6 relative max-h-[95vh] overflow-y-auto transform scale-100 transition-transform duration-300 border-2 border-cyan-500 shadow-[0_0_50px_rgba(52,211,255,0.4)]"
              onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing on inner click
            >
              
              {/* Modal Image - Fixed with 16:9 Aspect Ratio */}
              <div className="relative pt-[56.25%] mb-6 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x450/1e293b/ffffff?text=Project+Screenshot+Missing" }}
                />
              </div>

              {/* Close Button - Positioned BELOW the image, near the top right content area */}
              <button
                className="absolute top-6 right-6 bg-purple-600 hover:bg-purple-700 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg transition duration-200 shadow-md z-10" // z-10 added for safety
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content (Starts after image container) */}
              <h3 className="text-3xl font-extrabold mb-3 text-cyan-400">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-5 text-base leading-relaxed">{selectedProject.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/70 text-sm px-3 py-1 rounded-full text-white font-medium shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-center px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 flex-1 flex items-center justify-center transition duration-300 shadow-md border border-gray-600"
                >
                  <Github className="w-5 h-5 mr-2" /> View Code
                </a>
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-600 text-center px-6 py-3 rounded-xl font-semibold hover:bg-cyan-500 flex-1 flex items-center justify-center transition duration-300 shadow-md border border-cyan-500"
                >
                  <ExternalLink className="w-5 h-5 mr-2" /> View Live
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}