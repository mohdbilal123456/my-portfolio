import React, { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react'; // Icons from Lucide for better aesthetics

// IMPORTANT: Replace this placeholder with your actual Formspree endpoint URL
// Example: https://formspree.io/f/yourendpointid
const FORMSPREE_ENDPOINT_URL = "https://formspree.io/f/xpwyrwqd"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Formspree requires a POST request
      const response = await fetch(FORMSPREE_ENDPOINT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      setStatus("error");
    }
  };

  return (
    <>
    <section
      id="contact"
      className="bg-gray-950 py-20 px-4 sm:px-8 lg:px-16 font-sans text-white"
    >
      {/* Content Container: Max width and centered */}
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-400">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Have a question or a project idea? I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:w-1/3 space-y-8">
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Contact Info</h3>

            {/* Email Card */}
            <div className="flex items-start space-x-4 bg-gray-900/70 p-6 rounded-xl border border-gray-800 shadow-xl transition-all hover:border-purple-600">
              <Mail className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-400">Email Address</p>
                <a 
                  href="mailto:mohd.bilal@example.com" // Replace with your actual email
                  className="text-lg text-gray-200 hover:text-purple-400 transition-colors"
                >
                  mohdbilalb09@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-start space-x-4 bg-gray-900/70 p-6 rounded-xl border border-gray-800 shadow-xl transition-all hover:border-pink-600">
              <Phone className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-400">Phone Number</p>
                <a 
                  href="tel:+917007374243" // Replace with your actual phone number
                  className="text-lg text-gray-200 hover:text-pink-400 transition-colors"
                >
                  +91 7007374243
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-start space-x-4 bg-gray-900/70 p-6 rounded-xl border border-gray-800 shadow-xl transition-all hover:border-cyan-600">
              <MapPin className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-400">Location</p>
                <p className="text-lg text-gray-200">Kanpur ,Uttar Pradesh, India</p>
              </div>
            </div>
          </div>


          {/* Right Side: Contact Form */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/70 p-8 rounded-xl border border-gray-800 shadow-2xl">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 transition duration-300 placeholder-gray-500"
                  placeholder="Mohd Bilal"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 transition duration-300 placeholder-gray-500"
                  placeholder="example@domain.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 transition duration-300 placeholder-gray-500"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>

              {/* Submission Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 px-6 rounded-lg font-bold text-lg shadow-lg transition-transform duration-300 
                           bg-gradient-to-r from-purple-600 to-pink-500 text-white 
                           hover:from-purple-700 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-center text-green-400 font-semibold mt-4">
                  Message sent successfully! I will get back to you shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-red-400 font-semibold mt-4">
                  Oops! Something went wrong. Please try again later or email me directly.
                </p>
              )}

              
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* Footer  */}
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Copyright Text */}
          <p className="text-sm text-gray-500 mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} Mohd Bilal. All rights reserved.
          </p>
          
          {/* Social Icons (Bigger and with subtle glow effect) */}
          <div className="flex space-x-8">
            
            {/* GitHub */}
            <a
              href="https://github.com/mohdbilal123456" // Replace with your GitHub profile link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition-all duration-300 transform hover:scale-125 hover:text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]"
              aria-label="GitHub Profile"
            >
              <Github className="w-8 h-8" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohd-bilal-924265237/" // Replace with your LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition-all duration-300 transform hover:scale-125 hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-8 h-8" />
            </a>

            {/* Email */}
            <a
              href="mailto:mohdbilalb09@gmail.com" // Replace with your actual email
              className="text-gray-300 transition-all duration-300 transform hover:scale-125 hover:text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]"
              aria-label="Email Address"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
