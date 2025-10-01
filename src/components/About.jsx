import React from "react";
import profileImageUrl from "../assets/myphoto.png"; // apna image path

const About = () => {
  const tiltEffectStyles =
    "hover:scale-[1.03] hover:shadow-purple-700/80 transition-all duration-500 ease-out";

  return (
    <section
      id="about"
      // Navbar ke liye safe top padding (110px nav + 40px gap)
      className="bg-[#0f0f1a] text-white lg:pt-[140px] pt-[120px] pb-16 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-purple-400">
          About Me
        </h1>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Hi, I'm <span className="text-pink-500">Mohd Bilal</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate{" "}
              <span className="text-purple-400 font-semibold">
                MERN Stack Developer
              </span>{" "}
              with hands-on experience in building modern, scalable web
              applications using <strong>MongoDB, Express.js, React, and Node.js</strong>. 
              I completed professional training from <strong>WS Cube</strong>,
              where I gained expertise in full-stack development, responsive
              design, and real-world projects.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I thrive on solving complex problems, constantly learning new
              technologies, and transforming creative concepts into functional
              and efficient applications. My focus is delivering seamless user
              experiences and contributing to impactful projects.
            </p>

            <a
              href="./public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-8 rounded-full font-bold text-lg 
                         shadow-2xl shadow-purple-900/50 hover:from-purple-500 hover:to-pink-400 
                         transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              Download CV
            </a>
          </div>

          {/* Right Side: Profile Photo */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div
              className={`w-64 h-64 sm:w-72 sm:h-72 lg:w-100 lg:h-100 
                         border-[6px] border-purple-500 rounded-full overflow-hidden 
                         shadow-2xl shadow-purple-900/80 flex items-center justify-center
                         ${tiltEffectStyles} cursor-pointer`}
            >
              <img
                src={profileImageUrl}
                alt="Mohd Bilal Profile"
                className="w-full h-full object-cover object-center "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
