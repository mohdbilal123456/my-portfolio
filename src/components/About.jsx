import React from "react";
import profileImageUrl from "../assets/myphoto2.png"; // apna image path

const About = () => {
  const tiltEffectStyles =
    "hover:scale-[1.03] hover:shadow-purple-700/80 transition-all duration-500 ease-out";

  return (
    <section
      id="about"
      className="bg-[#0f0f1a] text-white lg:pt-[140px] pt-[120px] pb-16 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/*
          1. Desktop Heading: Visible ONLY on md screens and up, centered at the top.
        */}
        <h1 className="hidden md:block text-4xl sm:text-5xl font-extrabold text-center text-purple-400">
          About Me
        </h1>
        {/* ADDED: Desktop Underline */}
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 mb-16 hidden md:block"></div>
        
        {/*
          Container for the main content block:
          flex-col (mobile): Order: Photo -> H1 (About Me) -> Text Content
          md:flex-row (desktop): Order: Text Content (Left) -> Photo (Right)
        */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* 1. Profile Photo (Top on mobile, Right on Desktop) */}
          {/* Use md:order-2 to push the photo to the right side on desktop */}
          <div className="md:w-1/2 flex justify-center md:justify-end md:order-2"> 
            <div
              className={`w-64 h-64 sm:w-72 sm:h-72 lg:w-100 lg:h-100 
                        border-[6px] border-purple-500 rounded-full overflow-hidden 
                        shadow-2xl shadow-purple-900/80 flex items-center justify-center
                        ${tiltEffectStyles} cursor-pointer`}
            >
              <img
                src={profileImageUrl}
                alt="Mohd Bilal Profile"
                className="w-full h-full object-cover object-center  "
              />
            </div>
          </div>
          
          {/* 2. Mobile Heading (Visible ONLY on mobile) */}
          {/* md:hidden to hide it on desktop. */}
          <div> {/* Wrapper div for H1 and Underline */}
             <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-purple-400 mb-0 mt-8 md:hidden"> 
              About Me
            </h1>
            {/* ADDED: Mobile Underline */}
            <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 md:hidden"></div>
          </div>
          
          
          {/* 3. Text Content (Bottom on mobile, Left on Desktop) */}
          {/* md:order-1 to put the text block on the left side on desktop */}
          <div className="md:w-1/2 text-center md:text-left space-y-6 md:order-1">
            
            <h2 className="text-3xl sm:text-4xl font-bold">
              Hi, I'm <span className="text-pink-500">Mohd Bilal</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate{" "}
              <span className="text-purple-400 font-semibold">
                MERN Stack Developer
              </span>{" "}
              turning creative concepts into efficient, scalable web applications, trained at WS Cube.
            </p> 
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I have hands-on experience in building modern web applications using MongoDB, Express.js, React, and Node.js. My focus is delivering seamless user experiences and contributing to impactful projects.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-8 rounded-full font-bold text-lg 
                          shadow-2xl shadow-purple-900/50 hover:from-purple-500 hover:to-pink-400 
                          transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              Download Resume
            </a>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default About;